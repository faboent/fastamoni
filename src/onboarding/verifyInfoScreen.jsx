import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '../components/CustomButton';
import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { useNavigation } from '@react-navigation/native';
import camera from '../../assets/images/Vector.png'

const backArrowImage = require('../../assets/images/frame.png');

const VerifyInfoScreen = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Raleway_700Bold
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const VerifyInfoScreen = () => {
    navigation.navigate('HomeScreen');
  };

  const handleBack = () => {
    navigation.goBack();
  };

 
  {/* 
const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };
*/}

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={backArrowImage} style={styles.backArrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>Profile Info</Text>
      </View>
      <Text style={styles.tit}>Please provide your name and an optional profile picture.</Text>
      <TouchableOpacity style={styles.uploadButton}>
       <Image source={camera} style={{marginLeft:50}} />
      </TouchableOpacity>
      {profilePicture ? <Image source={{ uri: profilePicture }} style={styles.profileImage} /> : null}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.containers}>
        <CustomButton onPress={VerifyInfoScreen} title="Proceed" color="#10341C" textColor="#ffffff" />
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
  input: {
    width: '85%',
    height: 48,
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.2,
    marginBottom: 20,
    marginTop: 20,
    fontFamily: "Raleway_700Bold",
    borderColor: '#CEC2C2',
    fontSize: 16,
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
  uploadButton: {
    backgroundColor: '#CEC2C2',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: 173,
    height: 173,
    alignContent: 'center',
    justifyContent:'center',
  },
  uploadText: {
    color: '#ffffff',
    fontFamily: "Raleway_700Bold",
    fontSize: 16,
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
    paddingTop: 30,
  },
  tito: {
    width: '85%',
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color:'grey',
    paddingTop: 20,
  },
  titos: {
    width: '85%',
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color:'grey',
    paddingTop: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: 30,
  },
  ti: {
    width: '85%',
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color:'grey',
    paddingTop: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
  },
});

export default VerifyInfoScreen;
