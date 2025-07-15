import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const AuthScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('signin');

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/pic1.jpg')} 
        style={styles.logo} 
      />
      
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton, 
            activeTab === 'signin' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('signin')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'signin' && styles.activeTabText
          ]}>
            Iniciar Sesión
          </Text>
          {activeTab === 'signin' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.tabButton, 
            activeTab === 'signup' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('signup')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'signup' && styles.activeTabText
          ]}>
            Registrarse
          </Text>
          {activeTab === 'signup' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {activeTab === 'signin' ? (
          <SignIn navigation={navigation} />
        ) : (
          <SignUp navigation={navigation} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9FB',
    paddingTop: 50,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30,
    tintColor: '#FF85A2',
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  activeTabButton: {
    backgroundColor: '#FFF9FB',
  },
  tabText: {
    color: '#888',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#FF85A2',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: '100%',
    backgroundColor: '#FF85A2',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default AuthScreen;