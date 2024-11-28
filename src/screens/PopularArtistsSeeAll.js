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

import { fetchArtistsRequest } from "../redux/actions/artistAction";

const PopularArtistsSeeAll = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { artists, loading, error } = useSelector((state) => state.artists);

  const showPopopularArtists = ({ item }) => {
    return (
      <TouchableOpacity style={styles.popular}>
        <Image
          source={{ uri: item.image }}
          style={styles.imageSingerP}
        />
        <Text style={styles.nameSingerP}>{item.name}</Text>
        <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.textFollow}>Follow</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch(fetchArtistsRequest());
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
            <Text style={styles.textTrending}>Popular Artists</Text>
        </TouchableOpacity>
        <View style={styles.ContentInside}>
        <FlatList
          data={artists}
          keyExtractor={(item) => item.id}
          renderItem={showPopopularArtists}
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

  // Popular Artist

  popular:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
  },

  buttonFollow:{
    borderRadius:10,
    borderWidth:0,
    padding:4,
    width:80,
    backgroundColor:'blue',
    marginTop:5,
  },

  nameSingerP:{
    fontSize:18,
    textAlign:'left',
  },

  textFollow:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color:'white',
  },

  imageSingerP:{
    width:170,
    height:170,
    borderRadius:100,
    margin:10,
  },

});

export default PopularArtistsSeeAll;
