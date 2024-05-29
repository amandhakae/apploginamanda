import { useState } from "react";
import { Surface, TextInput } from "react-native-paper";

// use props and navigation
export default function EditNote(props, { navigation }) {
  const [noteEd, setNoteEd] = useState({});

  const { note } = props.route.params;
  console.log(note);

  function handleSave() {
    console.log("save");
  }

  return (
    <Surface>
      <Text>EditNote</Text>
      <Text>{note.descricao}</Text>
      <Text>{note.data}</Text>
      <TextInput
        label="Editar nota"
        value={noteEd.descricao}
        onChangeText={(text) => setNoteEd({ ...noteEd, descricao: text })}
      />
      <Button mode="contained" onPress={handleSave}>
        Salvar
      </Button>
    </Surface>
  );
}
