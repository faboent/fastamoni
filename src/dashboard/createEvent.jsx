import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert, // Import Alert
  ActivityIndicator // Import ActivityIndicator for loading state
} from "react-native";
import CustomButton from "../components/CustomButton";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { useNavigation } from "@react-navigation/native";

const backArrowImage = require("../../assets/images/frame.png");

const CreateEventsScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
  });

  const handleBack = () => {
    navigation.goBack();
  };

  const handleProfileUpdate = async () => {
    const userId = 1; // Replace with actual user ID
    const apiUrl = `https://reqres.in/api/users/${userId}`;
    
    try {
      setIsLoading(true); // Set loading state to true
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          job,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      setIsLoading(false); // Set loading state to false after successful update

      // Show alert for successful update
      Alert.alert('Success', 'Profile updated successfully', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);

    } catch (error) {
      setIsLoading(false); // Set loading state to false on error
      console.error('Error updating profile:', error.message);
      // Handle error, show error message to user, etc.
    }
  };

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={backArrowImage} style={styles.backArrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>Update your profile</Text>
      </View>
      <Text style={styles.titless}>Name</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <Text style={styles.titless}>Job</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Job"
          value={job}
          onChangeText={(text) => setJob(text)}
        />
      </View>

      <View style={styles.containers}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#10341C" />
        ) : (
          <CustomButton
            title="Submit"
            color="#10341C"
            textColor="#ffffff"
            onPress={handleProfileUpdate}
          />
        )}
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
    paddingTop: 50,
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
  titless: {
    width: "85%",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color: "grey",
    paddingTop: 40,
  },
});

export default CreateEventsScreen;
