import React, { useState, useRoute } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const backArrowImage = require('../../assets/images/frame.png');
const phoneIcon = require('../../assets/images/call.png');
const ngrFlag = require('../../assets/images/ngr.png');
const ukFlag = require('../../assets/images/ngr.png');
const eyeIcon = require('../../assets/images/eye.png');

const LoginPasswordScreen = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();
 // const route = useNavigationState(state => state.routes[state.index]); // Update this line
  
 // const phone = route.params?.phone; 


  const [fontsLoaded] = useFonts({
    Raleway_700Bold
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  };

  const handleBack = () => {
    navigation.goBack();
  };


  const handleLogin = async () => {
   {/* 
  try {
      const response = await fetch('https://apitest.sise.com.ng/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
          password: password,
        }),
      });
  
      if (response.ok) {
        // Authentication successful, navigate to dashboard
       
      } else {
        // Authentication failed
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
   
  */} 
    navigation.navigate('HomeScreen');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={backArrowImage} style={styles.backArrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>Create Password</Text>
      </View>
      <Text style={styles.titles}>07069102244</Text>
      <Text style={styles.tit}>Wrong number? change</Text>
      <Text style={styles.titless}>Password *</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image source={eyeIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.containers}>
        <CustomButton onPress={handleLogin} title="Proceed" color="#10341C" textColor="#ffffff" />
        <Text style={styles.ti}>Dont have an account? Sign up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
  },
  containers: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
  },
  title: {
    fontSize: 24,
    marginLeft: '20%',
    fontFamily: "Raleway_700Bold"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 48,
    fontFamily: "Raleway_700Bold",
    fontSize: 16,
    lineHeight: 23.52,
    textAlign: 'left',
    color: 'black',
  },
  backArrowImage: {
    width: 40,
    height: 40,
  },
  titles: {
    width: '85%',
    fontSize: 24,
    fontFamily: "Raleway_700Bold",
    paddingTop: 30,
  },
  tit: {
    width: '85%',
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color:'grey',
    paddingTop: 5,
  },
  titless: {
    width: '85%',
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color:'grey',
    paddingTop: 40,
  },
  ti: {
    width: '85%',
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color:'grey',
    paddingTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default LoginPasswordScreen;
