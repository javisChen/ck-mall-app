import React, {Component} from 'react';
import styles from "./RadioStyles";

import {
  View,
  Image,
  TouchableOpacity
} from "react-native";

const normal = require('@res/images/cart/icon-check-normal.png')
const press = require('@res/images/cart/icon-check-press.png')

export default class Radio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  onRadioPress = () => {
    this.setState({
      checked: !this.state.checked
    })
  };

  loadImage = () => {
    return this.state.checked ? press : normal
  }

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


