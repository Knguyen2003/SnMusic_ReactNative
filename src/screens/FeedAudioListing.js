import React, {useState} from 'react'
import { Text, StyleSheet, View, SafeAreaView, ImageBackground, Image, 
TouchableOpacity, TextInput, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconHeart from 'react-native-vector-icons/Feather';
import IconOctions from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';


const FeedAudioListing = (navigation) => {

    return(
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text style={styles.textHeader}>Feed</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name="cast-connected" size={25} color="gray" />
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {/* Feed 01 */}
                    <View style={styles.feed}>
                        {/* Feed 01 - Top */}
                        <TouchableOpacity style={styles.feedTop}>
                            <Image source={require('../../assets/images/FeedAudioListing/avata01.png')} style={styles.avataFeed}></Image>
                            {/* Feed Top Right */}
                            <View style={styles.detailFeed}>
                                <View style={styles.detailFeedTop}>
                                    <Text style={styles.nameFeed}>Jessica Gonzalez</Text>
                                    <Ionicons name="checkmark-circle-outline" size={20} color="violet" />
                                </View>
                                
                                <View style={styles.detailFeedBottom}>
                                    <Text style={styles.act}>Posted a track</Text>
                                    <IconOctions name="dot-fill" size={16} color="gray" />
                                    <Text style={styles.timeAct}>3d</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Feed 01 - Center */}
                        <TouchableOpacity style={styles.feedCenter}>
                            <ImageBackground source={require('../../assets/images/FeedAudioListing/image01.png')} style={styles.imageFeed}>
                                <View style={styles.detailArtis}>
                                    <Text style={styles.nameSong}>FLOWER</Text>
                                    <View style={styles.detailSong}>
                                        <Text style={styles.nameSinger}>Jessica Gonzalez</Text>
                                        <View style={styles.detailSongTime}>
                                            <IconAntDesign name="caretright" size={16} color="white" />
                                            <Text style={styles.countViewSong}>125</Text>
                                            <IconOctions name="dot-fill" size={16} color="white" />
                                            <Text style={styles.timeSong}>05:15</Text>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        {/* Feed 01 - Bottom */}
                        <View style={styles.feedBottom}>
                            <View style={styles.bottomLeft}>
                                <TouchableOpacity style={styles.bottomLeft_num}>
                                    <IconHeart name="heart" size={25} color="gray" />
                                    <Text style={styles.countLike}>20</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.bottomLeft_num}>
                                    <MaterialCommunityIcons name="comment-text-outline" size={25} color="gray" />
                                    <Text style={styles.countLike}>3</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.bottomLeft_num}>
                                    <MaterialIcons name="change-circle" size={23} color="gray" />
                                    <Text style={styles.countLike}>1</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={styles.bottomRight}>
                                <IconEntypo name="dots-three-horizontal" size={25} color="gray" style={styles.distance}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Feed 02 */}
                    <View style={styles.feed}>
                        {/* Feed 01 - Top */}
                        <TouchableOpacity style={styles.feedTop}>
                            <Image source={require('../../assets/images/FeedAudioListing/avata02.png')} style={styles.avataFeed}></Image>
                            {/* Feed Top Right */}
                            <View style={styles.detailFeed}>
                                <View style={styles.detailFeedTop}>
                                    <Text style={styles.nameFeed}>William King</Text>
                                    <Ionicons name="checkmark-circle-outline" size={20} color="violet" />
                                </View>

                                <View style={styles.detailFeedBottom}>
                                    <Text style={styles.act}>Posted a track</Text>
                                    <IconOctions name="dot-fill" size={16} color="gray" />
                                    <Text style={styles.timeAct}>5d</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Feed 01 - Center */}
                        <TouchableOpacity style={styles.feedCenter}>
                            <ImageBackground source={require('../../assets/images/FeedAudioListing/image02.png')} style={styles.imageFeed}>
                                <View style={styles.detailArtis}>
                                    <Text style={styles.nameSong}>Me</Text>
                                    <View style={styles.detailSong}>
                                        <Text style={styles.nameSinger}>William King</Text>
                                        <View style={styles.detailSongTime}>
                                            <IconAntDesign name="caretright" size={16} color="white" />
                                            <Text style={styles.countViewSong}>245</Text>
                                            <IconOctions name="dot-fill" size={16} color="white" />
                                            <Text style={styles.timeSong}>05:15</Text>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        {/* Feed 01 - Bottom */}
                        <View style={styles.feedBottom}>
                            <View style={styles.bottomLeft}>
                                <TouchableOpacity style={styles.bottomLeft_num}>
                                    <IconHeart name="heart" size={20} color="gray" />
                                    <Text style={styles.countLike}>20</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.bottomLeft_num}>
                                    <MaterialCommunityIcons name="comment-text-outline" size={20} color="gray" />
                                    <Text style={styles.countLike}>3</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.bottomLeft_num}>
                                    <MaterialIcons name="change-circle" size={23} color="gray" />
                                    <Text style={styles.countLike}>1</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={styles.bottomRight}>
                                <IconEntypo name="dots-three-horizontal" size={25} color="gray" style={styles.distance}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },

    // ------------------ Header ------------------

    header:{
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },  

    textHeader:{
        fontSize: 25,
        textAlign: 'center',
    },

    // ------------------ Footer ------------------

    footer:{
        flex: 9.5,
    },

    feed:{
        marginBottom: 20,
    },

    // ------------------ Feed Top ------------------

    feedTop:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    
    avataFeed:{
        width: 60,
        height: 60,
    },

    detailFeed:{
        marginLeft: 10,
    },

    detailFeedTop:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    detailFeedBottom:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    act:{
        marginRight: 5,
    },

    nameFeed:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 5,
    },

    timeAct:{
        marginLeft: 5,
    },

    // ------------------ Feed Center ------------------

    feedCenter:{
        marginTop: 18,
    },

    imageFeed:{
        width: '100%',
        height: 340,
        justifyContent: 'flex-end',
    },

    nameSong:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },

    detailSong:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    detailArtis:{
        padding: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },

    detailSongTime:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    nameSinger:{
        color: 'white',
        marginRight: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },

    countViewSong:{
        color: 'white',
        marginLeft: 5,
        marginRight: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },

    timeSong:{
        color: 'white',
        fontSize: 15,
        marginLeft: 5,
        fontWeight: 'bold',
    },

    // ------------------ Feed Bottom ------------------

    feedBottom:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    bottomLeft:{
        flexDirection: 'row',
    },

    bottomLeft_num:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },

    countLike:{
        fontSize: 17,
        marginLeft: 5,
        color: 'gray',
    },
});

export default FeedAudioListing;