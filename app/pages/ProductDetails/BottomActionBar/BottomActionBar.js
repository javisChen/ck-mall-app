import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import styles from "./BottomActionBarStyles";

/**
 * 下方操作栏
 */
export default class BottomActionBar extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const {navigation} = this.props;
    return (
        <View style={styles.bottomActionBar}>
          <View style={styles.commonAction}>
            <Image
                style={styles.commonActionIcon}
                source={require('@res/images/navTab/icon-home.png')}
            />
            <Text style={styles.commonActionText}>首页</Text>
          </View>
          {/*<View style={styles.commonAction}>*/}
          {/*  <Image*/}
          {/*      style={styles.commonActionIcon}*/}
          {/*      source={require('@res/images/detail/customService.png')}*/}
          {/*  />*/}
          {/*  <Text style={styles.commonActionText}>客服</Text>*/}
          {/*</View>*/}
          <View style={styles.commonAction}>
            <Image
                style={styles.commonActionIcon}
                source={require('@res/images/detail/cart.png')}
            />
            <Text style={styles.commonActionText}>购物车</Text>
          </View>
          <View style={styles.addToCartBtnWrap}>
            <TouchableOpacity
                style={styles.addToCartBtn}
            >
              <Text style={styles.addToCartBtnText}>加入购物车</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}