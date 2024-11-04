import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, ImageBackground, Image, TouchableOpacity} from 'react-native'

const LaunchScreenPre = () => {
    return (
      <SafeAreaView style={styles.container}>
          <ImageBackground source={require('../../assets/images/LaunchScreenPre/background_pre.png')}
          style={styles.image01}>
              {/* Top */}
              <View style={styles.top}>
                    <Image source={require('../../assets/images/LaunchScreen/Image02.png')} 
                    style={styles.image02}></Image>
              </View>
              {/* Center */}
              <View style={styles.center}>
                  <Image source={require('../../assets/images/LaunchScreenPre/Welcome toPremium.png')} 
                          style={styles.image03}></Image>
                  <Text style={styles.dot}>...</Text>
              </View>
              {/* Bottom */}
              <View style={styles.bottom}>
                  <TouchableOpacity style={styles.button01}
                    onPress={() => navigation.navigate('HomeAudioListing')}
                  >
                      <Text style={styles.textButton01}>Start listening</Text>
                  </TouchableOpacity>
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

  //-----top-----

  top:{
    flex: 0.75,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  image02: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },

  //-----center-----

  center:{
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  
  dot :{
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom:15
  },
  //-----bottom-----

  bottom:{
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },

  button01:{
    borderWidth: 1,
    width: '85%',
    height:45,
    backgroundColor:'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton01:{
    color:'white',
    textAlign:'center',
    fontSize:20,
  },

  button02:{
    width: '85%',
    height:45,
    backgroundColor:'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton02:{
    color:'pink',
    textAlign:'center',
    fontSize:20,
    fontWeight: 'bold',
  },
  
});

export default LaunchScreenPre;
