import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeAudioListing from "../screens/HomeAudioListing";
import SearchAudio from "../screens/SearchAudio";
import Feed from "../screens/FeedAudioListing";
import Library from "../screens/YourLibrary";
import Icon from "react-native-vector-icons/Feather";
import HomeNavi from "../navigation/Home";
import Chatbox from "../screens/Chatbox";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


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
          component={HomeNavi}
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

        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="feed" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="library" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chatbox"
          component={Chatbox}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="robot" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />

      </Tab.Navigator>
  );
};
export default Navi;
