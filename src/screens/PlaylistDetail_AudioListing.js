import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconEntypo01 from "react-native-vector-icons/Entypo";
import IconHeart from "react-native-vector-icons/Feather";
import IconOctions from "react-native-vector-icons/Octicons";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const PlaylistDetail_AudioListing = (navigation) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top */}
      <View style={styles.top}>
        {/* Header */}
        <View style={styles.header}>
          <IconEntypo01 name="chevron-thin-left" size={22} color="gray" />
          <Icon name="cast-connected" size={25} color="gray" />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Content - left */}
          <View style={styles.contentLeft}>
            <ImageBackground
              source={require("../../assets/images/PlaylistDetail_AudioListing/top50.png")}
              style={styles.imageContent}
            >
              <Text style={styles.textContentTop}>Top 50</Text>
              <Text style={styles.textContentCountry}>Canada</Text>
            </ImageBackground>
          </View>

          {/* Content - right */}
          <View style={styles.contentRight}>
            <Text style={styles.titleContent}>Top 50 - Canada</Text>

            <View style={styles.detailContent}>
              <IconHeart name="heart" size={20} color="gray" />
              <Text style={styles.countView}>1,234</Text>
              <IconOctions name="dot-fill" size={20} color="gray" />
              <Text>05:10:18</Text>
            </View>

            <Text style={styles.endContent}>Daily chart-toppers update</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <IconHeart name="heart" size={25} color="gray" />
            <IconEntypo
              name="dots-three-horizontal"
              size={25}
              color="gray"
              style={styles.distance}
            />
          </View>

          <View style={styles.footerRight}>
            <IconFontAwesome name="random" size={25} color="gray" />
            <Image
              source={require("../../assets/images/PlaylistDetail_AudioListing/listenMusic.png")}
              style={styles.listen}
            ></Image>
          </View>
        </View>
      </View>

      {/* Center */}
      <View style={styles.center}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {/* Song 01 */}
          <View style={styles.song}>
            <View style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/PlaylistDetail_AudioListing/song01.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>FLOWER</Text>
                <Text style={styles.nameSinger}>Jessica Gonzalez</Text>
                <View style={styles.detailContentSong}>
                  <IconAntDesign name="caretright" size={16} color="gray" />
                  <Text style={styles.countViewSong}>2.1M</Text>
                  <IconOctions name="dot-fill" size={16} color="gray" />
                  <Text style={styles.timeSong}>3:36</Text>
                </View>
              </View>
            </View>

            <IconEntypo
              name="dots-three-horizontal"
              size={25}
              color="gray"
              style={styles.distance}
            />
          </View>

          {/* Song 02 */}
          <View style={styles.song}>
            <View style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/PlaylistDetail_AudioListing/song02.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>Sape of You</Text>
                <Text style={styles.nameSinger}>Anthony Taylor</Text>
                <View style={styles.detailContentSong}>
                  <IconAntDesign name="caretright" size={16} color="gray" />
                  <Text style={styles.countViewSong}>68M</Text>
                  <IconOctions name="dot-fill" size={16} color="gray" />
                  <Text style={styles.timeSong}>03:35</Text>
                </View>
              </View>
            </View>

            <IconEntypo
              name="dots-three-horizontal"
              size={25}
              color="gray"
              style={styles.distance}
            />
          </View>

          {/* Song 03 */}
          <View style={styles.song}>
            <View style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/PlaylistDetail_AudioListing/song03.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>Blingding Lights</Text>
                <Text style={styles.nameSinger}>Brian Bailey</Text>
                <View style={styles.detailContentSong}>
                  <IconAntDesign name="caretright" size={16} color="gray" />
                  <Text style={styles.countViewSong}>93M</Text>
                  <IconOctions name="dot-fill" size={16} color="gray" />
                  <Text style={styles.timeSong}>04:39</Text>
                </View>
              </View>
            </View>

            <IconEntypo
              name="dots-three-horizontal"
              size={25}
              color="gray"
              style={styles.distance}
            />
          </View>

          {/* Song 04 */}
          <View style={styles.song}>
            <View style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/PlaylistDetail_AudioListing/song04.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>Levitating</Text>
                <Text style={styles.nameSinger}>Anthony Taylor</Text>
                <View style={styles.detailContentSong}>
                  <IconAntDesign name="caretright" size={16} color="gray" />
                  <Text style={styles.countViewSong}>9M</Text>
                  <IconOctions name="dot-fill" size={16} color="gray" />
                  <Text style={styles.timeSong}>07:48</Text>
                </View>
              </View>
            </View>

            <IconEntypo
              name="dots-three-horizontal"
              size={25}
              color="gray"
              style={styles.distance}
            />
          </View>

          {/* Song 05 */}
          <View style={styles.song}>
            <View style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/PlaylistDetail_AudioListing/song05.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>Astronaut in the Ocean</Text>
                <Text style={styles.nameSinger}>Pedro Moreno</Text>
                <View style={styles.detailContentSong}>
                  <IconAntDesign name="caretright" size={16} color="gray" />
                  <Text style={styles.countViewSong}>23M</Text>
                  <IconOctions name="dot-fill" size={16} color="gray" />
                  <Text style={styles.timeSong}>3:36</Text>
                </View>
              </View>
            </View>

            <IconEntypo
              name="dots-three-horizontal"
              size={25}
              color="gray"
              style={styles.distance}
            />
          </View>

          {/* Song 06 */}
          <View style={styles.song}>
            <View style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/PlaylistDetail_AudioListing/song06.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>Dynamite</Text>
                <Text style={styles.nameSinger}>Elena Jimenez</Text>
                <View style={styles.detailContentSong}>
                  <IconAntDesign name="caretright" size={16} color="gray" />
                  <Text style={styles.countViewSong}>10M</Text>
                  <IconOctions name="dot-fill" size={16} color="gray" />
                  <Text style={styles.timeSong}>06:22</Text>
                </View>
              </View>
            </View>

            <IconEntypo
              name="dots-three-horizontal"
              size={25}
              color="gray"
              style={styles.distance}
            />
          </View>
        </ScrollView>
      </View>

      {/* Bottom */}
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Image
            source={require("../../assets/images/PlaylistDetail_AudioListing/songPlay.png")}
            style={styles.imageSongPlay}
          ></Image>
          <View style={styles.detailSongPlay}>
            <Text style={styles.NameSong}>FLOWER</Text>
            <View style={styles.detailContentSongPlay}>
              <Text style={styles.titleSongPlay}>Me</Text>
              <IconOctions name="dot-fill" size={16} color="white" />
              <Text style={styles.titleSingerPlay}>Jessica Gonzalez</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomRight}>
          <IconHeart name="heart" size={25} color="white" />
          <Image
            source={require("../../assets/images/PlaylistDetail_AudioListing/listenMusic.png")}
            style={styles.imageSongPlay01}
          ></Image>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    marginTop: 30,
  },

  //-----top-----
  top: {
    flex: 3,
    padding: 10,
  },

  //-----header-----
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //-----content-----
  //-----contentLeft-----
  content: {
    flex: 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //-----imageContent-----
  imageContent: {
    width: 145,
    height: 145,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  textContentTop: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },

  textContentCountry: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },

  //-----contentRight-----
  titleContent: {
    fontSize: 18,
    fontWeight: "bold",
  },

  detailContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 150,
  },

  endContent: {
    color: "gray",
    fontSize: 16,
  },

  //-----footer-----
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  //-----footerLeft-----
  footerLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //-----footerRight-----
  footerRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  distance: {
    marginLeft: 15,
  },

  listen: {
    width: 45,
    height: 45,
    marginLeft: 15,
  },

  //-----Center-----
  center: {
    flex: 4,
    padding: 10,
  },

  song: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  detailListSong: {
    flexDirection: "row",
    alignItems: "center",
  },

  detailSong: {
    marginLeft: 15,
  },

  imageSong: {
    width: 75,
    height: 75,
  },

  titleSong: {
    fontSize: 18,
  },

  nameSinger: {
    color: "gray",
    fontSize: 16,
  },

  countViewSong: {
    color: "gray",
    fontSize: 15,
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

  //-----Bottom-----
  bottom: {
    flex: 0.75,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imageSongPlay: {
    width: 60,
    height: 60,
  },

  bottomLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleSingerPlay: {
    color: "white",
    fontSize: 15,
    marginLeft: 10,
  },

  NameSong: {
    color: "white",
    fontSize: 18,
  },

  detailSongPlay: {
    marginLeft: 10,
  },

  titleSongPlay: {
    color: "white",
    fontSize: 15,
    marginRight: 10,
  },

  bottomRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  imageSongPlay01: {
    width: 50,
    height: 50,
  },

  detailContentSongPlay: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PlaylistDetail_AudioListing;
