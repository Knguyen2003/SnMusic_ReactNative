import React, {useState} from 'react'
import { Text, StyleSheet, View, SafeAreaView, ImageBackground, Image, 
TouchableOpacity, TextInput, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo01 from 'react-native-vector-icons/Entypo';
import IconHeart from 'react-native-vector-icons/Feather';
import IconOctions from 'react-native-vector-icons/Octicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const YourPlaylist = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <IconAntDesign name="left" size={25} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Playlists</Text>
                <TouchableOpacity>
                    <Icon name="cast-connected" size={25} color="gray" />
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>Your Playlists</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Playlist 01 */}
                    <View style={styles.song}>
                        <TouchableOpacity style={styles.detailPlaylists}>
                            <Image source={require('../../assets/images/YourPlaylist/playlist01.png')} style={styles.imageSong}></Image>
                                <View style={styles.detailPlaylist}>
                                    <Text style={styles.titlePlaylist}>Ipsum sit nulla</Text>
                                    <View style={styles.detailContentSong}>
                                        <Text style={styles.countViewSong}>Ashley Scott</Text>
                                        <IconOctions name="dot-fill" size={16} color="gray" />
                                        <Text style={styles.countSong}>12 songs</Text>
                                    </View>
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.heartSong}>
                            <IconAntDesign name="right" size={20} color="black" style={styles.distance}/>
                        </TouchableOpacity>
                    </View>

                    {/* Playlist 02 */}
                    <View style={styles.song}>
                        <TouchableOpacity style={styles.detailPlaylists}>
                            <Image source={require('../../assets/images/YourPlaylist/playlist02.png')} style={styles.imageSong}></Image>
                                <View style={styles.detailPlaylist}>
                                    <Text style={styles.titlePlaylist}>Occaecat aliq</Text>
                                    <View style={styles.detailContentSong}>
                                        <Text style={styles.countViewSong}>Jose Garcia</Text>
                                        <IconOctions name="dot-fill" size={16} color="gray" />
                                        <Text style={styles.countSong}>4 songs</Text>
                                    </View>
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.heartSong}>
                            <IconAntDesign name="right" size={20} color="black" style={styles.distance}/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.add}>
                    <Image source={require('../../assets/images/YourPlaylist/add.png')} style={styles.imageAdd}></Image>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },

    // Header

    header:{
        flex:0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
    },

    headerTitle:{   
        fontSize: 20,
        color: 'black',
    },

    // Footer

    footer:{
        flex: 9.5,
    },


    footerTitle:{
        fontSize: 23,
        color: 'black',
        marginBottom: 10,
        fontWeight: 'bold',
    },

    song:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    detailPlaylists:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    imageSong:{
        width: 75,
        height: 75,
        borderRadius: 10,
    },

    detailPlaylist:{
        marginLeft: 15,
    },

    titlePlaylist:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'condensedBold',
    },

    detailContentSong:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    countViewSong:{
        fontSize: 15,
        color: 'gray',
    },

    countViewSong:{
        marginRight: 5,
    },

    countSong:{
        marginLeft: 5,
    },

    add:{
        alignItems: 'flex-end',
    },

    imageAdd:{
        width: 65,
        height: 65,
        borderRadius: 10,
    },


});

export default YourPlaylist;
