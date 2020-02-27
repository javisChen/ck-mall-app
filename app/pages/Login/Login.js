import React, {Component} from 'react';
import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import styles from "./LoginStyles";
import {TransitionSpecs} from 'react-navigation-stack';

export default class Login extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerLeftContainerStyle: {
        marginLeft: 5
      },
      headerLeft: () => (
          <TouchableOpacity
              onPress={navigation.getParam('backToHome')}
              style={styles.headerBtn}
          >
            <Image
                style={styles.headerBtnImage}
                source={require('@res/images/detail/icon-close.png')}
            />
          </TouchableOpacity>
      ),
      headerBackTitleVisible: true,
      headerTransparent: true, // 背景透明
      title: '',
      transitionSpec: {
        open: TransitionSpecs.FadeInFromBottomAndroidSpec,
        close: TransitionSpecs.FadeOutToBottomAndroidSpec,
      },
    }
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      loginParams: {
        account: '',
        password: ''
      }
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({backToHome: this._backToHome});
  }

  _backToHome = () => {
    this.props.navigation.navigate('Mine')
  };

  onInputChange = (field, value) => {
    this.state.loginParams[field] = value
    this.updateLoginBtnStyle()
  }

  updateLoginBtnStyle = () => {
    console.log(this.state.loginParams)
    let backgroundColor = '';
    if (this.state.loginParams.account && this.state.loginParams.password) {
      backgroundColor = '#FF6700'
    } else {
      backgroundColor = 'rgba(255,138,0,0.47)'
    }
    this.refs.loginBtnWrapper.setNativeProps({
      style: {
        backgroundColor
      }
    })
  };

  onInputFocus = (field) => {
    this.refs[field].setNativeProps({
      style: {
        borderBottomColor: 'rgba(255,138,0,0.47)',
      }
    })
  };

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleText}>密码登录</Text>
          </View>

          <TextInput
              ref="account"
              onFocus={this.onInputFocus.bind(this, 'account')}
              onChangeText={this.onInputChange.bind(this, 'account')}
              style={styles.input} placeholder={'请输入账号'}>
          </TextInput>
          <TextInput
              ref="password"
              onFocus={this.onInputFocus.bind(this, 'password')}
              onChangeText={this.onInputChange.bind(this, 'password')}
              style={styles.input} placeholder={'请输入密码'}>

          </TextInput>

          <TouchableOpacity
              ref="loginBtnWrapper"
              style={styles.loginBtnWrapper}>
            <Text style={styles.loginBtnText}>
              登录
            </Text>
          </TouchableOpacity>
        </View>
    );
  }
}