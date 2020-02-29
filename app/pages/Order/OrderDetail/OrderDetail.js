import React, {Component} from 'react';
import styles from "./OrderDetailStyles.js";

import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";
import BaseHeader from "../../../components/BaseHeader/BaseHeader";
import Radio from "../../../components/Radio/Radio";
import LinearGradient from 'react-native-linear-gradient'

export default class OrderDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addressList: [
        {
          consignee: '张三',
          phone: '18588686712',
          tag: '家',
          detailedAddress: '广东省广州市沿江路204',
          isDefault: 1
        },
        {
          consignee: '李四',
          phone: '18588686712',
          tag: '家',
          detailedAddress: '广东省广州市沿江路204',
          isDefault: 0
        },
        {
          consignee: '网六',
          phone: '18588686712',
          tag: '家',
          detailedAddress: '广东省广州市沿江路204',
          isDefault: 0
        },
        {
          consignee: '网六',
          phone: '18588686712',
          tag: '家',
          detailedAddress: '广东省广州市沿江路204',
          isDefault: 0
        },
        {
          consignee: '网六',
          phone: '18588686712',
          tag: '家',
          detailedAddress: '广东省广州市沿江路204',
          isDefault: 0
        },
        {
          consignee: '网六',
          phone: '18588686712',
          tag: '家',
          detailedAddress: '广东省广州市沿江路204',
          isDefault: 0
        },
        {
          consignee: '网六',
          phone: '18588686712',
          tag: '家',
          detailedAddress: '广东省广州市沿江路204',
          isDefault: 0
        },
        {
          consignee: '网六',
          phone: '18588686712',
          tag: '家',
          detailedAddress: '广东省广州市沿江路204',
          isDefault: 0
        },
        {
          consignee: '网六',
          phone: '18588686712',
          tag: '家',
          detailedAddress: '广东省广州市沿江路204',
          isDefault: 0
        },
        {
          consignee: '网六',
          phone: '18588686712',
          tag: '家',
          detailedAddress: '广东省广州市沿江路204',
          isDefault: 0
        },
        {
          consignee: '网六',
          phone: '18588686712',
          tag: '家',
          detailedAddress: '广东省广州市沿江路204',
          isDefault: 0
        },
      ]
    }
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
  toAddressEdit = () => {
    this.props.navigation.navigate('AddressEdit')
  };

  render() {
    return (

        <View style={styles.container}>
          <BaseHeader
              showLeftButton={true}
              parentProps={this.props}
              title={'地址管理'}/>

          <View style={styles.ai_address}>
            <ScrollView style={styles.ai_addressScrollView}>
              {
                this.state.addressList.map((value, index) => {
                  return (
                      <TouchableOpacity
                          key={index}
                          style={styles.ai_addressItem}>
                        <View style={[styles.ai_addressBasicInfo]}>
                          <Text style={[styles.ai_addressBasicInfoText, styles.ai_nameText]}>{value.consignee}</Text>
                          <Text style={[styles.ai_addressBasicInfoText, styles.ai_PhoneText]}>{value.phone}</Text>

                          {
                            value.isDefault == 1 &&
                            <View style={[styles.ai_tag]}>
                              <Text style={styles.ai_tagText}>默认</Text>
                            </View>
                          }

                          <View style={[styles.ai_tag]}>
                            <Text style={styles.ai_tagText}>{value.tag}</Text>
                          </View>
                        </View>
                        <View style={styles.ai_detailedAddress}>
                          <Text style={styles.ai_detailedAddressText}>{value.detailedAddress}</Text>
                        </View>

                        <Image
                            style={styles.shippingAddressRightArrow}
                            source={require('@res/images/detail/right.png')}
                        />
                      </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
          </View>
          {/* 下方操作栏 */}
          <View style={styles.ai_bottom}>
            <TouchableOpacity
                onPress={this.toAddressEdit}
                style={styles.ai_bottomButton}>
              <LinearGradient
                  style={styles.ai_bottomButtonLinearGradient}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ffb100', '#ec8f05', '#f0780d', '#ec5f00']}>
                <Text style={styles.ai_bottomButtonText}>新建收货地址</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}
