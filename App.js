import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// Navigators
import Main from "./Navigators/Main";

// Screens
import Header from "./shared/Header";

//LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
      </NavigationContainer>
    </Provider>
  );
}
