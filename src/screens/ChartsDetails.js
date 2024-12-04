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

import { useDispatch, useSelector } from "react-redux";

import { fetchSongByTopRequest } from "../redux/actions/topSongAction";

const ChartDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { songByTop, loading, error } = useSelector(
    (state) => state.songByTop
  );
  const { top } = route.params;

  useEffect(() => {
    dispatch(fetchSongByTopRequest(top.id));
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <Text
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        Error: {error}
      </Text>
    );
  }

  const showSongs = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.songView}
        onPress={() => navigation.navigate("PlayAnAudio", { song: item, ds : songByTop })}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
              {item.name}
            </Text>
            <Text style={styles.textSinger}>
              {item.artists && item.artists.length > 0
                ? item.artists.map((artist) => artist.name).join(", ")
                : "Unknown Artist"}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.iconSong}>
          <Text
            style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}
          >
            ...
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  console.log(songByTop);
  console.log(top);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
         <Image
            source={{ uri: top.image }}
            style={styles.imageTop}
          />
          <Text  style={styles.nameAlbum}>{top.name}</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={songByTop}
          keyExtractor={(item, index) => index.toString()}
          renderItem={showSongs}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },

  // Top
  top: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1.5,
    margin: 4,
    borderColor: "blue",
    backgroundColor: "rgba(173, 216, 230, 0.3)",
  },

  imageTop:{
    width: 250,
    height: 250,
    borderRadius: 10,
  },

  nameAlbum:{
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },


  // center
  content: {
    flex: 4,
    marginTop: 20,
  },
  songView: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconSong: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
});

export default ChartDetail;
