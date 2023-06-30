import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LoginController from './LoginController';
import Entypo from 'react-native-vector-icons/Entypo';
import LOGIN_STRINGS from './config';

export default class Login extends LoginController {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.loginText}>{LOGIN_STRINGS.LOGIN}</Text>
        <View style={styles.formContainer}>
          <TextInput
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
            placeholder={LOGIN_STRINGS.EMAIL}
            style={{
              ...styles.input,
              borderColor:
                (this.state.email.length > 1 && this.state.email.length < 6) ||
                this.state.error
                  ? LOGIN_STRINGS.RED
                  : LOGIN_STRINGS.WHITE,
            }}
          />
          <View
            style={{
              ...styles.passwordContainer,
              borderColor:
                (this.state.password.length > 1 &&
                  this.state.password.length < 6) ||
                this.state.error
                  ? LOGIN_STRINGS.RED
                  : LOGIN_STRINGS.WHITE,
            }}>
            <TextInput
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}
              placeholder={LOGIN_STRINGS.PASSWORD}
              secureTextEntry={this.state.isSecure}
              style={{
                ...styles.input,
                marginLeft: -1,
                width: '88%',
                borderColor:  LOGIN_STRINGS.WHITE,
              }}
            />
            {this.state.isSecure ? (
              <Entypo
                size={25}
                color={LOGIN_STRINGS.BLACK}
                style={{marginLeft: -20}}
                onPress={this.handleSecure}
                name={LOGIN_STRINGS.EYE_WITH_LINE}
              />
            ) : (
              <Entypo
                onPress={this.handleSecure}
                size={25}
                style={{marginLeft: -20}}
                color={LOGIN_STRINGS.BLACK}
                name={LOGIN_STRINGS.EYE}
              />
            )}
          </View>

          <TouchableOpacity
            onPress={this.handleLogin}
            style={styles.continueButton}>
            <Text style={styles.buttonText}>{LOGIN_STRINGS.LOGIN}</Text>
          </TouchableOpacity>

          <Text style={styles.dontHaveText}>
            {LOGIN_STRINGS.DONT_HAVE_AN_ACCOUNT}{' '}
            <Text
              onPress={() => this.props.navigation.navigate(LOGIN_STRINGS.REGISTER)}
              style={styles.signUpText}>
              {LOGIN_STRINGS.REGISTER}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgrouindmage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
  formContainer: {
    backgroundColor: 'rgba(49, 51, 51, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 12,
    marginTop: 10,
    paddingVertical: 20,
  },
  input: {
    height: 47,
    borderRadius: 8,
    marginHorizontal: 12,
    marginBottom: 5,
    width: '95%',
    backgroundColor: 'white',
    borderWidth: 1.5,
    padding: 10,
    paddingLeft: 15,
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginTop: '35%',
    marginLeft: 15,
  },
  continueButton: {
    backgroundColor: '#1cad4a',
    width: '95%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
  },
  forgetText: {
    color: '#CDE7BE',
    marginTop: 15,
  },
  orText: {
    color: '#939999',
    marginTop: 20,
    fontSize: 14,
  },

  authButtonContainer: {
    backgroundColor: '#EAF4F4',
    width: '95%',
    height: 48,
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  buttonIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  authButtonText: {
    color: '#313333',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonIcon: {
    position: 'absolute',
    left: 5,
  },

  dontHaveText: {
    color: '#EAF4F4',
    marginTop: 20,
    marginRight: 10,
    padding: 10,
  },
  signUpText: {
    color: '#CDE7BE',
    fontWeight: '600',
    fontSize: 15,
  },

  passwordContainer: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'center',
    borderWidth: 1.5,
    backgroundColor: 'white',
    height: 55,
    width: '95%',
    borderRadius: 10,
  },
});
