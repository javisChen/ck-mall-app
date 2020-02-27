import React, {Component} from 'react';
import styles from "./RadioStyles";

import {
  View,
  Image,
  TouchableOpacity
} from "react-native";

const normal = require('@res/images/cart/icon-check-normal.png')
const press = require('@res/images/cart/icon-check-press.png')

/**
 * 实现功能
 * 1.单选
 * 2.提供
 */
export default class RadioGroup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  componentDidMount = () => {
    console.log(this.props)
  };

  onRadioPress = () => {
    this.setState({
      checked: !this.state.checked
    })
  };

  loadImage = () => {
    return this.state.checked ? press : normal
  }

  onChildCheck = () => {

  };

  render() {
    return (
        <View style={styles.radioWrapper}>
          <TouchableOpacity activeOpacity={1}
              onPress={this.onRadioPress}
              style={styles.radioButton}>
            <Image
                style={styles.radioImage}
                source={this.loadImage()}
            />
          </TouchableOpacity>
          <View style={styles.childContent}>
            {this.props.children}
          </View>
        </View>
    );
  }
}


