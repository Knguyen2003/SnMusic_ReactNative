import React from "react";
import { Text, StyleSheet, View, SafeAreaView, Image, ScrollView } from "react-native";

const ArtistDetail = ({ navigation, route }) => {
  const { artist } = route.params;

  console.log(artist);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image source={{ uri: artist.image }} style={styles.imageTop} />
        <Text style={styles.nameAlbum}>{artist.name}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.detailSinger}>
          <Text style={styles.realName}>Tên Thật: {artist.RealName}</Text>
          <Text style={styles.realName}>Ngày Sinh: {artist.dob}</Text>
          <Text style={styles.realName}>Follower: {artist.follower}</Text>
        </View>
        
        {/* Sử dụng ScrollView để cho phép cuộn đoạn mô tả dài */}
        <ScrollView>
          <Text style={styles.describe}>{artist.describe}</Text>
        </ScrollView>
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
    flex: 4.5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1.5,
    margin: 4,
    borderColor: "blue",
    backgroundColor: "rgba(173, 216, 230, 0.3)",
  },

  imageTop: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },

  nameAlbum: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  describe: {
    textAlign: "justify",
    fontSize: 17,
    margin: 10,
    color: "gray",
    fontStyle: "italic",
  },

  detailSinger: {
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 10,
  },

  realName: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
  },

  // center
  content: {
    flex: 5,
    marginTop: 20,
  },
});

export default ArtistDetail;
