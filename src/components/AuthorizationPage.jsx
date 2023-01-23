import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { useState } from "react";
import { validated } from "../utils";

export const AuthorizationPage = ({ navigation }) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const isEmailValid = validated(emailInput);

  const logIn = () => {
    if (emailInput && passwordInput) {
      navigation.navigate("Home");
    } else {
      alert("Pls fill password!");
    }
    setEmailInput("");
    setPasswordInput("");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={styles.input}
        value={emailInput}
        onChangeText={setEmailInput}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="email@gmail.com"
      />
      <TextInput
        style={styles.input}
        value={passwordInput}
        onChangeText={setPasswordInput}
        secureTextEntry={true}
        placeholder="password"
      />
      <Pressable style={styles.button} disabled={!isEmailValid} onPress={logIn}>
        <Text style={styles.textButton}>Log in</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
  },
  button: {
    width: "90%",
    height: 40,
    paddingRight: "3%",
    paddingLeft: "3%",
    backgroundColor: "#2d3f0b",
    borderRadius: 12,
  },
  textButton: {
    fontSize: 20,
    color: "white",
    padding: 5,
    marginLeft: "35%",
  },
});
