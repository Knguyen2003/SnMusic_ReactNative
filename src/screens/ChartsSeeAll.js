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

import { fetchTopsRequest } from "../redux/actions/topAction";

const ChartsSeeAll = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { tops, loading, error } = useSelector((state) => state.tops);

  const showTops = ({ item }) => {
    return (
      <TouchableOpacity style={styles.chart}>
        <Image
          source={{ uri: item.image }}
          style={styles.imageTop}
        />
        <Text style={styles.textNameAB}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch(fetchTopsRequest());
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
            <Text style={styles.textTrending}>Charts</Text>
        </TouchableOpacity>
        <View style={styles.ContentInside}>
        <FlatList
            data={tops}
            keyExtractor={(item) => item.id}
            renderItem={showTops}
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

  // Charts
  imageTop:{
    width:170,
    height:170,
    borderRadius:5,
  },

  chart:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
  },

  textNameAB:{
    width:170,

  }

});

export default ChartsSeeAll;
