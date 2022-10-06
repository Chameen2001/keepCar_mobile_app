import {Box, Image, VStack, KeyboardAvoidingView} from 'native-base';
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onLoginPress = () => {
    console.warn('pressed');
  };

  const onForgotPassPress = () => {
    console.warn('forgot pressed');
  };

  return (
    <View style={styles.wrapper}>
      <Image
        alt="Logo"
        style={styles.backgroundImage}
        source={require('../../../assets/images/logInPageImage/background.png')}
      />
      <Box style={styles.container}>
        <Image
          style={styles.logo}
          alt="logo"
          source={require('../../../assets/logos/logo.png')}
        />
        <KeyboardAvoidingView behavior="padding">
          <VStack style={styles.loginContainer}>
            <Text style={styles.titleText}>Login</Text>
            <VStack style={styles.inputsContainer} space={3}>
              {/* <MaterialCommunityIcons
                  name="email"
                  style={{color: 'red', fontSize: 30}}
                /> */}
              <CustomInput
                value={username}
                setValue={setUsername}
                iconName="email"
                variant="filled"
                placeholder="Username/Email"
                secureTextEntry={false}
              />

              <CustomInput
                value={password}
                setValue={setPassword}
                iconName="form-textbox-password"
                variant="filled"
                placeholder="Username/Email"
                secureTextEntry
              />
            </VStack>
            <CustomButton
              text="Login"
              bgColor="#FFC0AD"
              textColor="black"
              fontSize={15}
              width="80%"
              onPress={onLoginPress}
            />
            <CustomButton
              marginTop={10}
              text="Forgot password?"
              textColor="gray"
              fontSize={11}
              width="80%"
              onPress={onForgotPassPress}
            />
            <CustomButton
              text="Don't have an account? Create one"
              marginTop={0}
              textColor="gray"
              fontSize={11}
              width="80%"
              onPress={onForgotPassPress}
            />
          </VStack>
        </KeyboardAvoidingView>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    resizeMode: 'cover',
  },

  logo: {
    resizeMode: 'contain',
    width: '50%',
  },

  inputsContainer: {
    position: 'relative',
    marginTop: '15%',
    marginBottom: '10%',
    width: '80%',
  },

  textInput: {
    fontFamily: 'MergeOne-Regular',
  },

  wrapper: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  container: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: (Dimensions.get('screen').width / 4) * 3,
    height: Dimensions.get('screen').width,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  titleText: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'MergeOne-Regular',
  },
});

{
  /* <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="sm"
        w="full"
        source={require('../assets/images/logInPageImage/background.png')}></Image> */
}
