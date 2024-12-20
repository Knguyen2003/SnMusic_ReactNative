import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LaunchScreen from "../screens/LaunchScreen";
import NaviBottom from "../navigation/NavigationBottomTab";
import PlaylistDetail_AudioListing from "../screens/PlaylistDetail_AudioListing";
import PlayAnAudio from "../screens/PlayAnAudio";
import ArtistProfile from "../screens/ArtistProfile";
import HomeAudioListing from "../screens/HomeAudioListing";
import YourLibrary from "../screens/YourLibrary";
import YourPlaylist from "../screens/YourPlaylist";
import FeedAudioListing from "../screens/FeedAudioListing";
import SubscriptionPlans from "../screens/SubscriptionPlans";
import TrendingAlbumSeeAll from "../screens/TrendingAlbumSeeAll";
import SuggestionsForYouSeeAll from "../screens/SuggestionsForYouSeeAll";
import PopularArtistsSeeAll from "../screens/PopularArtistsSeeAll";
import ChartsSeeAll from "../screens/ChartsSeeAll";
import TrendAlbumDetail from "../screens/TrendAlbumDetail";

import Signup from "../screens/Signup";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const Navi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen
          name="LaunchScreen"
          component={LaunchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NaviBottom"
          component={NaviBottom}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navi;
