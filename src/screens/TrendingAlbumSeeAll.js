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

import { fetchAlbumTrenRequest } from "../redux/actions/trendingAlbumAction";

const TrendingAlbumSeeAll = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { albumTrend, loading, error } = useSelector((state) => state.albumTrend);

  const showAlbumTrending = ({ item }) => {
    return (
      <View style={styles.containerAlbum}>
        <TouchableOpacity style={styles.album}>
        <View>
          <Image
            source={{ uri: item.image }}
            style={styles.imageAlbum}
          />
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

  useEffect(() => {
    dispatch(fetchAlbumTrenRequest());
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
            <Text style={styles.textTrending}>Trending Albums</Text>
        </TouchableOpacity>
        <View style={styles.ContentInside}>
           <FlatList
            data={albumTrend}
            keyExtractor={(item) => item.id}
            renderItem={showAlbumTrending}
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
    marginBottom: 50,
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

  // Album Trending
  album:{
    alignItems : "center",
    justifyContent: "center",
    margin:5,
  },

  imageAlbum: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },

  containerAlbum:{
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:5,
  },

  textNameAB:{
    width: 180,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },

  nameSinger:{
    fontSize: 17,
    fontWeight: "bold",
    textAlign:"left",
  },

});

export default TrendingAlbumSeeAll;
