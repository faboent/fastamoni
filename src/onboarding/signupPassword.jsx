import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import CustomButton from "../components/CustomButton";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { useNavigation, useRoute } from "@react-navigation/native"; 

const backArrowImage = require('../../assets/images/frame.png'); 
const eyeIcon = require('../../assets/images/eye.png'); 
const ngrFlag = require('../../assets/images/ngr.png'); 

const SignupPassword = () => {
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
  });
  const navigation = useNavigation();
 // const route = useRoute(); 

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }


  const handleRegister = async () => {
   
  navigation.navigate("VerifyPhoneScreen");
  };

  const handleBack = () => {
    navigation.goBack();
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
      <Text style={styles.titlesss}>Re-enter Password *</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={password_confirmation}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Image source={eyeIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.containers}>
        <CustomButton
          onPress={handleRegister}
          title="Proceed"
          color="#10341C"
          textColor="#ffffff"
        />
        <Text style={styles.ti}>Already have an account? Change</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
  },
  containers: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
  },
  title: {
    fontSize: 24,
    marginLeft: "20%",
    fontFamily: "Raleway_700Bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
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
    textAlign: "left",
    color: "black",
  },
  backArrowImage: {
    width: 40,
    height: 40,
  },
  titles: {
    width: "85%",
    fontSize: 24,
    fontFamily: "Raleway_700Bold",
    paddingTop: 30,
  },
  titl: {
    width: "85%",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    paddingTop: 30,
  },
  tit: {
    width: "85%",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color: "grey",
    paddingTop: 5,
  },
  titless: {
    width: "85%",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color: "grey",
    paddingTop: 40,
  },
  titlesss: {
    width: "85%",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color: "grey",
    paddingTop: 10,
  },
  ti: {
    width: "85%",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color: "grey",
    paddingTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default SignupPassword;
