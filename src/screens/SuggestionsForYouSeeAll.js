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

import { fetchSongsRequest } from "../redux/actions/songAction";

const SuggestionsForYouSeeAll = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { songs, loading, error} = useSelector((state) => state.songs);

  const showSongs = ({ item }) => {
    return (
      <TouchableOpacity style={styles.suggestion}>
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

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.logoutTrendAlbum}>
                <MaterialIcons name="arrow-back-ios" size={25} style={styles.iconout}/>
            <Text style={styles.textTrending}>Suggestions For You</Text>
        </TouchableOpacity>
        <View style={styles.ContentInside}>
        <FlatList
            data={songs}
            keyExtractor={(item) => item.id}
            renderItem={showSongs}
            numColumns={2}
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

  //-----content-----

  content: {
    marginBottom: 10,
  },

  iconout:{
    width:30,
    color:'gray',
  },

  logoutTrendAlbum:{
    flexDirection:'row',
    marginTop:10,
  },

  textTrending:{
    fontSize:18,
    fontWeight:'bold',
    color:'gray',
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
    height: "auto",
    marginTop:25,
  },

  // suggestions for you
  suggestion:{
    margin:8,
  },

  imageSuggest:{
    width:170,
    height:170,
    flexDirection:'column',
    justifyContent:'flex-end',
    
  },

  viewSuggest:{
    backgroundColor: "rgba(0,0,0,0.4)",
    height:65,
  },

  textSuggest:{
    fontSize:17,
    fontWeight:'bold',
    color:'white',
    marginLeft:20,
    marginTop:10,
  },

});

export default SuggestionsForYouSeeAll;
