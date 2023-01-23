import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { ModalWindow } from "./ModalWindow";

export const Home = ({ navigation }) => {
  const [response, setResponse] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState();
  const [selectedAPI, setSelectedAPI] = useState();
  const [selectedLink, setSelectedLink] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const Item = ({ Description, Category, onPress }) => (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.title}>Category: {Category}</Text>
      <Text style={styles.title}>Description: {Description}</Text>
    </Pressable>
  );

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.entries.slice(0, 50));
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.textProfile}>My Profile</Text>
      </TouchableOpacity>
      <FlatList
        data={response}
        extraData={selectedLink}
        renderItem={({ item }) => (
          <Item
            Description={item.Description}
            Category={item.Category}
            onPress={() => {
              setModalVisible(true);
              setSelectedDescription(item.Description);
              setSelectedAPI(item.API);
              setSelectedLink(item.Link);
              setSelectedCategory(item.Category);
            }}
          />
        )}
      />
      <ModalWindow
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedDescription={selectedDescription}
        selectedAPI={selectedAPI}
        selectedLink={selectedLink}
        selectedCategory={selectedCategory}
        response={response}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  item: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 40,
    paddingRight: "3%",
    paddingLeft: "3%",
    backgroundColor: "#2d3f0b",
    borderRadius: 12,
  },
  textProfile: {
    color: "white",
    fontSize: 30,
  },
});
