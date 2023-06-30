import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProfileController from './ProfileController';
import PROFILE_STRINGS from './config';

export default class Profile extends ProfileController {
  render() {
    const data = this.props.route.params != undefined ? this.props.route.params : '';
    return (
      <>
        <StatusBar backgroundColor={'#109417'} />
        <View>
          <Text style={styles.profileHeading}>{PROFILE_STRINGS.PROFILE_DETAILS}</Text>
          <Text style={styles.firstNameHeading}>
            First Name: {data.firstName}
          </Text>
          <Text style={styles.firstNameHeading}>
            Last Name: {data.lastName}
          </Text>
          <Text style={styles.firstNameHeading}>Email: {data.email}</Text>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.handleUploadImage()}
              style={[styles.continueButton, styles.uploadButton]}>
              <Text style={styles.buttonText}>Upload Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleLogout}
              style={styles.continueButton}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
          {this.state.resourcepath != null && <Image style={styles.profilePic} source={{uri: this.state.resourcepath}}/>}
          
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  profileHeading: {
    backgroundColor: '#109417',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 20,
    fontSize: 20,
  },
  firstNameHeading: {
    color: 'black',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: 'red',
    width: '95%',
    height: 39,
    borderRadius: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
  },
  uploadButton: {
    backgroundColor: '#939e94',
  },
  profilePic:{
    width:'100%',
    height:400
  }
});
