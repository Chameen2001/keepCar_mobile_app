import {Icon, Input} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomInput = ({
  iconCategory,
  iconName,
  variant,
  placeholder,
  secureTextEntry,
  value,
  setValue,
}) => {
  const key = iconCategory;
  let iconData;

  switch (key) {
    case 'MaterialCommunityIcons':
      iconData = <MaterialCommunityIcons name={iconName} />;
      break;
    case 'AntDesign':
      iconData = <AntDesign name={iconName} />;
      break;
    default:
      break;
  }
  return (
    <Input
      InputLeftElement={<Icon as={iconData} size={6} color="muted.400" />}
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
