import React, {useState} from 'react'
import { Text, StyleSheet, View, SafeAreaView, ImageBackground, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconOctions from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const ArtistProfile = (navigation) => {
    {/* Text of About */}
    const [textExpended, setTextExpended] = useState(false);
    const textAbout = "I love doing many things, but one of my favorite hobbies is listening to music. " +
    "I have been into music ever since I was a little kid. My parents always played songs around the house, "+
    "and I would sing along. I am really into pop music, especially K-pop. I love how catchy and upbeat the songs are. "
    "I also enjoy indie music because it's often more unique and personal. "+
    "I spend hours making playlists on my phone and discovering new artists. "+
    "Besides listening to music, I like concerts because of the electric atmosphere."+
    "I love feeling the crowd's energy and singing my favorite songs. Music has had a significant impact on my life. "+
    "It helps me relax after a long day of school, and it can also boost my energy when I need it. "+
    "Listening to my favorite songs always helps me feel better when feeling down. "+
    "Music is a universal language that can connect people from all over the world."+ 
    "It's a great way to express yourself and escape from the everyday stresses of life.";

    return(
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.artistDetail}>
                    <Image source={require('../../assets/images/ArtistProfile/avataImage.png')} style={styles.avataImage} />
                    <Text style={styles.artistName}>Ryan Young</Text>
                    <Text style={styles.followers}>65.1K followers</Text>
                </View>

                <View style={styles.artistAction}>
                    <View style={styles.headerLeft}>
                        {/* Follow button */}
                        <TouchableOpacity>
                            <Text style={styles.followButton}>Follow</Text>
                        </TouchableOpacity>

                        {/* More button */}
                        <TouchableOpacity style={styles.moreButton}>
                            <IconEntypo name="dots-three-horizontal" size={25} color="gray" style={styles.distance}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerRight}>
                        {/* Back button */}
                        <TouchableOpacity style={styles.backButton}>
                            <IconFontAwesome name="random" size={26} color="gray" />
                        </TouchableOpacity>

                        {/* Next button */}
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/PlaylistDetail_AudioListing/listenMusic.png')} style={styles.listen}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <ScrollView horizontal={false} style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {/* Popular */}
                    <View style={styles.popular}>
                        <Text style={styles.title}>Popular</Text>
                        <View style={styles.popularList}>
                            {/* Song 01 */}
                            <View style={styles.song}>
                                <TouchableOpacity style={styles.detailListSong}>
                                    <Image source={require('../../assets/images/ArtistProfile/popular01.png')} style={styles.imageSong}></Image>
                                    <View style={styles.detailSong}>
                                        <Text style={styles.titleSong}>Let you free</Text>
                                        <Text style={styles.nameSinger}>Ryan Young</Text>
                                        <View style={styles.detailContentSong}>
                                            <IconAntDesign name="caretright" size={16} color="gray" />
                                            <Text style={styles.countViewSong}>68M</Text>
                                            <IconOctions name="dot-fill" size={16} color="gray" />
                                            <Text style={styles.timeSong}>03:35</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                    <TouchableOpacity>
                                        <IconEntypo name="dots-three-horizontal" size={25} color="gray" style={styles.distance}/>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Song 02 */}
                            <View style={styles.song}>
                                <TouchableOpacity style={styles.detailListSong}>
                                    <Image source={require('../../assets/images/ArtistProfile/popular02.png')} style={styles.imageSong}></Image>
                                    <View style={styles.detailSong}>
                                        <Text style={styles.titleSong}>Blingding Lights</Text>
                                        <Text style={styles.nameSinger}>Brian Bailey</Text>
                                        <View style={styles.detailContentSong}>
                                            <IconAntDesign name="caretright" size={16} color="gray" />
                                            <Text style={styles.countViewSong}>93M</Text>
                                            <IconOctions name="dot-fill" size={16} color="gray" />
                                            <Text style={styles.timeSong}>04:39</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                    <TouchableOpacity>
                                        <IconEntypo name="dots-three-horizontal" size={25} color="gray" style={styles.distance}/>
                                    </TouchableOpacity>
                            </View>

                            {/* Song 03 */}
                            <View style={styles.song}>
                                <TouchableOpacity style={styles.detailListSong}>
                                    <Image source={require('../../assets/images/ArtistProfile/popular03.png')} style={styles.imageSong}></Image>
                                    <View style={styles.detailSong}>
                                        <Text style={styles.titleSong}>Levitating</Text>
                                        <Text style={styles.nameSinger}>Anthony Taylor</Text>
                                        <View style={styles.detailContentSong}>
                                            <IconAntDesign name="caretright" size={16} color="gray" />
                                            <Text style={styles.countViewSong}>9M</Text>
                                            <IconOctions name="dot-fill" size={16} color="gray" />
                                            <Text style={styles.timeSong}>07:48</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                    <TouchableOpacity>
                                        <IconEntypo name="dots-three-horizontal" size={25} color="gray" style={styles.distance}/>
                                    </TouchableOpacity>
                            </View>

                            {/* Song 04 */}
                            <View style={styles.song}>
                                <TouchableOpacity style={styles.detailListSong}>
                                    <Image source={require('../../assets/images/ArtistProfile/popular04.png')} style={styles.imageSong}></Image>
                                    <View style={styles.detailSong}>
                                        <Text style={styles.titleSong}>Astronaut in the Ocean</Text>
                                        <Text style={styles.nameSinger}>Pedro Moreno</Text>
                                        <View style={styles.detailContentSong}>
                                            <IconAntDesign name="caretright" size={16} color="gray" />
                                            <Text style={styles.countViewSong}>23M</Text>
                                            <IconOctions name="dot-fill" size={16} color="gray" />
                                            <Text style={styles.timeSong}>3:36</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                    <TouchableOpacity>
                                        <IconEntypo name="dots-three-horizontal" size={25} color="gray" style={styles.distance}/>
                                    </TouchableOpacity>
                            </View>

                            {/* Song 05 */}
                            <View style={styles.song}>
                                <TouchableOpacity style={styles.detailListSong}>
                                    <Image source={require('../../assets/images/ArtistProfile/popular03.png')} style={styles.imageSong}></Image>
                                    <View style={styles.detailSong}>
                                        <Text style={styles.titleSong}>Dynamite</Text>
                                        <Text style={styles.nameSinger}>Elena Jimenez</Text>
                                        <View style={styles.detailContentSong}>
                                            <IconAntDesign name="caretright" size={16} color="gray" />
                                            <Text style={styles.countViewSong}>10M</Text>
                                            <IconOctions name="dot-fill" size={16} color="gray" />
                                            <Text style={styles.timeSong}>06:22</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                    <TouchableOpacity>
                                        <IconEntypo name="dots-three-horizontal" size={25} color="gray" style={styles.distance}/>
                                    </TouchableOpacity>
                            </View>

                        </View>

                    {/* Albums */}
                    <View style={styles.albums}>
                        <Text style={styles.title}>Albums</Text>
                        <View style={styles.albumsList}>
                            <ScrollView horizontal={true} style={styles.scrollViewAlbums} showsHorizontalScrollIndicator={false} >
                                {/* Album 01 */}
                                <TouchableOpacity style={styles.album}>
                                    <Image source={require('../../assets/images/ArtistProfile/album01.png')} style={styles.imageAlbum}></Image>
                                    <Text style={styles.albumName}>Me</Text>
                                    <Text style={styles.albumNameArtist}>Jessica Gonzalez</Text>
                                </TouchableOpacity>

                                {/* Album 02 */}
                                <TouchableOpacity style={styles.album}>
                                    <Image source={require('../../assets/images/ArtistProfile/album02.png')} style={styles.imageAlbum}></Image>
                                    <Text style={styles.albumName}>Magna nost</Text>
                                    <Text style={styles.albumNameArtist}>Jessica Gonzalez</Text>
                                </TouchableOpacity>

                                {/* Album 03 */}
                                <TouchableOpacity style={styles.album}>
                                    <Image source={require('../../assets/images/ArtistProfile/album03.png')} style={styles.imageAlbum}></Image>
                                    <Text style={styles.albumName}>Proident</Text>
                                    <Text style={styles.albumNameArtist}>Jessica Gonzalez</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>

                    {/* About */}
                    <View style={styles.about}>
                        <Text style={styles.title}>About</Text>
                        <View style={styles.aboutDetail}>
                            <Image source={require('../../assets/images/ArtistProfile/avataImageAbout.png')} style={styles.avataImageAbout}></Image>
                            <Text style={styles.textAbout} numberOfLines={textExpended ? undefined : 3}>
                                {textExpended ? textAbout : `${textAbout.substring(0, 235)}...`}
                            </Text>
                            <TouchableOpacity style={styles.viewMore} onPress={() => setTextExpended(!textExpended)} >
                                <Text style={styles.textViewMore}>
                                    {textExpended ? "View Less" : "View More"}
                                </Text>
                            </TouchableOpacity>
                        </View>  

                    </View>

                    {/* Fans Also Like */}
                    <View style={styles.fansAlsoLike}>
                    <Text style={styles.title}>Fans Also Like</Text>
                        <View style={styles.fansAlsoLikeList}>
                            <ScrollView horizontal={true} style={styles.scrollViewAlbums} showsHorizontalScrollIndicator={false} >
                                {/* Fans Also Like 01 */}
                                <TouchableOpacity style={styles.fans}>
                                    <Image source={require('../../assets/images/ArtistProfile/FansAlsoLike01.png')} style={styles.imageAlbum}></Image>
                                    <Text style={styles.albumName}>Magna nost</Text>
                                    <Text style={styles.albumNameArtist}>Jessica Gonzalez</Text>
                                </TouchableOpacity>

                                {/* Fans Also Like 02 */}
                                <TouchableOpacity style={styles.fans}>
                                    <Image source={require('../../assets/images/ArtistProfile/FansAlsoLike02.png')} style={styles.imageAlbum}></Image>
                                    <Text style={styles.albumName}>Exercitatio</Text>
                                    <Text style={styles.albumNameArtist}>Brian Harris</Text>
                                </TouchableOpacity>

                                {/* Fans Also Like 03 */}
                                <TouchableOpacity style={styles.fans}>
                                    <Image source={require('../../assets/images/ArtistProfile/FansAlsoLike03.png')} style={styles.imageAlbum}></Image>
                                    <Text style={styles.albumName}>Tempor Proident</Text>
                                    <Text style={styles.albumNameArtist}>Taylor Anor</Text>
                                </TouchableOpacity>
                            </ScrollView>
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

    //---------------- Header ----------------

    header:{
        flex:3,
    },

    artistDetail:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    avataImage:{
        width: 210,
        height: 210,
    },

    artistName:{
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    followers:{
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
    },

    artistAction:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },

    headerLeft:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    followButton:{
        borderWidth:1,
        fontSize:22,
        borderRadius:50,
        padding:8,
        paddingLeft:20,
        paddingRight:20,
        color:'gray',
        borderColor:'gray',
    },

    moreButton:{
        marginLeft:15,
    },

    headerRight:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100,
    },

    backButton:{
        marginRight:15,
    },

    listen:{
        width: 60,
        height: 60,
    },

    //---------------- Footer ----------------

    footer:{
        flex: 3,
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
    },

    //---------------- Popular ----------------

    nameSinger:{
        color: 'gray',
        fontSize: 16,
    },

    countViewSong:{
        color: 'gray',
        fontSize: 15,
    },

    timeSong:{
        color: 'gray',
        fontSize: 15,
    },

    song:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    detailListSong:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    detailSong:{
        marginLeft: 15,
    },

    imageSong:{
        width: 75,
        height: 75,
    },

    detailContentSong:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 110,
    },

    popularList:{   
        marginTop: 10,
    },

    //---------------- Albums ----------------
    albums:{
        marginTop: 25,
    },

    scrollViewAlbums:{
        flexDirection: 'row',
    },

    albumsList:{
        marginTop: 10,
    },

    imageAlbum:{
        width: 150,
        height: 150,
    },

    albumName:{
        fontSize: 22,
    },

    albumNameArtist:{
        color: 'gray',
        fontSize: 18,
    }, 

    album:{
        marginRight: 20,
    },

    //---------------- About ----------------

    about:{
        marginTop: 25,
    },

    textAbout:{
        fontSize: 16,
        color: 'gray',
        marginTop: 10,
        textAlign: 'justify',
    },

    avataImageAbout:{
        width: '100%',
        height: 250,
        borderRadius: 5,
    },

    aboutDetail:{
        marginTop: 15,
    },

    viewMore:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    textViewMore:{
        color: 'blue',
        fontSize: 16,
        marginTop: 10,
    },

    //---------------- Fans Also Like ----------------

    fansAlsoLike:{
        marginTop: 25,
    },

    fansAlsoLikeList:{
        marginTop: 15,
    },

    fans:{
        marginRight: 20,
    },
});

export default ArtistProfile;