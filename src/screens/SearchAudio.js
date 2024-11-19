import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function SearchAudio() {
  const [focusInput, setFocusInput] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={[styles.searchView, focusInput && styles.focusInput]}>
          <TextInput
            style={styles.input}
            placeholder="Search...."
            onFocus={() => setFocusInput(true)}
            onBlur={() => setFocusInput(false)}
          />
          <TouchableOpacity style={styles.xView}>
            <Text style={styles.text}>x</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
  },
  top: {
    flex: 1,
  },
  content: {
    flex: 8,
    backgroundColor: "blue",
  },
  searchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1.5,
  },
  xView: {
    backgroundColor: "black",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  focusInput: {
    borderColor: "blue",
  },
});
