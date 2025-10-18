import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>🏥 Bienvenue sur HospitalMobile</Text>
      <Text style={{ marginTop: 10 }}>Votre interface médicale moderne.</Text>
    </View>
  );
}
