import React, {Component} from 'react';
import styles from "./PaymentStyles.js";

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";
import BaseHeader from "../../components/BaseHeader/BaseHeader";
import LinearGradient from 'react-native-linear-gradient'

const normal = require('@res/images/cart/icon-check-normal.png')
const press = require('@res/images/cart/icon-check-press.png')

export default class Payment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expense: 1234,
      checked: false,
      payWay: [
        {
          title: '微信支付',
          icon: require('@res/images/payment/wechat.png'),
          checked: true
        },
        {
          title: '支付宝',
          icon: require('@res/images/payment/alipay.png'),
          checked: false
        },
      ],
      checkedPayWay: {},
    }

    this.state.checkedPayWay = this.state.payWay[0]
  }

  pay = () => {
    this.props.navigation.goBack()
  };

  onPressPayWay = (item, index, o) => {
    this.state.payWay.forEach((obj, idx) => {
      if (idx != index) {
        obj.checked = false
      }
    })

    let checkedPayWay = this.state.payWay[index];
    checkedPayWay.checked = true
    this.setState({
      payWay: this.state.payWay,
      checkedPayWay: checkedPayWay
    })
  };

  loadImage = (item, o) => {
    return item.checked ? press : normal
  };

  render() {
    return (
        <View style={styles.container}>
          <BaseHeader parentProps={this.props}
                      showLeftButton={true}
                      title={'收银台'}/>
          <ScrollView>
            <View style={styles.amount}>
              <Text style={styles.amountText}>¥
                <Text style={styles.amountPriceText}> 81.25</Text>
              </Text>
            </View>
            {/* 费用统计 */}
            <View style={styles.payWay}>
              {
                this.state.payWay.map((value, index) => {
                  return (
                      <TouchableOpacity activeOpacity={1}
                                        key={index} style={styles.payWayItem}
                                        onPress={this.onPressPayWay.bind(this, value, index)}>
                        <Image
                            source={value.icon}
                            style={styles.payWayIcon}/>
                        <Text style={styles.payWayText}>{value.title}</Text>
                        <Image
                            style={styles.radioImage}
                            source={this.loadImage(value)}
                        />
                      </TouchableOpacity>
                  )
                })
              }
            </View>
          </ScrollView>

          {/* 下方操作栏 */}
          <View style={styles.cartBottomActionBar}>
            <TouchableOpacity
                onPress={this.pay}
                style={styles.settleButton}>
              <LinearGradient
                  style={{borderRadius: 10}}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ffb100', '#ec8f05', '#f0780d', '#ec5f00']}>
                <Text style={styles.settleButtonText}>{this.state.checkedPayWay.title}支付¥{this.state.expense}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}
