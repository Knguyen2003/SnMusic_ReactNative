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

  const hienThi = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.categoryMusic,
          selectedCategory === item.id && styles.categorySelected, // Thêm gạch dưới khi mục được chọn
        ]}
        onPress={() => setSelectedCategory(item.id)} // Thay đổi trạng thái khi nhấn
      >
        <Text style={[
            styles.categoryMusicText,
            selectedCategory === item.id && styles.categoryTextSelected, // Đổi màu chữ khi mục được chọn
          ]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={[styles.searchView, focusInput && styles.focusInput]}>
          <TextInput
            style={styles.input}
            placeholder="Search...."
            value={keyword}
            onChangeText={setKeyword}
            onSubmitEditing={handleSearch}
            onFocus={() => setFocusInput(true)}
            onBlur={() => setFocusInput(false)}
          />
          <TouchableOpacity style={styles.xView}>
            <Text style={styles.text}>x</Text>
          </TouchableOpacity>
        </View>

        {/* Header */}

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

      <View style={styles.content}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {/* Account Artist */}
          <View style={styles.song}>
            <TouchableOpacity style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/YourLibrary/merwatson.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.accountArtist}>
                <Text style={styles.nameSinger}>Mer Watson</Text>
                <View style={styles.detailAccountArtist}>
                  <IconMaterialCommunity
                    name="account-outline"
                    size={16}
                    color="gray"
                  />
                  <Text style={styles.countFollow}>1.234K</Text>
                  <Text style={styles.follow}>Followers</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFollow}>
              <Text style={styles.textFollow}>Follow</Text>
            </TouchableOpacity>
          </View>

          {/* List Song */}
          {/* Song 01 */}
          <View style={styles.song}>
            <TouchableOpacity
              style={styles.detailListSong}
              onPress={() => navigation.navigate("PlayAnAudio")}
            >
              <Image
                source={require("../../assets/images/YourLibrary/song01.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>FLOWER</Text>
                <Text style={styles.nameSingerSing}>Jessica Gonzalez</Text>
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

          {/* Song 02 */}
          <View style={styles.song}>
            <TouchableOpacity style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/YourLibrary/song02.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>Sape of You</Text>
                <Text style={styles.nameSingerSing}>Anthony Taylor</Text>
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

          {/* Song 03 */}
          <View style={styles.song}>
            <TouchableOpacity style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/YourLibrary/song03.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>Blingding Lights</Text>
                <View style={styles.detailContentSong}>
                  <Text style={styles.countViewSongBling}>Ashley Scott</Text>
                  <IconOctions name="dot-fill" size={16} color="gray" />
                  <Text style={styles.timeSongBling}>4 songs</Text>
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

          {/* Song 04 */}
          <View style={styles.song}>
            <TouchableOpacity style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/YourLibrary/song04.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>Levitating</Text>
                <Text style={styles.nameSingerSing}>Anthony Taylor</Text>
                <View style={styles.detailContentSong}>
                  <IconAntDesign name="caretright" size={16} color="gray" />
                  <Text style={styles.countViewSong}>9M</Text>
                  <IconOctions name="dot-fill" size={16} color="gray" />
                  <Text style={styles.timeSong}>07:48</Text>
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

          {/* Song 05 */}
          <View style={styles.song}>
            <TouchableOpacity style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/YourLibrary/song05.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>Astronaut in the Ocean</Text>
                <Text style={styles.nameSingerSing}>Pedro Moreno</Text>
                <View style={styles.detailContentSong}>
                  <IconAntDesign name="caretright" size={16} color="gray" />
                  <Text style={styles.countViewSong}>23M</Text>
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

          {/* Song 06 */}
          <View style={styles.song}>
            <TouchableOpacity style={styles.detailListSong}>
              <Image
                source={require("../../assets/images/YourLibrary/song06.png")}
                style={styles.imageSong}
              ></Image>
              <View style={styles.detailSong}>
                <Text style={styles.titleSong}>Dynamite</Text>
                <Text style={styles.nameSingerSing}>Elena Jimenez</Text>
                <View style={styles.detailContentSong}>
                  <IconAntDesign name="caretright" size={16} color="gray" />
                  <Text style={styles.countViewSong}>10M</Text>
                  <IconOctions name="dot-fill" size={16} color="gray" />
                  <Text style={styles.timeSong}>06:22</Text>
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
        </ScrollView>
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
    marginTop:25,

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
