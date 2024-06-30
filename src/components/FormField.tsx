import { View, Text, TextInput, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';

interface FormFieldProps {
  text: string;
  placeholder?: string;
  onChange?: () => void;
  additionalClasses?: string;
}

const FormField = ({
  text,
  placeholder,
  onChange,
  additionalClasses,
}: FormFieldProps) => {
  const [showingPassword, setShowingPassword] = useState(false);
  return (
    <View className={additionalClasses}>
      <Text className="text-white text-md font-pregular mt-4">{text}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          secureTextEntry={text === 'Password' && !showingPassword}
          placeholder={placeholder}
          onChange={onChange}
          className="flex-1 text-white font-psemibold text-base"
        ></TextInput>
        {text === 'Password' ? (
          <Pressable onPress={() => setShowingPassword(!showingPassword)}>
            <Image
              source={showingPassword ? icons.eyeHide : icons.eye}
              tintColor="#CDCDE0"
              resizeMode="contain"
              className="w-6 h-6"
            ></Image>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default FormField;
