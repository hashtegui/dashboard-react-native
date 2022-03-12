import { Text, View , StyleSheet} from "react-native";
import React from "react";
import Dashboard from "./Dashboard";

export default function ViewPrincipal() {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  