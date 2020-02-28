import React, {Component} from 'react';
import styles from "./BaseHeaderStyles";
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient'

import {
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

class BaseHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props);
  }

  onLeftButtonPress = () => {
    this.props.parentProps.navigation.goBack()
  };

  render() {
    return (
        <LinearGradient
            styles={styles.linearGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#ffb100', '#ec8f05', '#f0780d', '#ec5f00']}>

          <View style={styles.wrapper}>
            {
              this.props.showLeftButton &&
              <TouchableOpacity
                  onPress={this.onLeftButtonPress}
                  style={styles.headerBtn}
              >
                <Image
                    style={styles.headerBtnImage}
                    source={require('@res/images/detail/back.png')}
                />
              </TouchableOpacity>
            }
            <View style={styles.header}>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
          </View>
        </LinearGradient>
    );
  }
}

BaseHeader.propTypes = {
  title: PropTypes.string.isRequired,
  showLeftButton: PropTypes.bool,
  parentProps: PropTypes.object,
};

BaseHeader.defaultProps = {
  showLeftButton: false
}

export default BaseHeader
