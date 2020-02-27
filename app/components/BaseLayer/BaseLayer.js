import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import {
  Animated,
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import styles from "./BaseLayerStyles";

class BaseLayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      show: false,
      animation: 'fadeInUpBig'
    }
  }

  show = () => {
    this.setState({
      show: true
    })
  };

  hide = () => {
    console.log(123)
    // 先设置了fadeOut漫画，再把显示设成false
    this.setState({
      animation: 'fadeOutDownBig'
    }, () => {
      setTimeout(() => this.setState({
        show: false,
        animation: 'fadeInUpBig'
      }), 250)
    })
  };

  render() {
    return (
        this.state.show &&
        <View
            style={styles.layerWrapper}>
          <Animatable.View
              duration={500}
              animation={this.state.animation}
              style={styles.contentWrapper}>
            <View style={styles.header}>
              {
                this.props.title && <Text style={styles.title}>{this.props.title}</Text>
              }
              <TouchableOpacity
                  style={styles.closeIconWrapper}
                  onPress={this.hide}>
                <Image
                    source={require('@res/images/detail/icon-close.png')}
                    style={styles.closeIcon}/>
              </TouchableOpacity>
            </View>
            {this.props.children}
          </Animatable.View>
        </View>
    );
  }
}

BaseLayer.propTypes = {
  // 标题
  title: PropTypes.string
};

BaseLayer.defaultProps = {
};

export default BaseLayer;
