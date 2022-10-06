import {Icon, Input} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInput = ({
  iconName,
  variant,
  placeholder,
  secureTextEntry,
  value,
  setValue,
}) => {
  return (
    <Input
      InputLeftElement={
        <Icon
          as={<MaterialCommunityIcons name={iconName} />}
          size={6}
          color="muted.400"
        />
      }
      value={value}
      onChangeText={setValue}
      variant={variant}
      placeholder={placeholder}
      style={styles.textInput}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'MergeOne-Regular',
  },
});
