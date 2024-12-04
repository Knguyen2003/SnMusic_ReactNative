import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image,
  } from "react-native";
  import Icon from "react-native-vector-icons/Ionicons";
  import IconMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
  import IconHeart from "react-native-vector-icons/AntDesign";
  import IconAntDesign from "react-native-vector-icons/AntDesign";
  import IconOctions from "react-native-vector-icons/Octicons";
  import React, { useState } from "react";
  
  import searchAll from "../component/search";
  
  export default function SearchAudio() {
    const categoryMusic = [
      {
        id: 1,
        name: "All",
      },
  
      {
        id: 2,
        name: "Tracks",
      },
  
      {
        id: 3,
        name: "Albums",
      },
  
      {
        id: 4,
        name: "Artists",
      },
    ];
  
    const [focusInput, setFocusInput] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(1);
  
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState({
      albums: [],
      songs: [],
      artists: [],
    });
  
    const handleSearch = async () => {
      const searchResults = await searchAll(keyword);
      setResults(searchResults);
    };

    const handleClear = () => {
      setKeyword(""); // Xóa nội dung ô tìm kiếm
    };
  
    const getFilteredResults = () => {
      switch (selectedCategory) {
        case 1:
          return [
            ...results.songs.map((song) => ({ ...song, type: "song" })),
            ...results.albums.map((album) => ({ ...album, type: "album" })),
            ...results.artists.map((artist) => ({ ...artist, type: "artist" })),
          ];
        case 2:
          return results.songs.map((song) => ({ ...song, type: "song" }));
        case 3:
          return results.albums.map((album) => ({ ...album, type: "album" }));
        case 4:
          return results.artists.map((artist) => ({ ...artist, type: "artist" }));
        default:
          return [];
      }
    };
  
    const hienThi = ({ item }) => {
      return (
        <TouchableOpacity
          style={[
            styles.categoryMusic,
            selectedCategory === item.id && styles.categorySelected, // Thêm gạch dưới khi mục được chọn
          ]}
          onPress={() => setSelectedCategory(item.id)} // Thay đổi trạng thái khi nhấn
        >
          <Text
            style={[
              styles.categoryMusicText,
              selectedCategory === item.id && styles.categoryTextSelected, // Đổi màu chữ khi mục được chọn
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
  
    const showSongs = ({ item }) => {
      return (
        <View style={styles.song}>
          <TouchableOpacity
            style={styles.detailListSong}
            onPress={() => navigation.navigate("PlayAnAudio")}
          >
            <Image source={{ uri: item.image }} style={styles.imageSong}></Image>
            <View style={styles.detailSong}>
              <Text style={styles.titleSong}>{item.name}</Text>
              <Text style={styles.nameSingerSing}>{item.singer}</Text>
  <View style={styles.detailContentSong}>
                <IconAntDesign name="caretright" size={16} color="gray" />
                <Text style={styles.countViewSong}>2.1M</Text>
                <IconOctions name="dot-fill" size={16} color="gray" />
                <Text style={styles.timeSong}>3:36</Text>
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
  
    const showAlbum = ({ item }) => {
      return (
        <View style={styles.song}>
          <TouchableOpacity style={styles.detailListSong}>
            <Image source={{ uri: item.image }} style={styles.imageSong}></Image>
            <View style={styles.detailSong}>
              <Text style={styles.titleSong}>{item.nameAlbum}</Text>
              <View style={styles.detailContentSong}>
                <Text style={styles.countViewSongBling}>{item.nameSinger}</Text>
                <IconOctions name="dot-fill" size={16} color="gray" />
                <Text style={styles.timeSongBling}>{item.numberSong}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.heartSong}>
            <IconAntDesign
              name="right"
              size={20}
              color="black"
              style={styles.distance}
            />
          </TouchableOpacity>
        </View>
      );
    };
  
    const showArtist = ({ item }) => {
      return (
        <View style={styles.song}>
          <TouchableOpacity style={styles.detailListSong}>
            <Image source={{ uri: item.image }} style={styles.imageSong}></Image>
            <View style={styles.accountArtist}>
              <Text style={styles.nameSinger}>{item.name}</Text>
              <View style={styles.detailAccountArtist}>
                <IconMaterialCommunity
                  name="account-outline"
                  size={16}
                  color="gray"
                />
                <Text style={styles.countFollow}>{item.follower}</Text>
                <Text style={styles.follow}>Followers</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.textFollow}>Follow</Text>
          </TouchableOpacity>
        </View>
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        {/* Search */}
        <View style={styles.top}>
          <View style={[styles.searchView, focusInput && styles.focusInput]}>
            <TextInput
              style={styles.input}
              placeholder="Search..............................................."
              value={keyword}
              onChangeText={setKeyword}
              onSubmitEditing={handleSearch} // Gọi hàm tìm kiếm khi nhấn enter
              onFocus={() => setFocusInput(true)}
              onBlur={() => setFocusInput(false)}
            />
            <TouchableOpacity style={styles.xView} onPress={handleClear}>
              <Text style={styles.text}>X</Text>
            </TouchableOpacity>
          </View>
  
          {/* Category */}
          <View style={styles.header}>
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
        </View>
  
        {/* Content */}
        <View style={styles.content}>
          <FlatList
            data={getFilteredResults()}
            keyExtractor={(item, index) => `${item.type}-${item.id}-${index}`}
            renderItem={({ item }) => {
              switch (item.type) {
                case "song":
                  return showSongs({ item });
                case "album":
                  return showAlbum({ item });
                case "artist":
                  return showArtist({ item });
                default:
                  return null;
              }
            }}
            ListEmptyComponent={() => (
              <Text style={{ textAlign: "center", marginTop: 20, color: "gray" }}>
                No results found.
              </Text>
            )}
          />
        </View>
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
      flex: 1.5,
    },
    content: {
      flex: 5,
    },
    searchView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 2,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: "white",
      borderRadius: 40,
      borderWidth: 0.5,
      marginTop: 25,
    },
    xView: {
      backgroundColor: "black",
      width: 28,
      height: 28,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      marginRight: 10,
    },
    text: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    focusInput: {
      borderColor: "blue",
    },
  
    //-----------header-----------
    header: {
      flex: 2,
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
    },
  
    categoryMusic: {
      padding: 10,
      paddingLeft: 22,
      margin: 5,
    },
  
    categoryMusicText: {
      color: "gray",
      fontSize: 18,
    },
  
    row: {
      flex: 1,
      justifyContent: "space-between",
    },
  
    song: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      borderBottomColor: "rgba(0,0,0,0.2)",
    },
  
    detailListSong: {
      flexDirection: "row",
      alignItems: "center",
    },
  
    imageSong: {
      width: 70,
      height: 70,
      borderRadius: 10,
    },
  
    accountArtist: {
      marginLeft: 10,
  justifyContent: "center",
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
  
    //Chuyen mau
    // Gạch dưới màu xanh cho mục được chọn
    categorySelected: {
      borderBottomWidth: 2,
      borderBottomColor: "blue",
    },
    // Màu chữ khi được chọn
    categoryTextSelected: {
      color: "blue",
      fontWeight: "bold",
    },
  });