import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>
        <Text style={styles.titleFirst}>Globe</Text>
        <Text style={styles.titleSecond}>Mate</Text>
      </Text>
      
      {/* Loading bar */}
      <View style={styles.loadingBar}>
        <View style={styles.loadingProgress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  logoPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#FFB800',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  titleFirst: {
    color: 'white',
  },
  titleSecond: {
    color: '#FFB800',
  },
  loadingBar: {
    width: '80%',
    height: 2,
    backgroundColor: '#333',
    borderRadius: 1,
  },
  loadingProgress: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFB800',
    borderRadius: 1,
  },
});

export default SplashScreen;