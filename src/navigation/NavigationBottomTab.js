import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeAudioListing from "../screens/HomeAudioListing";
import SearchAudio from "../screens/SearchAudio";
import Icon from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

const Navi = ({ navigation }) => {
  return (
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
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchAudio}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default Navi;
