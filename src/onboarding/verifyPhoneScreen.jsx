import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import axios from "axios";
import { SecureStore } from 'expo';

const backArrowImage = require("../../assets/images/frame.png");

const VerifyPhoneScreen = () => {
 {/* */} const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleLogin = async () => {
    {/* 
  try {
      const otpCode = otp.join("");
      const response = await fetch("https://apitest.sise.com.ng/api/v1/auth/verify", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: otpCode }),
      });
  
      const responseData = await response.json();
  
      // Assuming the response includes a success message and auth token
      if (responseData.success) {
        const authToken = responseData.token;
        // Save the auth token using SecureStore
        await SecureStore.setItemAsync("authToken", authToken);
  
        // Navigate to the next screen
        navigation.navigate("VerifyInfoScreen");
      } else {
        // OTP verification failed, show error message
        Alert.alert("Error", "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP Verification Error:", error);
      Alert.alert("Error", "Failed to verify OTP. Please try again.");
    }
  */}
  navigation.navigate("VerifyInfoScreen");
  };
    const handleBack = () => {
    navigation.goBack();
  };

  const handleChangeOTP = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={backArrowImage} style={styles.backArrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>Verify Phone Number</Text>
      </View>
      <Text style={styles.tit}>
        Type in the 6 digit OTP code that was sent to you
      </Text>
      <Text style={styles.titles}>+234 7069102244</Text>
      <Text style={styles.tito}>Wrong number? change</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder=""
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChangeOTP(index, text)}
            keyboardType="numeric"
          />
        ))}
      </View>
      <Text style={styles.titos}>Didn’t receive yet? Resend OTP</Text>
      <View style={styles.containers}>
        <CustomButton
          onPress={handleLogin}
          title="Proceed"
          color="#10341C"
          textColor="#ffffff"
        />
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
  input: {
    width: 48,
    height: 48,
    padding: 10,
    borderRadius: 8,
    borderWidth: 0.2,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Raleway_700Bold",
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
  tit: {
    width: "85%",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    paddingTop: 30,
  },
  tito: {
    width: "85%",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color: "grey",
    paddingTop: 20,
  },
  titos: {
    width: "85%",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color: "grey",
    paddingTop: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginTop: 30,
  },
  ti: {
    width: "85%",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color: "grey",
    paddingTop: 10,
  },
});

export default VerifyPhoneScreen;
