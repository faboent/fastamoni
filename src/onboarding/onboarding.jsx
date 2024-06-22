import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway';
import CustomButton from '../components/CustomButton';

const Onboarding = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Raleway_700Bold
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleGetStarted = () => {
    navigation.navigate('GettingStarted');
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <ImageBackground source={require('../../assets/images/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/sise.png')} style={styles.logo} />
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.bottomBoxText}>Welcome to Knockout Spot</Text>
        <CustomButton onPress={handleGetStarted} title="Get Started" color="#10341C" textColor="#ffffff" />
        <CustomButton onPress={handleLogin} title="Login" color="#fff" textColor="#10341C" style={{ marginTop: 10 }} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
  },
  bottomBox: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    opacity: 0.7,
    flex: 1,
    justifyContent: 'center',
  },
  bottomBoxText: {
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: '#0F1209',
    fontFamily: 'Raleway_700Bold',
  },
});

export default Onboarding;
