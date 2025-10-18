import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'; 

export default function App() {
  return (
    <View style={styles.container}>
      {/* En-tête avec logo et nom de l'école */}
      <View style={styles.header}>
        <Image
          source={require('./assets/emsi.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.schoolName}>EMSI MAARIF</Text>
      </View>

      {/* Informations de l’étudiant */}
      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>JABAL</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>Rim</Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
  },
  header: {
    flexDirection: 'row', // logo + texte sur la même ligne
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    letterSpacing: 1,
  },
  info: {
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 17,
    color: '#111827',
    fontWeight: 'bold',
  },
});
