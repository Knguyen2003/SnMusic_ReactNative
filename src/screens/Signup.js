import React, { useState } from "react";
import {
  TextInput,
  Button,
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import { auth } from "../component/configFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validatePassword = (password) => {
    // Mật khẩu tối thiểu 8 ký tự, chứa ít nhất một chữ cái viết hoa, một chữ cái viết thường, một chữ số và một ký tự đặc biệt
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleRegister = () => {
    setLoading(true);
    setError("");

    if (!validatePassword(password)) {
      setLoading(false);
      setError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Sign Up Successful", "Account created and signed in!");
        setEmail("");
        setPassword("");
        setLoading(false);
        navigation.navigate("NaviBottom");
      })
      .catch((error) => {
        setLoading(false);
        if (error.code === "auth/email-already-in-use") {
          setError("That email address is already in use!");
        } else if (error.code === "auth/invalid-email") {
          setError("That email address is invalid!");
        } else {
          setError(`An error occurred: ${error.message}`);
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
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

      <Button
        title={loading ? "Signing up..." : "Sign Up"} //Thay đổi title của button khi đang loading
        onPress={handleRegister}
        disabled={loading} //Dùng để disable button khi đang loading (không cho người dùng click)
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
  error: {
    color: "red",
  },
});

export default RegisterScreen;
