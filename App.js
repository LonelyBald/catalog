import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Layout } from "./src/Layout";

export default function App() {
  return (
    <View style={styles.container}>
      <Layout />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
