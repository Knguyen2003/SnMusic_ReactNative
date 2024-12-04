import React from "react";
import Navi from "./src/navigation/Navigation";
import NaviBottom from "./src/navigation/NavigationBottomTab";

import Signup from "./src/screens/Signup";
import Home from "./src/screens/HomeAudioListing";
import Login from "./src/screens/Login";


import store from "./src/redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <NaviBottom />
    </Provider>
  );
};
export default App;
