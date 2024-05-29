import { deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import { db } from "../config/firebase";
import { List, Text } from "react-native-paper";

export default function ListNotes() {
  const [tarefas, setTarefas] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tarefas"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTarefas(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
      console.log("Tarefas", tarefas);
    };

    fetchData();

    return () => {

    };
  }, []);

  function deleteTask(id) {
    console.log("Deletando a tarefa com id", id);
    const colRef = collection(db, "tarefas");
    const docRef = doc(colRef, id);
    deleteDoc(docRef);
  }

  const renderItem = ({ item }) => (
    <List.Section>
      <List.Subheader></List.Subheader>
      <List.Item
        title={item.descricao}
        left={() => <List.Icon icon="check" />}
        right={() => (
          <Pressable onPress={() => deleteTask(item.id)}>
            <List.Icon icon="delete" />
          </Pressable>
        )}
      />
    </List.Section>
  );

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={tarefas}
        renderItem={renderItem}
        style={{ flex: 1, width: "100%" }}
      />
    </View>
  );
}
