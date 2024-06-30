import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="sign-up"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
      <StatusBar style="light" />
    </>
  );
};

export default AuthLayout;
