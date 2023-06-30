import {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserDetails = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  mobile: string;
  confirmPassword: string;
}

interface IProps {
  navigation?: any;
}

interface IState {
  email: string;
  password: string;
  userData: UserDetails[];
  firstName: string;
  lastName: string;
  mobile: string;
  confirmPassword: string;
}

export default class RegisterController extends Component<IProps, IState> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    profileImage:'',
    userData: [],
  };

  componentDidMount(): void {
    this.getUserDetails();
  }

  getUserDetails = async () => {
    try {
      const userDetails = await AsyncStorage.getItem('userDetails');
      if (userDetails !== null) {
        const parseData = userDetails != null ? JSON.parse(userDetails) : null;
        this.setState({userData: parseData});
      }
    } catch (error) {
      console.log(error);
    }
  };

  saveDetails = async () => {
    try {
      await AsyncStorage.setItem(
        'userDetails',
        JSON.stringify(this.state.userData),
      );
    } catch (error) {
      console.log(error);
    }
  };

  // getPreviousDetails = async () => {
  //   try {
  //     const userDetails = await AsyncStorage.getItem('userDetails');
  //     console.log(userDetails);
  //     if (userDetails !== null) {
  //       const parseData = userDetails != null ? JSON.parse(userDetails) : null;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  handleRegisterUser = async () => {
    const {email, password} = this.state;
    if (email != '' && password != '') {
      try {
        const details = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: email,
          mobile: this.state.mobile,
          password: password,
          confirmPassword: this.state.confirmPassword,
          isLogged: false
        };

        this.setState(
          (prevState: any) => ({userData: [...prevState.userData, details]}),
          () => {
            this.saveDetails(), this.props.navigation.navigate('Login');
          },
        );
      } catch (error) {
        console.log(error);
      }
    }
    this.setState({email: '', password: '', firstName:'', lastName:'', mobile:'', confirmPassword:''});
  };
}
