import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector } from 'react-redux';
import store from './src/Auth/store'; // Ensure this import path is correct
import Onboarding from './src/onboarding/onboarding';
import GettingStarted from './src/onboarding/gettingStarted';
import SignupPassword from './src/onboarding/signupPassword';
import VerifyPhoneScreen from './src/onboarding/verifyPhoneScreen';
import VerifyInfoScreen from './src/onboarding/verifyInfoScreen';
import LoginScreen from './src/onboarding/LoginScreen';
import LoginPasswordScreen from './src/onboarding/loginPasswordScreen';
import HomeScreen from './src/dashboard/homeScreen';
import CreateEventsScreen from './src/dashboard/createEvent';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Stack.Navigator initialRouteName="Onboarding">
      {token ? (
        <>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CreateEventsScreen" component={CreateEventsScreen} options={{ headerShown: false }} />
          {/* Add other authenticated screens here */}
        </>
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name="GettingStarted" component={GettingStarted} options={{ headerShown: false }} />
          <Stack.Screen name="SignupPassword" component={SignupPassword} options={{ headerShown: false }} />
          <Stack.Screen name="VerifyPhoneScreen" component={VerifyPhoneScreen} options={{ headerShown: false }} />
          <Stack.Screen name="VerifyInfoScreen" component={VerifyInfoScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LoginPasswordScreen" component={LoginPasswordScreen} options={{ headerShown: false }} />
          {/* Add other non-authenticated screens here */}
        </>
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
