import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import { supabase } from '../lib/supabase';
import { Ionicons } from '@expo/vector-icons';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Oops!', 'Por favor llena todos los campos ');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Ups!', 'La contraseña debe tener al menos 6 caracteres 🫣');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        Alert.alert('Oh no!', `Error: ${error.message} `);
      } else {
        Alert.alert(
          '¡Registro exitoso! ', 
          'Por favor revisa tu email para confirmar la cuenta. ¡Te hemos enviado un correo mágico! ',
          [
            { 
              text: 'OK', 
              onPress: () => navigation.navigate('SignIn') 
            }
          ]
        );
      }
    } catch (error) {
      Alert.alert('Error!', 'Algo salió mal, por favor inténtalo de nuevo 🥲');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/pic1.jpg')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      
      <Text style={styles.title}>¡Únete a nosotros! </Text>
      <Text style={styles.subtitle}>Crea tu cuenta para empezar</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#7EC8E3" style={styles.icon} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#AAA"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#7EC8E3" style={styles.icon} />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#AAA"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons 
            name={showPassword ? "eye-off-outline" : "eye-outline"} 
            size={20} 
            color="#7EC8E3" 
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleSignUp}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Creando cuenta... ' : 'Registrarme '}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.linkText}>¿Ya tienes cuenta? Inicia sesión aquí </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7EC8E3',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#D0F0FF',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#555',
  },
  button: {
    backgroundColor: '#7EC8E3',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#7EC8E3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: '#7EC8E3',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});