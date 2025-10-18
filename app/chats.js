import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (!text.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), text }]);
    setText('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>💬 Chat Médical</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 8, backgroundColor: '#e0f7fa', marginVertical: 4, borderRadius: 10 }}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Écrivez votre message..."
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 8, marginTop: 10 }}
      />
      <Button title="Envoyer" onPress={sendMessage} />
    </View>
  );
}
