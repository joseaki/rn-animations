import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from "./List";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <List items={"LOREM IPSUM DOLOR SIT".split(" ")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});
