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

import Swiper from 'react-native-swiper';

const SubscriptionPlans = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/images/SubscriptionPlans/background.png')} style={styles.image01}>
                {/* Top */}
                <View style={styles.top}>
                    <Image source={require('../../assets/images/SubscriptionPlans/top.png')} style={styles.topImage} />
                </View>

                {/*  Center */}
                <View style={styles.center}>
                    <Swiper 
                        autoplay={true} 
                        showsPagination={true} 
                        dotStyle={styles.dot} 
                        activeDotStyle={styles.activeDot}>
                        {/* Banner 1 */}
                        <View style={styles.bannerNum}>
                            {/* Banner Top */}
                            <View style={styles.bannerTop}>
                                <Text style={styles.premium}>Premium</Text>
                                <View style={styles.detailPremium}>
                                    <TouchableOpacity style={styles.buttonFree}>
                                        <Text style={styles.premiumFree}>Free for 1 month</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.price}>$12.99/month</Text>
                                </View>
                            </View>

                            {/* Banner Ceter  */}
                            <View style={styles.bannerCenter}>
                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Ad-free listening</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Download to listen offline</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Access full catalog Premium</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>High sound quality</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Cancel anytime</Text>
                                </View>
                            </View>

                            {/* Banner Bottom */}
                            <View style={styles.bannerButtom}>
                                <TouchableOpacity style={styles.buttonSub}>
                                    <Text style={styles.sub}>Subscibe now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Banner 2 */}
                        <View style={styles.bannerNum}>
                            {/* Banner Top */}
                            <View style={styles.bannerTop}>
                                <Text style={styles.premium}>Premium</Text>
                                <View style={styles.detailPremium}>
                                    <TouchableOpacity style={styles.buttonFree}>
                                        <Text style={styles.premiumFree}>Free for 1 month</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.price}>$12.99/month</Text>
                                </View>
                            </View>

                            {/* Banner Ceter  */}
                            <View style={styles.bannerCenter}>
                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Ad-free listening</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Download to listen offline</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Access full catalog Premium</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>High sound quality</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Cancel anytime</Text>
                                </View>
                            </View>

                            {/* Banner Bottom */}
                            <View style={styles.bannerButtom}>
                                <TouchableOpacity style={styles.buttonSub}>
                                    <Text style={styles.sub}>Subscibe now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Banner 3 */}
                        <View style={styles.bannerNum}>
                            {/* Banner Top */}
                            <View style={styles.bannerTop}>
                                <Text style={styles.premium}>Premium</Text>
                                <View style={styles.detailPremium}>
                                    <TouchableOpacity style={styles.buttonFree}>
                                        <Text style={styles.premiumFree}>Free for 1 month</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.price}>$12.99/month</Text>
                                </View>
                            </View>

                            {/* Banner Ceter  */}
                            <View style={styles.bannerCenter}>
                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Ad-free listening</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Download to listen offline</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Access full catalog Premium</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>High sound quality</Text>
                                </View>

                                <View style={styles.detailCheckPremium}>
                                    <IconAntDesign name='down' size={20} color='blue' />
                                    <Text style={styles.textCheck}>Cancel anytime</Text>
                                </View>
                            </View>

                            {/* Banner Bottom */}
                            <View style={styles.bannerButtom}>
                                <TouchableOpacity style={styles.buttonSub}>
                                    <Text style={styles.sub}>Subscibe now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Swiper>
                </View>

                {/* Bottom */}
                <TouchableOpacity style={styles.bottom}>
                    <Text style={styles.back}>Back home</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image01:{
        width: '100%', 
        height: '100%',
    },

    //Top

    top:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center',
    },

    //Center

    center:{
        flex:5,
    },  

    bannerNum:{
        borderRadius: 20,
        borderWidth:1,
        padding:10,
        backgroundColor:'white',
        margin:30,
    },

    premium:{
        fontSize:22,
        fontWeight:'bold',
    },

    detailPremium:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    buttonFree:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        width:'50%',
        height:30,
        borderRadius:50,
    },

    premiumFree:{
        color:'blue',
        fontSize: 20,
        textAlign:'center',
    },

    price:{
        fontSize: 17,
        textAlign:'center',
        fontWeight:'bold',
    },

    detailCheckPremium:{
        flexDirection:'row',
        padding:8,
    },

    textCheck:{
        marginLeft:10,
        fontSize: 17,
        color:'gray',
    },

    bannerCenter:{
        marginTop:20,
    },  

    buttonSub:{
        backgroundColor:'black',
        width:'50%',
        height:50,
        borderRadius:50,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
    },

    bannerButtom:{
        justifyContent:'center',
        alignItems:'center',
    },

    sub:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    

    //Bottom

    bottom:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center',
    },

    back:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});


export default SubscriptionPlans;