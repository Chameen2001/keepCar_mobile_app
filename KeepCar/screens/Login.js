import {Box, Image, Input, VStack, KeyboardAvoidingView} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from 'native-base';

export default function Login() {
  return (
    <Box flex={1} style={styles.wrapper}>
      <Image
        width={Dimensions.get('screen').width}
        height={Dimensions.get('screen').height}
        alt="Logo"
        resizeMode="cover"
        source={require('../assets/images/logInPageImage/background.png')}></Image>
      <Box style={styles.container}>
        <Image
          style={styles.logo}
          alt="logo"
          source={require('../assets/logos/logo.png')}></Image>
        <KeyboardAvoidingView behavior="padding">
          <Box style={styles.loginContainer}>
            <VStack style={styles.vStackContainer}>
              <Text style={styles.titleText}>Login</Text>
              <VStack style={styles.inputsContainer} space={3}>
                <Input
                  InputLeftElement={
                    <Icon
                      as={<MaterialCommunityIcons name="email" />}
                      size={6}
                      color="muted.400"
                    />
                  }
                  variant="filled"
                  placeholder="Username/Email"
                  style={styles.textInput}
                />
                {/* <MaterialCommunityIcons
                  name="email"
                  style={{color: 'red', fontSize: 30}}
                /> */}
                <Input
                  InputLeftElement={
                    <Icon
                      as={
                        <MaterialCommunityIcons name="form-textbox-password" />
                      }
                      size={6}
                      color="muted.400"
                    />
                  }
                  variant="filled"
                  placeholder="Password"
                  style={styles.textInput}
                />
                {/* <TextInput
                  style={styles.textInput}
                  placeholder="Username/Email"
                  placeholderTextColor={'#5C5C5C'}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  placeholderTextColor={'#5C5C5C'}
                /> */}
              </VStack>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </VStack>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
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
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  loginContainer: {
    backgroundColor: 'white',
    width: (Dimensions.get('screen').width / 4) * 3,
    height: Dimensions.get('screen').width,

    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  vStackContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC0AD',
    width: '40%',
    height: '10%',
    borderRadius: 10,
  },
  titleText: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'MergeOne-Regular',
  },

  buttonText: {
    color: 'black',
    fontSize: 15,
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
