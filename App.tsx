import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HomeScreen from "./HomeScreen";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={{ height: 100 }}></View>
      <HomeScreen />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
