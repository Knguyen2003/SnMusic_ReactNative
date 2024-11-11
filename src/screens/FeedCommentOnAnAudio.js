import React, {useState} from 'react'
import { Text, StyleSheet, View, SafeAreaView, ImageBackground, Image, 
TouchableOpacity, TextInput, ScrollView, Modal, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconHeart from 'react-native-vector-icons/Feather';
import IconOctions from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('window');

const FeedCommentOnAnAudio = ({ visible, onClose, comment, setComment }) => {
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                
                {/* Modal Top */}
                <View style={styles.modalTop}>
                    <Text style={styles.textModalTop}>3 Comments</Text>

                    <TouchableOpacity onPress={onClose}>
                        <IconAntDesign name="down" size={28} color="gray" />
                    </TouchableOpacity>
                </View>

                {/* Modal center */}
                <View style={styles.modalCenter}>
                    
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {/* Comment 1 */}
                    <View style={styles.commentNum}>
                        {/* Comment 1 Left */}
                        <View style={styles.commentNumLeft}>
                            <Image source={require('../../assets/images/FeedCommentOnAnAudio/avata01.png')} style={styles.avataComment} />
                            <View style={styles.commentNumLeftDetail}>
                                <View style={styles.commentNumLeftDetailTop}>
                                    <Text style={styles.nameComment}>Sally Rooney</Text>
                                    <Text style={styles.detailNameComment}>Do duis cul</Text>
                                    <FontAwesome5 name="grin-hearts" size={20} color="red" />
                                </View>

                                <View style={styles.commentNumLeftDetailBottom}>
                                    <Text style={styles.commentDetail}>17h</Text>
                                    <Text style={styles.commentDetail}>1 like</Text>
                                    <Text style={styles.commentDetail}>Reply</Text>
                                </View>
                            </View>
                        </View>

                        {/* Comment 1 Right */}
                        <View style={styles.commentNumRight}>
                            <IconAntDesign name="like2" size={20} color="blue" />
                        </View>
                    </View>

                    {/* Comment 2 */}
                    <View style={styles.commentNum}>
                        {/* Comment 2 Left */}
                        <View style={styles.commentNumLeft}>
                            <Image source={require('../../assets/images/FeedCommentOnAnAudio/avata02.png')} style={styles.avataComment} />
                            <View style={styles.commentNumLeftDetail}>
                                <View style={styles.commentNumLeftDetailTop}>
                                    <Text style={styles.nameComment}>Jason</Text>
                                    <Text style={styles.detailNameComment}>Minim magna exc</Text>
                                    <FontAwesome5 name="grin-hearts" size={20} color="red" />
                                </View>

                                <View style={styles.commentNumLeftDetailBottom}>
                                    <Text style={styles.commentDetail}>48m</Text>
                                    <Text style={styles.commentDetail}>1 like</Text>
                                    <Text style={styles.commentDetail}>Reply</Text>
                                </View>
                            </View>
                        </View>

                        {/* Comment 2 Right */}
                        <View style={styles.commentNumRight}>
                            <IconAntDesign name="like2" size={20} color="blue" />
                        </View>
                    </View>

                    {/* Comment 2 - 2 */}
                    <View style={styles.commentNum01}>
                    <View style={styles.commentNum}>
                        {/* Comment 2 - 2 Left */}
                        <View style={styles.commentNumLeft}>
                            <Image source={require('../../assets/images/FeedCommentOnAnAudio/avata02_2.png')} style={styles.avataComment} />
                            <View style={styles.commentNumLeftDetail}>
                                <View style={styles.commentNumLeftDetailTop}>
                                    <Text style={styles.nameComment}>Michael Key</Text>
                                    <Text style={styles.tagName}>@Jason Smith</Text>
                                    <Text>Deserunt</Text>
                                </View>
                                
                                <Text style={styles.detailNameComment01}>officia consectetur adipi</Text>

                                <View style={styles.commentNumLeftDetailBottom}>
                                    <Text style={styles.commentDetail}>48m</Text>
                                    <Text style={styles.commentDetail}>1 like</Text>
                                    <Text style={styles.commentDetail}>Reply</Text>
                                </View>
                            </View>
                        </View>

                        {/* Comment 2 - 2 Right */}
                        <View style={styles.commentNumRight}>
                            <IconAntDesign name="like2" size={20} color="blue" />
                        </View>
                    </View>
                    </View>

                    {/* Comment 3 */}
                    <View style={styles.commentNum}>
                        {/* Comment 3 Left */}
                        <View style={styles.commentNumLeft}>
                            <Image source={require('../../assets/images/FeedCommentOnAnAudio/avata03.png')} style={styles.avataComment} />
                            <View style={styles.commentNumLeftDetail}>
                                <View style={styles.commentNumLeftDetailTop}>
                                    <Text style={styles.nameComment}>Liam Pham</Text>
                                    <Text style={styles.detailNameComment}>Commodo</Text>
                                    <FontAwesome5 name="grin-hearts" size={20} color="red" />
                                </View>

                                <View style={styles.commentNumLeftDetailBottom}>
                                    <Text style={styles.commentDetail}>48m</Text>
                                    <Text style={styles.commentDetail}>1 like</Text>
                                    <Text style={styles.commentDetail}>Reply</Text>
                                </View>
                            </View>
                        </View>

                        {/* Comment 3 Right */}
                        <View style={styles.commentNumRight}>
                            <IconAntDesign name="like2" size={20} color="blue" />
                        </View>
                    </View>

                    {/* Comment 3 - 2 */}
                    <View style={styles.commentNum01}>
                    <View style={styles.commentNum}>
                        {/* Comment 3 - 2 Left */}
                        <View style={styles.commentNumLeft}>
                            <Image source={require('../../assets/images/FeedCommentOnAnAudio/avata01.png')} style={styles.avataComment} />
                            <View style={styles.commentNumLeftDetail}>
                                <View style={styles.commentNumLeftDetailTop}>
                                    <Text style={styles.nameComment}>Kiran Glaucus</Text>
                                    <Text style={styles.tagName}></Text>
                                    <Text>Esse consequat cillum</Text>
                                </View>
                                
                                <Text style={styles.detailNameComment01}>ex</Text>

                                <View style={styles.commentNumLeftDetailBottom}>
                                    <Text style={styles.commentDetail}>48m</Text>
                                    <Text style={styles.commentDetail}>1 like</Text>
                                    <Text style={styles.commentDetail}>Reply</Text>
                                </View>

                                <TouchableOpacity>
                                    <Text style={styles.extend}>View 10 more replies</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Comment 3 - 2 Right */}
                        <View style={styles.commentNumRight}>
                            <IconAntDesign name="like2" size={20} color="blue" />
                        </View>
                    </View>
                    </View>

                    </ScrollView>
                </View>

                {/* Modal Bottom */}
                <View style={styles.modalBottom}>
                    <Image source={require('../../assets/images/FeedCommentOnAnAudio/yourAvata.png')} style={styles.yourAvata} />
                    <View style={styles.textInput}>
                        <TextInput
                        style={styles.input}
                        placeholder="Write a comment..."
                        value={comment}
                        onChangeText={setComment}
                        />

                        <IconAntDesign name="smileo" size={30} color="gray"/>
                    </View>
                </View>
            </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modal:{
        width: '100%',
        height: height * 0.55, // Chiều cao modal là 50% màn hình
        backgroundColor: 'white',
        padding:10,
    },

    //Top

    modalTop:{
        flex:0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },

    textModalTop:{
        fontSize: 20,
        fontWeight: 'bold',
    },

    //center

    modalCenter:{
        flex:5,
        marginTop: 25,
    },

    commentNum:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 20,
        alignItems:'center',
    },

    commentNumLeft:{
        flexDirection: 'row',
        justifyContent:'space-between',
    },

    commentNumLeftDetailTop:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginLeft: 10,
    },

    commentNumLeftDetailBottom:{
        flexDirection: 'row',
        marginLeft: 10,
    },
    
    nameComment:{
        fontSize:14,
        fontWeight: 'bold',
    },

    detailNameComment:{
        marginRight: 10,
        marginLeft: 5,
    },

    commentDetail:{
        marginTop:10,
        marginRight: 10,
        fontSize: 12,
        color:'gray',
    },

    avataComment:{
        width: 45,
        height: 45,
    },  

    commentNum01:{
        marginLeft: 30,

    },

    tagName:{
        marginLeft: 3,
        color:'blue',
        marginRight: 3,
    },

    detailNameComment01:{
        marginLeft: 10,
    },

    extend:{
        marginTop: 15,
        color:'blue',
        fontSize: 14,
    },

    // Bottom 
    modalBottom:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },

    textInput:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width: '85%',
        borderWidth:1,
        borderRadius: 40,
        padding:8, 
        borderColor:'gray',
    },

    input:{
        color:'gray',
        fontSize: 16,
    },

    yourAvata:{
        width: 43,
        height: 43,
    },

});

export default FeedCommentOnAnAudio;