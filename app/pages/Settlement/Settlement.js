import React, {Component} from 'react';
import styles from "./SettlementStyles.js";

import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";
import BaseHeader from "../../components/BaseHeader/BaseHeader";
import Radio from "../../components/Radio/Radio";
import LinearGradient from 'react-native-linear-gradient'

export default class Settlement extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
        <TouchableOpacity style={styles.leftAction} onPress={this.close}>
          <Animated.Text
              style={[
                styles.actionText,
                {
                  transform: [{translateX: trans}],
                },
              ]}>
            Archive
          </Animated.Text>
        </TouchableOpacity>
    );
  };

  toPayment = () => {
    this.props.navigation.navigate('Payment')
  };

  toAddress = () => {
    this.props.navigation.navigate('AddressIndex')
  };

  render() {
    return (
        <View style={styles.container}>
          <BaseHeader
              showLeftButton={true}
              parentProps={this.props}
              title={'确认订单'}/>

          <ScrollView>
            <TouchableOpacity
            onPress={this.toAddress}
            >
              <View style={styles.shippingAddress}>
                <Text style={styles.shippingAddressText}>请先选择收货地址</Text>

                <Image
                    style={styles.shippingAddressRightArrow}
                    source={require('@res/images/detail/right.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.content}>
              <View style={styles.productItemWrapper}>
                <View style={styles.productImageWrapper}>
                  <Image
                      source={require('@res/images/detail/productImg.jpg')}
                      style={styles.productImage}>
                  </Image>
                  <View style={styles.productInfo}>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode={'tail'}
                        style={styles.productDesc}>
                      【新品】Apple 二代新款AirPods（配无限充电盒）入耳式无限蓝牙耳机 MRXJ2CH/A
                    </Text>
                    <View>
                    </View>
                    <Text style={styles.productPrice}>¥ 2699
                      <Text style={styles.productQuantity}> x1</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.productItemWrapper}>
                <View style={styles.productImageWrapper}>
                  <Image
                      source={require('@res/images/detail/productImg.jpg')}
                      style={styles.productImage}>
                  </Image>
                  <View style={styles.productInfo}>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode={'tail'}
                        style={styles.productDesc}>
                      【新品】Apple 二代新款AirPods（配无限充电盒）入耳式无限蓝牙耳机 MRXJ2CH/A
                    </Text>
                    <View>
                    </View>
                    <Text style={styles.productPrice}>¥ 2699
                      <Text style={styles.productQuantity}> x1</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* 费用统计 */}
            <View style={styles.costInfo}>
              <View style={styles.costInfoItem}>
                <View style={styles.costInfoItemKeyWrapper}>
                  <View style={styles.costInfoItemKey}>
                    <Text style={styles.costInfoItemText}>商品总额</Text>
                  </View>
                </View>
                <View style={styles.costInfoItemValueWrapper}>
                  <View style={styles.costInfoItemValue}>
                    <Text style={styles.costInfoItemText}>¥58.70</Text>
                  </View>
                </View>
              </View>
              <View style={styles.costInfoItem}>
                <View style={styles.costInfoItemKeyWrapper}>
                  <View style={styles.costInfoItemKey}>
                    <Text style={styles.costInfoItemText}>运费</Text>
                  </View>
                </View>
                <View style={styles.costInfoItemValueWrapper}>
                  <View style={styles.costInfoItemValue}>
                    <Text style={[styles.costInfoItemText, styles.costInfoItemValueText]}>¥58.70</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>

          {/* 下方操作栏 */}
          <View style={styles.cartBottomActionBar}>
            <View style={styles.cartBottomActionBarRight}>
              <View style={styles.expenseWrapper}>
                <Text style={styles.amountText}>
                  实付金额：<Text style={styles.amount}>¥ 1231232130.02</Text>
                </Text>
              </View>

              <TouchableOpacity
                  onPress={this.toPayment}
                  style={styles.settleButton}>
                <LinearGradient
                    style={{borderRadius: 10}}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#ffb100', '#ec8f05', '#f0780d', '#ec5f00']}>
                  <Text style={styles.settleButtonText}>提交订单</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
  }
}
