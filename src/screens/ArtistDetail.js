import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Icon01 from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ArtistDetail = ({ navigation, route }) => {
  const { artist } = route.params;

  console.log(artist);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image
          source={{ uri: artist.image }}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
      </View>
      <View style={styles.content}>
        <Text style={{ color: "red" }}>{artist.name}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  top: {
    flex: 1,
    backgroundColor: "red",
  },
  content: {
    flex: 4,
  },
});

export default ArtistDetail;
