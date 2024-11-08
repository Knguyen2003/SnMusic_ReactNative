import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconHeart from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';





const PlayAnAudio = (navigation) => {
    return (
      <SafeAreaView style={styles.container}>
          <ImageBackground source={require('../../assets/images/PlayAnAudio/image01.png')}
          style={styles.image01}>
              {/* Header */}
              <View style={styles.header}>
                <Text style={styles.playText}>Play</Text>
                <Icon name="chevron-down" size={26} color="white" />
              </View>

             {/* content */}
              <View style={styles.content}>

              </View>
              {/* footer */}
              <View style={styles.footer}>
                <View style={styles.centerHeader}>
                    <Text style={styles.songTitle}>FLOWER</Text>
                    <Text style={styles.artistName}>Jessica Gonzalez</Text>
                </View>

                <Image source={require('../../assets/images/PlayAnAudio/image02Content.png')} style={styles.image02} />
                <View style={styles.centerContent}>
                    <Text style={styles.timeText}>0:06</Text>
                    <Text style={styles.timeText}>3:08</Text>
                </View>

                <View style={styles.centerFooter}>
                    <IconFontAwesome name="random" size={25} color="white" />
                    <AntDesign name="stepbackward" size={26} color="white" />
                    <Image source={require('../../assets/images/PlayAnAudio/image03.png')} style={styles.image03} />
                    <AntDesign name="stepforward" size={26} color="white" />
                    <IconEntypo name="dots-three-horizontal" size={25} color="white" style={styles.distance}/>
                </View>

                <View style={styles.bottomFooter}>
                    <View style={styles.bottomFooterContent}>
                        <IconHeart name="heart" size={25} color="white" />
                        <Text style={styles.countView}>12K</Text>
                        <MaterialCommunityIcons name="comment-text-outline" size={25} color="white" />
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
  container : {
    flex: 1,
  },

  image01: {
    width: '100%', 
    height: '100%',
  },

  //-----Header-----

  header:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:15,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  playText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  //-----content-----
  content:{
    flex:8,
  },


  //-----footer-----

  footer:{
    flex: 7,
    justifyContent: 'flex-end',
    padding:10,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  songTitle:{
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },

  artistName:{
    fontSize: 17,
    color: 'white',
  },

  centerContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  timeText:{
    fontSize: 17,
    color: 'white',
  },

  centerFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  image03:{
    width: 60,
    height: 60,
  },

  countView:{
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
  },

  bottomFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  bottomFooterContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },


});

export default PlayAnAudio;
