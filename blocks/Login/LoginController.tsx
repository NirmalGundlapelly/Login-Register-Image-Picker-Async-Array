import AsyncStorage from '@react-native-async-storage/async-storage';
import {Component} from 'react';
import {Alert} from 'react-native';

type UserDetails = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  mobile: string;
  confirmPassword: string;
};

interface IProps {
  navigation?: any;
}

interface IState {
  email: string;
  password: string;
  userDetails: UserDetails[];
  invaidUser: boolean;
  error: boolean;
  isSecure: boolean;
}

export default class LoginController extends Component<IProps, IState> {
  state = {
    email: '',
    password: '',
    userDetails: [],
    invaidUser: false,
    error: false,
    isSecure: true,
  };

  componentDidMount() {
    const unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getUserDetails();
    });
    return unsubscribe;
  }

  handleSecure = () => {
    this.setState({isSecure: !this.state.isSecure});
  };

  saveDetails = async () => {
    try {
      await AsyncStorage.setItem('userLogged', JSON.stringify('Yes'));
      await AsyncStorage.setItem('userMail', JSON.stringify(this.state.email));
    } catch (error) {
      console.log(error);
    }
  };

  handleLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      this.setState({error: true});
    } else {
      this.setState({error: false});
    }

    const getUser = this.state.userDetails.find(
      (each: UserDetails) => each.email === this.state.email,
    );

    if (getUser === undefined) {
      if (this.state.email != '' && this.state.password != '') {
        this.setState({invaidUser: true, email: '', password: ''});
        Alert.alert('Invalid User');
      }
    } else {
      const {password} = getUser;
      if (password === this.state.password) {
        this.setState({password: '', email: ''}, () => this.saveDetails());
        this.props.navigation.navigate('Profile', getUser);
      } else {
        Alert.alert('Invalid Credintials');
      }
    }

    console.log('user', getUser);
  };

  getUserDetails = async () => {
    try {
      const userDetails = await AsyncStorage.getItem('userDetails');
      console.log('savedAsync', userDetails);
      if (userDetails !== null) {
        const parseData = userDetails != null ? JSON.parse(userDetails) : null;
        this.setState({userDetails: parseData});
      }
    } catch (error) {
      console.log(error);
    }
  };
}
