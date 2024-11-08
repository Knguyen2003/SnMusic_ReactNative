import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import NaviBottom from '../navigation/NavigationBottomTab';
import PlaylistDetail_AudioListing from '../screens/PlaylistDetail_AudioListing';
import PlayAnAudio from '../screens/PlayAnAudio';

const Stack = createStackNavigator();

const Navi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PlayAnAudio" >
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="PlaylistDetail_AudioListing" component={PlaylistDetail_AudioListing} />
        <Stack.Screen name="PlayAnAudio" component={PlayAnAudio} />
        <Stack.Screen name="NaviBottom" component={NaviBottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navi;