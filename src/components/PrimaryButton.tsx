import { Text, Pressable } from 'react-native';
import React from 'react';

interface FormFieldProps {
  text: string;
  onPress?: () => any;
  additionalClasses?: string;
}

const PrimaryButton = ({
  text,
  onPress,
  additionalClasses,
}: FormFieldProps) => {
  return (
    <Pressable
      className={`w-full bg-secondary rounded-md p-3 ${additionalClasses}`}
      onPress={onPress}
    >
      <Text className="text-md text-center font-pbold">{text}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
