import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import { Link } from 'expo-router';
import FormField from '../../components/FormField';
import PrimaryButton from '../../components/PrimaryButton';

const SignIn = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}
      >
        <View className="w-full flex h-full px-4 flex-col justify-center">
          <Image
            source={images.logo}
            className="w-full max-w-[170px] self-start"
            resizeMode="contain"
          ></Image>

          <Text className="text-white text-2xl font-pbold">Sign In</Text>

          <View className="w-full">
            <FormField text="Email" />
            <FormField text="Password" />

            <Text className="text-gray-200 text-md font-pregular self-end mt-4">
              Forgot Password
            </Text>

            <PrimaryButton text="Log In" additionalClasses="mt-4" />

            <Text className="text-center text-white mt-4">
              Dont have an account ?{' '}
              <Link href="/sign-up" className="text-secondary-100">
                Signup
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
