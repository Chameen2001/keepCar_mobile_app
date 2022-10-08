import {Box, Image, VStack, KeyboardAvoidingView} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigation = useNavigation();

  const onRegisterPress = () => {
    console.warn('pressed');
  };

  const onGoToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.wrapper}>
      <Image
        alt="backgroundImage"
        style={styles.backgroundImage}
        source={require('../../../assets/images/logInPageImage/background.png')}
      />
      <Box style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <VStack style={styles.signupContainer}>
            <Text style={styles.titleText}>Create Account</Text>
            <VStack style={styles.inputsContainer} space={3}>
              {/* <MaterialCommunityIcons
                  name="email"
                  style={{color: 'red', fontSize: 30}}
                /> */}

              <CustomInput
                value={username}
                setValue={setUsername}
                iconName="user"
                variant="filled"
                placeholder="Full Name"
                secureTextEntry={false}
                iconCategory="AntDesign"
              />

              <CustomInput
                value={email}
                setValue={setEmail}
                iconName="email"
                iconCategory="MaterialCommunityIcons"
                variant="filled"
                placeholder="Email"
                secureTextEntry={false}
              />

              <CustomInput
                value={password}
                setValue={setPassword}
                iconName="form-textbox-password"
                iconCategory="MaterialCommunityIcons"
                variant="filled"
                placeholder="Password"
                secureTextEntry
              />
              <CustomInput
                value={repeatPassword}
                setValue={setRepeatPassword}
                iconName="form-textbox-password"
                iconCategory="MaterialCommunityIcons"
                variant="filled"
                placeholder="Confirm Password"
                secureTextEntry
              />
            </VStack>
            <CustomButton
              text="Register"
              bgColor="#FFC0AD"
              textColor="black"
              fontSize={15}
              width="80%"
              onPress={onRegisterPress}
            />

            <Text
              style={{
                color: 'black',
                fontSize: 10,
                width: '80%',
                marginVertical: 5,
                opacity: 0.5,
              }}>
              By registering, you confirm that you accept out terms of use and
              privacy policy
            </Text>

            <CustomButton
              text="have an account? Log in"
              marginTop={0}
              textColor="gray"
              fontSize={11}
              width="80%"
              onPress={onGoToLogin}
            />
          </VStack>
        </KeyboardAvoidingView>
      </Box>
    </View>
  );
};

export default SignupScreen;

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
    backgroundColor: 'white',
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

  signupContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: (Dimensions.get('screen').width / 4) * 3,
    height: (Dimensions.get('screen').height / 4) * 3,
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
    fontWeight: 'bold',
    fontSize: 25,
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
