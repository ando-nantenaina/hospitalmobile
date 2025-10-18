import { View, Text, FlatList } from 'react-native';

const patients = [
  { id: '1', nom: 'Ando Nantenaina', age: 28, diagnostic: 'Hypertension' },
  { id: '2', nom: 'Mickael Rajaonarivelo', age: 35, diagnostic: 'Diabète' },
  { id: '3', nom: 'Lova Rakoto', age: 41, diagnostic: 'Asthme' },
];

export default function PatientsScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>👨‍⚕️ Liste des Patients</Text>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10, backgroundColor: '#f5f5f5', padding: 10, borderRadius: 10 }}>
            <Text style={{ fontSize: 18 }}>{item.nom}</Text>
            <Text>Âge : {item.age} ans</Text>
            <Text>Diagnostic : {item.diagnostic}</Text>
          </View>
        )}
      />
    </View>
  );
}
