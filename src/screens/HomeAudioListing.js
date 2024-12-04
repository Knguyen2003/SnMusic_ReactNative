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

import { useDispatch, useSelector } from "react-redux";

import { fetchArtistsRequest } from "../redux/actions/artistAction";
import { fetchAlbumTrenRequest } from "../redux/actions/trendingAlbumAction";
import { fetchTopsRequest } from "../redux/actions/topAction";
import { fetchSongsRequest } from "../redux/actions/songAction";

const HomeAudioListing = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [followedArtists, setFollowedArtists] = useState({}); // Quản lý trạng thái Follow

  const dispatch = useDispatch();
  const { artists, loading, error } = useSelector((state) => state.artists);
  const { albumTrend, loading1, error1 } = useSelector(
    (state) => state.albumTrend
  );
  const { tops, loading3, error3 } = useSelector((state) => state.tops);
  const { songs, loading2, error2 } = useSelector((state) => state.songs);

  const displayedAlbums = albumTrend.slice(0, 10);
  const popularArtist = artists.slice(0, 6);
  const chart = tops.slice(0, 6);

  // Hàm xử lý Follow/Unfollow
  const handleFollowToggle = (artistId) => {
    setFollowedArtists((prevState) => ({
      ...prevState,
      [artistId]: !prevState[artistId], // Đổi trạng thái Follow
    }));
  };

  const showPopopularArtists = ({ item }) => {
    const isFollowed = followedArtists[item.id] || false; // Kiểm tra trạng thái Follow
    return (
      <TouchableOpacity
        style={styles.popular}
        onPress={() => navigation.navigate("ArtistDetail", { artist: item })}
      >
        <Image source={{ uri: item.image }} style={styles.imageSingerP} />
        <Text style={styles.nameSingerP}>{item.name}</Text>
        <TouchableOpacity
          style={[
            styles.buttonFollow,
            { backgroundColor: isFollowed ? "gray" : "blue" }, // Đổi màu nút
          ]}
          onPress={() => handleFollowToggle(item.id)}
        >
          <Text style={styles.textFollow}>
            {isFollowed ? "UnFollow" : "Follow"} {/* Đổi text */}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const showAlbumTrending = ({ item }) => {
    return (
      <View style={styles.containerAlbum}>
        <TouchableOpacity
          style={styles.album}
          onPress={() =>
            navigation.navigate("TrendAlbumDetail", { album: item })

          }
        >
          <View>
            <Image source={{ uri: item.image }} style={styles.imageAlbum} />
          </View>

          <View style={styles.containerAlbum}>
            <View>
              <Text style={styles.textNameAB}>{item.nameAlbum}</Text>
              <Text style={styles.textNameSG}>{item.nameSinger}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const showTops = ({ item }) => {
    return (
      <TouchableOpacity style={styles.chart} onPress={() =>
        navigation.navigate("ChartDetail", { top: item})
      }>
        <Image source={{ uri: item.image }} style={styles.imageTop} />
        <Text style={styles.textNameAB}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const showSongs = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.suggestion}
        onPress={() =>
          navigation.navigate("PlayAnAudio", { song: item, ds: songs })
        }
      >
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.imageSuggest}
        >
          <View style={styles.viewSuggest}>
            <Text style={styles.textSuggest}>{item.name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch(fetchArtistsRequest());
    dispatch(fetchTopsRequest());
    dispatch(fetchSongsRequest());
    dispatch(fetchAlbumTrenRequest());
  }, [dispatch]);

  if (loading || loading3 || loading2) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error || error2 || error3) {
    return (
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Error: {error}
      </Text>
    );
  }
  const sections = [
    {
      title: "Suggestions for you",
      content: (
        <View style={styles.ContentInside}>
          <FlatList
            data={songs}
            keyExtractor={(item) => item.id}
            renderItem={showSongs}
            horizontal={true} // thanh cuon ngang
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ),
      screen: "SuggestionsForYouSeeAll",
    },
    {
      title: "Charts",
      content: (
        <View style={styles.ContentInside}>
          <FlatList
            data={chart}
            keyExtractor={(item) => item.id}
            renderItem={showTops}
            horizontal={true} // thanh cuon ngang
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ),
      screen: "ChartsSeeAll",
    },
    {
      title: "Trending albums",
      content: (
        <View style={styles.ContentInside}>
          <FlatList
            data={displayedAlbums}
            keyExtractor={(item) => item.id}
            renderItem={showAlbumTrending}
            horizontal={true} // thanh cuon ngang
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ),
      screen: "TrendingAlbumSeeAll",
    },
    {
      title: "Popular artists",
      content: (
        <View style={styles.ContentInside}>
          <FlatList
            data={popularArtist}
            keyExtractor={(item) => item.id}
            renderItem={showPopopularArtists}
            horizontal={true} // thanh cuon ngang
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ),
      screen: "PopularArtistsSeeAll",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top */}
      <View style={styles.top}>
        {/* Top - Top */}
        <View style={styles.topTop}>
          {/* Top - Top - Left */}
          <Image
            source={require("../../assets/images/HomeAudioListing/Image01Top.png")}
          ></Image>

          {/* Top - Top - Right*/}
          <View style={styles.topTopRight}>
            <Icon name="bell" size={30} color="gray" />
            <Image
              source={require("../../assets/images/HomeAudioListing/avata_01.jpg")}
              style={styles.avataTop}
            ></Image>
          </View>
        </View>
        {/* Top - center */}
        <View style={styles.topCenter}>
          {/* Top - Center */}
          <Text style={{ fontSize: 17, fontWeight: "bold", color:"rgba(173, 216, 230, 0.9)"}}>Xin Chào,</Text>
          <Text style={{ fontSize: 19, fontWeight: "bold"}}>Khôi Nguyên</Text>
        </View>

        {/* Top - Bottom */}
        <View style={styles.topBottom}>
          <Icon01 name="search" size={25} color="black" style={styles.icon}/>
          <TextInput
            style={styles.inputSearch}
            placeholder="What you want to listen to"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>

      {/* center */}
      <View style={styles.content}>
        <FlatList
          data={sections}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.section}>
              <View style={styles.titileContent}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.screen)}
                >
                  <Text style={styles.textSeeAll}>See all</Text>
                </TouchableOpacity>
              </View>
              {item.content}
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 0,
    marginTop: 30,
  },

  //-----top-----

  top: {
    flex: 2,
  },

  topTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  topTopRight: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },

  avataTop: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 15,
  },

  topCenter: {
    marginTop: 10,
  },

  topBottom: {
    padding: 2,
    height: 48,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 40,
    color: "black",
    flexDirection: "row",
    marginTop: 15,
  },

  inputSearch: {
    marginLeft: 10,
    fontSize: 16,
  },

  icon:{
    marginTop: 5,
    marginLeft: 6,
  },
  //-----content-----

  content: {
    flex: 5.5,
    marginBottom: 10,
  },

  textSeeAll: {
    color: "gray",
    fontSize: 17,
  },

  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
  },

  titileContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  ContentInside: {
    height: 295,
  },

  // Album Trending
  album: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },

  imageAlbum: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },

  containerAlbum: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },

  textNameAB: {
    width: 180,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },

  nameSinger: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "left",
  },

  // Popular Artist

  popular: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonFollow: {
    borderRadius: 10,
    borderWidth: 0,
    padding: 4,
    width: 80,
    marginTop: 5,
  },

  nameSingerP: {
    fontSize: 18,
    textAlign: "left",
  },

  textFollow: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },

  imageSingerP: {
    width: 180,
    height: 180,
    borderRadius: 100,
    margin: 10,
  },

  // Charts
  imageTop: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },

  chart: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  // suggestions for you
  suggestion: {
    margin: 8,
  },

  imageSuggest: {
    width: 230,
    height: 260,
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  viewSuggest: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: 70,
  },

  textSuggest: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
    marginTop: 10,
  },
});

export default HomeAudioListing;
