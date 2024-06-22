import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from "react-native";
import CustomButton from "../components/CustomButton";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Auth/authSlice";

const backArrowImage = require("../../assets/images/frame.png");
const eyeIcon = require("../../assets/images/eye.png");

const GettingStarted = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loading, error, success, token, userData } = useSelector((state) => state.auth);

  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
  });

  useEffect(() => {
    if (success && token) {
      console.log("User data after successful registration:", userData); // Log user data here
      navigation.navigate('HomeScreen'); // Navigate to HomeScreen after successful registration
    }
  }, [success, token, userData, navigation]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const handleRegister = () => {
    dispatch(registerUser({ email, password }));
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={backArrowImage} style={styles.backArrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>Register</Text>
      </View>
      <Text style={styles.label}>Email *</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <Text style={styles.label}>Password *</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image source={eyeIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>{error.error}</Text>}
      <CustomButton
        onPress={handleRegister}
        title="Register"
        color="#10341C"
        textColor="#ffffff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
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
    marginBottom: 20,
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
  label: {
    width: "85%",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color: "grey",
    paddingTop: 30,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 20,
  },
});

export default GettingStarted;
