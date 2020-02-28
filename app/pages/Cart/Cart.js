import React, {Component} from 'react';
import styles from "./CartStyles";

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

export default class Cart extends Component {

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
                  transform: [{ translateX: trans }],
                },
              ]}>
            Archive
          </Animated.Text>
        </TouchableOpacity>
    );
  };


  toSettlement = () => {
    console.log(123123)
    this.props.navigation.navigate('Settlement')
  };

  render() {
    return (
        <View style={styles.container}>
          <BaseHeader parentProps={this.props} title={'购物车'}/>

          {/*<Swipeable*/}
          {/*    renderLeftActions={this.renderLeftActions}>*/}
          {/*  <Text>*/}
          {/*    "hello"*/}
          {/*  </Text>*/}
          {/*</Swipeable>*/}
          <View style={styles.content}>
            <ScrollView>
              <View style={styles.productItemWrapper}>
                <Radio>
                  <TouchableOpacity style={styles.productImageWrapper}>
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
                        <Text style={styles.productOldPrice}>¥ 3000</Text>
                      </Text>

                      <View style={styles.purchaseQuantityWrapper}>
                        <View style={styles.purchaseQuantityInputWrapper}>
                          <TouchableOpacity>
                            <Image source={require('@res/images/detail/minus.png')} style={styles.minus}/>
                          </TouchableOpacity>
                          <View style={styles.quantityWrapper}>
                            <Text style={styles.quantity}>1</Text>
                          </View>
                          <TouchableOpacity>
                            <Image source={require('@res/images/detail/plus.png')} style={styles.plus}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Radio>
              </View>

              <View style={styles.productItemWrapper}>
                <Radio>
                  <TouchableOpacity style={styles.productImageWrapper}>
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
                        <Text style={styles.productOldPrice}>¥ 3000</Text>
                      </Text>

                      <View style={styles.purchaseQuantityWrapper}>
                        <View style={styles.purchaseQuantityInputWrapper}>
                          <TouchableOpacity>
                            <Image source={require('@res/images/detail/minus.png')} style={styles.minus}/>
                          </TouchableOpacity>
                          <View style={styles.quantityWrapper}>
                            <Text style={styles.quantity}>1</Text>
                          </View>
                          <TouchableOpacity>
                            <Image source={require('@res/images/detail/plus.png')} style={styles.plus}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Radio>
              </View>

              <View style={styles.productItemWrapper}>
                <Radio>
                  <TouchableOpacity style={styles.productImageWrapper}>
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
                        <Text style={styles.productOldPrice}>¥ 3000</Text>
                      </Text>

                      <View style={styles.purchaseQuantityWrapper}>
                        <View style={styles.purchaseQuantityInputWrapper}>
                          <TouchableOpacity>
                            <Image source={require('@res/images/detail/minus.png')} style={styles.minus}/>
                          </TouchableOpacity>
                          <View style={styles.quantityWrapper}>
                            <Text style={styles.quantity}>1</Text>
                          </View>
                          <TouchableOpacity>
                            <Image source={require('@res/images/detail/plus.png')} style={styles.plus}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Radio>
              </View>
            </ScrollView>
          </View>
          <View style={styles.cartBottomActionBar}>
            <View style={styles.cartBottomActionBarLeft}>
              <Radio>
                <Text>全选</Text>
              </Radio>
            </View>
            <View style={styles.cartBottomActionBarRight}>
              <View style={styles.expenseWrapper}>
                <Text style={styles.amountText}>
                  合计：<Text style={styles.amount}>¥ 1231232130</Text>
                </Text>
                <Text style={styles.freight}>
                  运费：¥0
                </Text>
              </View>

              <TouchableOpacity
                  onPress={this.toSettlement}
                  style={styles.settleButton}>
                <LinearGradient
                    style={{borderRadius: 10}}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#ffb100', '#ec8f05', '#f0780d', '#ec5f00']}>
                  <Text style={styles.settleButtonText}>去结算</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
  }
}
