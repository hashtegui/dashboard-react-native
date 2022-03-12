import { Text, View, StyleSheet } from "react-native";
import React from "react";
export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Olá Guilherme Castro</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontWeight: "bold",
    padding: 50,
  },
});
