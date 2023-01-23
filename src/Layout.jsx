import { View, StyleSheet } from "react-native";
import { AuthorizationPage } from "./components/AuthorizationPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";

const Stack = createStackNavigator();
export const Layout = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Authorization">
          <Stack.Screen name="Authorization" component={AuthorizationPage} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Catalog" }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
