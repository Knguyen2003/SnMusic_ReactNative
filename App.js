import React from "react";
import Navi from "./src/navigation/Navigation";
import NaviBottom from "./src/navigation/NavigationBottomTab";


import store from "./src/redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Navi />
    </Provider>
  );
};
export default App;
