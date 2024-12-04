import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { getChatGPTResponse } from "../component/chatGPT";
import { supabase } from "../component/supabaseClient";
import Ionicons from "react-native-vector-icons/Ionicons";


const ChatScreen = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    if (userMessage.trim() === "") return;

    try {
      // Lấy phản hồi từ ChatGPT
      const chatResponse = await getChatGPTResponse(userMessage);

      // Lưu lịch sử chat
      const { error } = await supabase
        .from("chats")
        .insert([{ user_message: userMessage, ai_response: chatResponse }]);
      if (error) console.error("Error saving chat:", error.message);

      // Cập nhật chat history
      setChatHistory([
        ...chatHistory,
        { type: "user", message: userMessage },
        { type: "ai", message: chatResponse },
      ]);

      setUserMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Ẩn bàn phím khi nhấn vào vùng ngoài input */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <ScrollView
            style={styles.chatHistoryContainer}
            contentContainerStyle={styles.chatHistoryContent}
          >
            {chatHistory.map((chat, index) => (
              <View
                key={index}
                style={[
                  styles.chatMessageContainer,
                  chat.type === "user"
                    ? styles.userMessageContainer
                    : styles.aiMessageContainer,
                ]}
              >
                <Image
                  source={
                    chat.type === "user"
                      ? require("../../assets/images/user-avatar.png")
                      : require("../../assets/images/user-avatar.png")
                  }
                  style={styles.avatar}
                />
                <Text
                  style={[
                    styles.chatMessageText,
                    chat.type === "user" && styles.userMessageText,
                  ]}
                >
                  {chat.message}
                </Text>
              </View>
            ))}
          </ScrollView>

          {/* Khung nhập tin nhắn */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              value={userMessage}
              onChangeText={setUserMessage}
            />
            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleSendMessage}
            >
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f8",
  },
  innerContainer: {
    flex: 1,
    paddingTop: 30, // Khoảng cách từ top
  },
  chatHistoryContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  chatHistoryContent: {
    paddingVertical: 10,
  },
  chatMessageContainer: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "flex-end",
  },
  userMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#0084ff",
    borderRadius: 20,
    padding: 10,
    maxWidth: "70%",
    flexDirection: "row",
  },
  aiMessageContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#e5e5ea",
    borderRadius: 20,
    padding: 10,
    maxWidth: "70%",
    flexDirection: "row",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  chatMessageText: {
    fontSize: 16,
    color: "#333",
  },
  userMessageText: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff", // Thêm nền trắng để dễ dàng nhìn thấy input
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#0084ff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ChatScreen;
