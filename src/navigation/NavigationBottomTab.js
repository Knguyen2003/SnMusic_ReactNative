import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAudioListing from '../screens/HomeAudioListing';
import SearchAudio from '../screens/SearchAudio';
import Icon from 'react-native-vector-icons/Feather';


const Tab = createBottomTabNavigator();

const Navi = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
           tabBarActiveTintColor: "#39cbde",
           tabBarInactiveTintColor: "#5a626f",
         }}
      >
        <Tab.Screen 
            name="Home" 
            component={HomeAudioListing}  
            options={{
                 tabBarIcon: ({ color, size }) => (
                         <Icon name="home" color={color} size={size} />
                 ),
         }}/>

        <Tab.Screen 
            name="Search" 
            component={SearchAudio} 
            options={{
              tabBarIcon: ({ color, size }) => (
                      <Icon name="search" color={color} size={size} />
              ),
         }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Navi;