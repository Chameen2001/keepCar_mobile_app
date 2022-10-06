/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({
  text,
  width,
  bgColor = 'white',
  fontSize = '15',
  textColor = 'black',
  onPress,
  marginTop,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.loginButton,
        {
          backgroundColor: bgColor,
          width: width,
          marginTop: marginTop,
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
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'MergeOne-Regular',
  },
});
