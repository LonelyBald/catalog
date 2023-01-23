import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";

export const Profile = () => {
  const [response, setResponse] = useState();
  const Item = ({ gender, name, email, phone }) => (
    <View style={styles.item}>
      <Text style={styles.title}>Name: {name}</Text>
      <Text style={styles.title}>Gender: {gender}</Text>
      <Text style={styles.title}>Email: {email}</Text>
      <Text style={styles.title}>Phone: {phone}</Text>
    </View>
  );

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.results);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={response}
        renderItem={({ item }) => (
          <Item
            gender={item.gender}
            name={item.name.title}
            email={item.email}
            phone={item.phone}
          />
        )}
      />
    </View>
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
  },
  title: {
    fontSize: 32,
  },
  textProfile: {
    color: "white",
    fontSize: 20,
  },
});
