import { View, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import UserList from '../components/UserList';
import { supabase } from '../lib/supabase';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const handleSignOut = async () => {
    Alert.alert(
      'Espera...',
      '¿Estás seguro que quieres cerrar sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sí, salir',
          onPress: async () => {
            await supabase.auth.signOut();
            Alert.alert('¡Hasta pronto!', 'Esperamos verte de nuevo pronto 🌟');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/pic1.jpg')} 
          style={styles.headerImage} 
        />
        <Text style={styles.headerText}>¡Bienvenido! </Text>
      </View>

      <UserList />

      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={handleSignOut}
      >
        <Ionicons name="exit-outline" size={20} color="white" />
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9FB',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF85A2',
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#FF85A2',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#FF85A2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default HomeScreen;