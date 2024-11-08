import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import NaviBottom from '../navigation/NavigationBottomTab';
import PlaylistDetail_AudioListing from '../screens/PlaylistDetail_AudioListing';
import PlayAnAudio from '../screens/PlayAnAudio';
import ArtistProfile from '../screens/ArtistProfile';
import HomeAudioListing from '../screens/HomeAudioListing';
import YourLibrary from '../screens/YourLibrary';

const Stack = createStackNavigator();

const Navi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="YourLibrary" >
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="HomeAudioListing" component={HomeAudioListing} />
        <Stack.Screen name="PlaylistDetail_AudioListing" component={PlaylistDetail_AudioListing} />
        <Stack.Screen name="PlayAnAudio" component={PlayAnAudio} />
        <Stack.Screen name="ArtistProfile" component={ArtistProfile} />
        <Stack.Screen name="YourLibrary" component={YourLibrary} />
        <Stack.Screen name="NaviBottom" component={NaviBottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navi;