import React from 'react';
import {View, Text} from "react-native";
import Weather from "/components/Weather";
import "./index.css";

 class App extends React.Component {
  render() {
    return (
      <View>
        <Weather />
      </View>
    );
  }
}

export default App;