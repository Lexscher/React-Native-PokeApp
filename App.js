import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createStackNavigator, StackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

class Main extends React.Component {
  render() {
    return (
      <View>
        <Text>This is the next page!</Text>
      </View>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Okay, so this is the first page of the app!
        </Text>
        <Button
          title="Learn More"
          onPress={() => this.props.navigation.navigate("Main")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00D1FF",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24
  },
  button: {
    backgroundColor: "#FF7373",
    fontSize: 12
  }
});

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Main: {
      screen: Main
    }
  },
  {
    initialRoutName: "Home"
  }
);
