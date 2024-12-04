import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import IconHeart from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

import { Audio } from "expo-av";

const PlayAnAudio = ({ navigation, route }) => {
  const { song, ds } = route.params;

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // useEffect to automatically play the sound when the component mounts
  useEffect(() => {
    const playAudio = async () => {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: song.file_url },
        { shouldPlay: true }
      );
      setSound(newSound);
      setIsPlaying(true); // Đặt trạng thái là đang phát
    };

    playAudio();

    return () => {
      if (sound) {
        sound.unloadAsync(); // Giải phóng tài nguyên âm thanh khi component unmount
      }
    };
  }, [song]); // Thực hiện lại nếu song thay đổi

  const playSound = async (uri) => {
    if (isPlaying) {
      // Nếu nhạc đang phát, dừng nhạc
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      if (!sound) {
        // Nếu chưa có instance âm thanh, tạo mới và phát
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri },
          { shouldPlay: true }
        );
        setSound(newSound); // Lưu lại instance của âm thanh
        setIsPlaying(true); // Đặt trạng thái là đang phát
      } else {
        // Nếu sound đã tồn tại, tiếp tục phát nhạc mà không tạo mới
        await sound.playAsync();
        setIsPlaying(true); // Đặt trạng thái là đang phát
      }
    }
  };

  const navi = () => {
    navigation.setParams({ data: song });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/PlayAnAudio/image01.png")}
        style={styles.image01}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.playText}>Play</Text>
          <TouchableOpacity onPress={navi}>
            <Icon name="chevron-down" size={26} color="white" />
          </TouchableOpacity>
        </View>

        {/* content */}
        <View style={styles.content}></View>
        {/* footer */}
        <View style={styles.footer}>
          <View style={styles.centerHeader}>
            <Text style={styles.songTitle}>{song.name}</Text>
            <Text style={styles.artistName}>
              {song.artists && song.artists.length > 0
                ? song.artists.map((artist) => artist.name).join(", ")
                : "Unknown Artist"}
            </Text>
          </View>

          <Image
            source={require("../../assets/images/PlayAnAudio/image02Content.png")}
            style={styles.image02}
          />
          <View style={styles.centerContent}>
            <Text style={styles.timeText}>0:06</Text>
            <Text style={styles.timeText}>3:08</Text>
          </View>

          <View style={styles.centerFooter}>
            <IconFontAwesome name="random" size={25} color="white" />
            <AntDesign name="stepbackward" size={26} color="white" />
            <TouchableOpacity onPress={() => playSound(song.file_url)}>
              <FontAwesome
                name={isPlaying ? "pause" : "play"}
                size={30}
                color="#ffffff"
              />
            </TouchableOpacity>
            <AntDesign name="stepforward" size={26} color="white" />
            <IconEntypo
              name="dots-three-horizontal"
              size={25}
              color="white"
              style={styles.distance}
            />
          </View>

          <View style={styles.bottomFooter}>
            <View style={styles.bottomFooterContent}>
              <IconHeart name="heart" size={25} color="white" />
              <Text style={styles.countView}>12K</Text>
              <MaterialCommunityIcons
                name="comment-text-outline"
                size={25}
                color="white"
              />
              <Text style={styles.countView}>450</Text>
            </View>

            <IconAntDesign name="upload" size={22} color="white" />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },

  image01: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  //-----Header-----

  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.2)",
  },

  playText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  //-----content-----
  content: {
    flex: 8,
  },

  //-----footer-----

  footer: {
    flex: 7,
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
  },

  songTitle: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },

  artistName: {
    fontSize: 17,
    color: "white",
  },

  centerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  timeText: {
    fontSize: 17,
    color: "white",
  },

  centerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  image03: {
    width: 60,
    height: 60,
  },

  countView: {
    color: "white",
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },

  bottomFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  bottomFooterContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default PlayAnAudio;
