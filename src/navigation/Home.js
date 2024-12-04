import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeAudioListing from "../screens/HomeAudioListing";
import TrendingAlbumSeeAll from "../screens/TrendingAlbumSeeAll";
import SuggestionsForYouSeeAll from "../screens/SuggestionsForYouSeeAll";
import PopularArtistsSeeAll from "../screens/PopularArtistsSeeAll";
import ChartsSeeAll from "../screens/ChartsSeeAll";
import TrendAlbumDetail from "../screens/TrendAlbumDetail";
import PlayAnAudio from "../screens/PlayAnAudio";

import Signup from "../screens/Signup";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const Navi = () => {
  return (
    <Stack.Navigator initialRouteName="HomeAudioListing">
      <Stack.Screen
        name="HomeAudioListing"
        component={HomeAudioListing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrendingAlbumSeeAll"
        component={TrendingAlbumSeeAll}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrendAlbumDetail"
        component={TrendAlbumDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlayAnAudio"
        component={PlayAnAudio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuggestionsForYouSeeAll"
        component={SuggestionsForYouSeeAll}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PopularArtistsSeeAll"
        component={PopularArtistsSeeAll}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChartsSeeAll"
        component={ChartsSeeAll}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default Navi;
