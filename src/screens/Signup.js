import React, { useState, useEffect } from "react";
import {
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { auth } from "../component/configFirebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

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

  {
    /*ĐĂNG KÍ VỚI EMAIL VÀ PASSWORD */
  }
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

    createUserWithEmailAndPassword(auth, email, password) //Tạo tài khoản mới với email và password
      .then((userCredential) => {
        const user = userCredential.user; //Lấy thông tin user từ userCredential

        sendEmailVerification(user) //Gửi email xác thực tài khoản
          .then(() => {
            Alert.alert(
              "Sign Up Successful",
              "Account created! Please check your email to verify your address."
            );
            setEmail("");
            setPassword("");
            setLoading(false);
            navigation.navigate("NaviBottom");
          })
          .catch((error) => {
            setLoading(false);
            setError(`Error sending verification email: ${error.message}`);
          });
      })
      .catch((error) => {
        setLoading(false);
        if (error.code === "auth/email-already-in-use") {
          setError("That email address is already in use!");
        } else {
          setError(`That email address is invalid!`);
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>Register an Account</Text>
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
        onPress={handleRegister}
        disabled={loading}
        style={styles.button}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text style={{ fontWeight: "bold", color: "white" }}>Sign up</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  error: {
    color: "red",
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

export default RegisterScreen;
