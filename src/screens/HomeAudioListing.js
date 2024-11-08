import React, {useState} from 'react'
import { Text, StyleSheet, View, SafeAreaView, ImageBackground, Image, 
TouchableOpacity, TextInput, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import Icon01 from 'react-native-vector-icons/Feather';

const HomeAudioListing = (navigation) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
      <SafeAreaView style={styles.container}>
          {/* Top */}
          <View style={styles.top}>  
              {/* Top - Top */}
              <View style={styles.topTop}>
                  {/* Top - Top - Left */}
                  <Image source={require('../../assets/images/HomeAudioListing/Image01Top.png')}></Image>

                  {/* Top - Top - Right*/}
                  <View style={styles.topTopRight}>
                      <Icon name="bell" size={30} color="gray" />
                       <Image source={require('../../assets/images/HomeAudioListing/Image03Top.png')} style={styles.avataTop}></Image>
                  </View>
              </View>
              {/* Top - center */}
              <View style={styles.topCenter}>
                {/* Top - Center */}
                <Image source={require('../../assets/images/HomeAudioListing/Goodmorning.png')}></Image>
                <Image source={require('../../assets/images/HomeAudioListing/AshleyScott.png')}></Image>
              </View>

              {/* Top - Bottom */}
              <View style={styles.topBottom}>
              <Icon01 name="search" size={25} color="black" />
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
              <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                  {/* Suggestions for you */}
                  <View style={styles.titileSuggestion}>
                      <Text style={styles.textTitle}>Suggestions for you</Text>
                      <View style={styles.ContentInside}>

                      </View>
                  </View>

                  {/* Charts */}
                  <View style={styles.Charts}>
                      <View style={styles.titileContent}>
                          <Text style={styles.textTitle}>Charts</Text>
                          <TouchableOpacity>
                              <Text style={styles.textSeeAll}>See all</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.ContentInside}>
                        
                      </View>
                  </View>

                  {/* Trending albums */}
                  <View style={styles.TrendingAlb}>
                      <View style={styles.titileContent}>
                          <Text style={styles.textTitle}>Trending albums</Text>
                          <TouchableOpacity>
                              <Text style={styles.textSeeAll}>See all</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.ContentInside}>
                        
                      </View>
                  </View>

                  {/* Popular artists */}
                  <View style={styles.PopularAr}>
                      <View style={styles.titileContent}>
                          <Text style={styles.textTitle}>Popular artists</Text>
                          <TouchableOpacity>
                              <Text style={styles.textSeeAll}>See all</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.ContentInside}>
                        
                      </View>
                  </View>
              </ScrollView>
          </View>

      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 10,
    paddingBottom:0,
  },

  //-----top-----

  top:{
    flex: 2,
  },

  topTop:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topTopRight:{
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },

  avataTop:{
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 15,
  },

  topCenter:{
    marginTop: 10,
  },

  topBottom:{
    padding: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    color: 'black',
    flexDirection: 'row',
    marginTop: 15,
  },

  inputSearch:{
    marginLeft: 10,
    fontSize:16,
  },
  //-----content-----

  content:{
    flex: 5.5,
    marginBottom: 10,
  },

  scrollView:{
    flex: 1,
  },

  textSeeAll:{
    color: 'gray',
    fontSize: 17,
  },

  textTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },

  titileContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  ContentInside:{
    height: 200,
    backgroundColor: 'orange',
  }
});

export default HomeAudioListing;
