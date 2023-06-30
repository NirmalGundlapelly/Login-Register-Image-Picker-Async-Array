import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {PermissionsAndroid} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

type Options = {
  title?: string;
  message?: string;
  cancelText?: string;
  mediaType: any;
  saveToPhotos: boolean;
};

interface IProps {
  navigation?: any;
  route?:any;
}

interface IState {
  userProfile: string;
  resourcepath: null | string;
}

export default class ProfileController extends Component<IProps, IState> {
  state = {userProfile: '', resourcepath: null};

  componentDidMount(): void {
    const unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getUserDetails();
    });
    return unsubscribe;
  }

  handleLogout = () => {
    AsyncStorage.removeItem('userLogged');
    this.props.navigation.navigate('Login');
  };

  handleUploadImage = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Gallery');
        const options:Options = {
          title: 'Select an image',
          mediaType: 'photo',
          saveToPhotos: true,
        };
        launchImageLibrary(options, (response: any) => {
          if (response.didCancel) {
            console.log('User canceled');
          } else if (response.errorCode) {
            console.log('Error picking image: ', response.error);
          } else {
            this.setState({
              resourcepath: response.assets[0].uri,
            });
          }
        });
      } else {
        console.log('Gallery permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  getUserDetails = async () => {
    try {
      const userDetails = await AsyncStorage.getItem('userMail');
      console.log('savedAsync', userDetails);
      if (userDetails !== null) {
        const parseData = userDetails != null ? JSON.parse(userDetails) : null;
        this.setState({userProfile: parseData});
      }
    } catch (error) {
      console.log(error);
    }
  };
}
