import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import HomeAudioListing from '../screens/HomeAudioListing';

const Stack = createStackNavigator();

const Navi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen" >
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="HomeAudioListing" component={HomeAudioListing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navi;