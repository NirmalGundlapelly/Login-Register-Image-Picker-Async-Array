import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Profile from './Profile/Profile';
import Login from './Login/Login';

interface IProps {
  navigation?: any;
}

interface IState {
  userLogged: string;
}

export default class Home extends Component<IProps, IState> {
  state = {userLogged: ''};
  componentDidMount() {
    this.getUserDetails();
    AsyncStorage.removeItem('userLogged')
  }

  navigate = () => {
    if (this.state.userLogged != '') {
      this.props.navigation.navigate('Profile');
    } else {
      this.props.navigation.navigate('Login');
    }
  };

  getUserDetails = async () => {
    try {
      const userLogged = await AsyncStorage.getItem('userLogged');
      console.log('userLoged', userLogged);
      if (userLogged !== null) {
        this.setState({userLogged: userLogged}, () => this.navigate());
      } else {
        this.setState({userLogged: ''}, () => this.navigate());
      }
    } catch (error) {
      console.log(error);
    }
  };

  render(): React.ReactNode {
    console.log('user', this.state.userLogged);
    return <View></View>
  }
}
