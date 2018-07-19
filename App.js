import React from "react";
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from "react-native";
import { createStackNavigator, StackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch("http://pokeapi.co/api/v2/pokemon/3/")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.pokemon
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item, index) => index}
        />
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
