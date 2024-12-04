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

import { fetchSongByAlbumRequest } from "../redux/actions/albumSongAction";

const TrendAlbumDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { songByAlbum, loading, error } = useSelector(
    (state) => state.songByAlbum
  );
  const { id } = route.params;

  useEffect(() => {
    dispatch(fetchSongByAlbumRequest(id));
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
        onPress={() => navigation.navigate("PlayAnAudio", { song: item })}
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text>Xin chao ạ</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={songByAlbum}
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
  top: {
    flex: 1,
    backgroundColor: "red",
  },
  content: {
    flex: 4,
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

export default TrendAlbumDetail;
