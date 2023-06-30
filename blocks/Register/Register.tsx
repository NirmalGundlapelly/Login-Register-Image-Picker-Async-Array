import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RegisterController from './RegisterController';
import REGISTER_STRINGS from './config';

export default class Register extends RegisterController {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.loginText}>{REGISTER_STRINGS.REGISTER}</Text>
        <View style={styles.formContainer}>
        <TextInput
            value={this.state.firstName}
            onChangeText={text => this.setState({firstName: text})}
            placeholder={REGISTER_STRINGS.FIRST_NAME}
            style={styles.input}
          />
          <TextInput
            value={this.state.lastName}
            onChangeText={text => this.setState({lastName: text})}
            placeholder={REGISTER_STRINGS.LAST_NAME}
            style={styles.input}
          />
          <TextInput
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
            placeholder={REGISTER_STRINGS.EMAIL}
            style={styles.input}
          />
          <TextInput
            value={this.state.mobile}
            onChangeText={text => this.setState({mobile: text})}
            placeholder={REGISTER_STRINGS.MOBILE}
            inputMode='numeric'
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
            placeholder={REGISTER_STRINGS.PASSWORD}
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            value={this.state.confirmPassword}
            onChangeText={text => this.setState({confirmPassword: text})}
            placeholder={REGISTER_STRINGS.CONFIRM_PASSWORD}
            style={styles.input}
          />

          <TouchableOpacity
            onPress={this.handleRegisterUser}
            style={styles.continueButton}>
            <Text style={styles.buttonText}>{REGISTER_STRINGS.REGISTER}</Text>
          </TouchableOpacity>

          <Text style={styles.dontHaveText}>
            {REGISTER_STRINGS.ALREADY_HAVE_AN_ACCOUNT}{' '}
            <Text
              onPress={() => this.props.navigation.navigate(REGISTER_STRINGS.LOGIN)}
              style={styles.signUpText}>
            {REGISTER_STRINGS.LOGIN}
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
    height: 40,
    borderRadius: 8,
    marginHorizontal: 12,
    marginBottom: 5,
    width: '95%',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    paddingLeft: 15,
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginTop: '5%',
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
});
