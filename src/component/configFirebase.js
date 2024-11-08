// Import các chức năng từ Firebase SDK
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCB3Rhl5cKHFoJihkQCr8C24V4e4-ZLc7s",
  authDomain: "sn-music-010803.firebaseapp.com",
  projectId: "sn-music-010803",
  storageBucket: "sn-music-010803.appspot.com",
  messagingSenderId: "672546147252",
  appId: "1:672546147252:web:64a9557ce81a054e5040e1",
  measurementId: "G-5FQQH1K39X",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Auth với AsyncStorage (giúp lưu trữ thông tin đăng nhập)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), // Lưu trữ thông tin đăng nhập
});

export { app, auth };
