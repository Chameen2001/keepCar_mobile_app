/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({
  text,
  width,
  bgColor = 'white',
  fontSize,
  textColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.loginButton,
        {
          backgroundColor: bgColor,
          width: width,
        },
      ]}>
      <Text style={[styles.buttonText, {color: textColor, fontSize: fontSize}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  loginButton: {
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'MergeOne-Regular',
  },
});
