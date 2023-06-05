import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { CONTENT_QUERY } from "./Query";

const HomeScreen = () => {
  const { data, loading } = useQuery(CONTENT_QUERY);

  if (loading) {
    return <Text>fetching data....</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data?.continents || []}
        renderItem={({ item }) => {
          return (
            <Text style={{ marginHorizontal: 20, marginTop: 20 }}>
              {item.name}
            </Text>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
