import React, { useState,useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconHeart from "react-native-vector-icons/AntDesign";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconOctions from "react-native-vector-icons/Octicons";

import { fetchSongsRequest } from "../redux/actions/songAction";
import { useDispatch, useSelector } from "react-redux";

const YourLibrary = ({ navigation }) => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state) => state.songs);

  const categoryMusic = [
    {
      id: 1,
      name: "Playlists",
    },

    {
      id: 2,
      name: "New tag",
    },

    {
      id: 3,
      name: "Songs",
    },

    {
      id: 4,
      name: "Albums",
    },

    {
      id: 5,
      name: "Artists",
    },
  ];


  const hienThi = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.categoryMusic}
      >
        <Text style={styles.categoryMusicText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Error: {error}
      </Text>
    );
  }

  const showSongs = ({ item }) => {
    return (
        <View style={styles.song}>
        <TouchableOpacity style={styles.detailListSong}
                          onPress={() =>
                            navigation.navigate("PlayAnAudio", { song: item, ds : songs })
                          }
        >
          <Image
            source={{ uri: item.image }}
            style={styles.imageSong}
          ></Image>
          <View style={styles.detailSong}>
            <Text style={styles.titleSong}>{item.name}</Text>
            <Text style={styles.nameSingerSing}>{item.singer}</Text>
            <View style={styles.detailContentSong}>
              <IconAntDesign name="caretright" size={16} color="gray" />
              <Text style={styles.countViewSong}>68M</Text>
              <IconOctions name="dot-fill" size={16} color="gray" />
              <Text style={styles.timeSong}>03:35</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.heartSong}>
          <IconHeart
            name="heart"
            size={20}
            color="violet"
            style={styles.distance}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>Your Library</Text>
          <TouchableOpacity>
            <Icon name="search" size={28} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={styles.headerCategory}>
          <FlatList
            data={categoryMusic}
            keyExtractor={(item) => item.name.toString()}
            renderItem={hienThi}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
      <FlatList
            data={songs}
            keyExtractor={(item) => item.id}
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

  header: {
    flex: 1,
    padding: 15,
  },

  headerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },

  headerCategory: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  categoryMusic: {
    backgroundColor: "rgba(0,0,0,0.03)",
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },

  categoryMusicText: {
    color: "gray",
    fontSize: 16,
  },

  row: {
    flex: 1,
    justifyContent: "space-between",
  },

  song: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },

  detailListSong: {
    flexDirection: "row",
  },

  imageSong: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  accountArtist: {
    marginLeft: 10,
  },

  nameSinger: {
    fontSize: 16,
    fontWeight: "bold",
  },

  detailAccountArtist: {
    flexDirection: "row",
    alignItems: "center",
  },

  countFollow: {
    fontSize: 14,
    marginLeft: 5,
    color: "gray",
  },

  follow: {
    fontSize: 14,
    marginLeft: 5,
    color: "gray",
  },

  buttonFollow: {
    backgroundColor: "black",
    borderRadius: 50,
    height: 40,
    width: 90,
    justifyContent: "center",
  },

  textFollow: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },

  detailSong: {
    marginLeft: 10,
  },

  titleSong: {
    fontSize: 16,
    fontWeight: "bold",
  },

  countViewSong: {
    fontSize: 14,
    marginLeft: 5,
  },

  timeSong: {
    fontSize: 14,
    marginLeft: 5,
  },

  distance: {
    marginRight: 10,
  },

  //-----------footer-----------
  footer: {
    flex: 5,
  },

  nameSingerSing: {
    fontSize: 15,
    color: "gray",
  },

  timeSong: {
    color: "gray",
    fontSize: 15,
  },

  detailContentSong: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 110,
  },

  countViewSong: {
    color: "gray",
    fontSize: 15,
  },

  distance: {},

  heartSong: {
    justifyContent: "center",
  },

  countViewSongBling: {
    marginRight: 5,
  },

  timeSongBling: {
    marginLeft: 5,
  },
});

export default YourLibrary;
