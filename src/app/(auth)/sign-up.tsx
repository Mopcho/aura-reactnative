import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import PrimaryButton from '../../components/PrimaryButton';
import FormField from '../../components/FormField';
import { images } from '../../constants';

const SignUp = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}
      >
        <View className="w-full flex h-full px-4 flex-col">
          <Image
            source={images.logo}
            className="w-full max-w-[170px] self-start"
            resizeMode="contain"
          ></Image>

          <Text className="text-white text-2xl font-pbold">Sign Up</Text>

          <View>
            <FormField text="Username" />
            <FormField text="Email" />
            <FormField text="Password" />

            <PrimaryButton text="Sign Up" additionalClasses="mt-8" />

            <Text className="text-center text-white mt-4">
              Already have an account ?{' '}
              <Link href="/sign-in" className="text-secondary-100">
                Signin
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
