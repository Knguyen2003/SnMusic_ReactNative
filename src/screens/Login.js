import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  ActivityIndicator,
} from "react-native";

import { auth } from "../component/configFirebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError("");

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setLoading(false);
      setError("Invalid email format.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user; //Dùng để lấy thông tin user
        Alert.alert("Login Successful", "You have successfully logged in!");
        navigation.navigate("NaviBottom");
        setEmail("");
        setPassword("");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.code === "auth/user-not-found") {
          setError("No user found for this email address.");
          return;
        } else if (error.code === "auth/wrong-password") {
          setError("Incorrect password.");
          return;
        } else if (error.code === "auth/invalid-email") {
          setError("The email address is invalid.");
          return;
        } else if (error.code === "auth/invalid-credential") {
          setError("Please check your email and password.");
        } else {
          setError(`An error occurred: ${error.message}`);
          return;
        }
      });
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>Login Account</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity
        onPress={handleLogin}
        disabled={loading}
        style={styles.button}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text style={{ fontWeight: "bold", color: "white" }}>Login</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  error: {
    color: "red",
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    borderWidth: 1,
  },
});

export default Login;
