import { View, Text, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }}
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Dr. Michel</Text>
      <Text style={{ color: '#555', marginTop: 5 }}>Spécialiste en Interface</Text>
    </View>
  );
}
