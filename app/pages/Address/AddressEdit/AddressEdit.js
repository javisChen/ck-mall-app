import React, {Component} from 'react';
import styles from "./AddressEditStyles.js";

import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import BaseHeader from "../../../components/BaseHeader/BaseHeader";
import Radio from "../../../components/Radio/Radio";
import LinearGradient from 'react-native-linear-gradient'

export default class AddressIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  save = () => {
    this.props.navigation.navigate('AddressIndex')
  };

  render() {
    return (
        <View style={styles.container}>
          <BaseHeader
              showLeftButton={true}
              parentProps={this.props}
              title={'添加收货地址'}/>
          <View style={styles.ae_addressInfo}>
            <View style={styles.ae_addressInfoItem}>
              <Text style={styles.ae_addressInfoItemLabel}>
                收货人
              </Text>
              <TextInput
                  ref="account"
                  // onFocus={this.onInputFocus.bind(this, 'account')}
                  // onChangeText={this.onInputChange.bind(this, 'account')}
                  style={styles.ae_addressInfoItemInput} placeholder={'请填写收货人姓名'}>
              </TextInput>
            </View>
            <View style={styles.ae_addressInfoItem}>
              <Text style={styles.ae_addressInfoItemLabel}>
                手机号码
              </Text>
              <TextInput
                  ref="account"
                  // onFocus={this.onInputFocus.bind(this, 'account')}
                  // onChangeText={this.onInputChange.bind(this, 'account')}
                  style={styles.ae_addressInfoItemInput} placeholder={'请填写收货人手机号码'}>
              </TextInput>
            </View>
            <View style={styles.ae_addressInfoItem}>
              <Text style={styles.ae_addressInfoItemLabel}>
                所在地区
              </Text>
              <TextInput
                  ref="account"
                  // onFocus={this.onInputFocus.bind(this, 'account')}
                  // onChangeText={this.onInputChange.bind(this, 'account')}
                  style={styles.ae_addressInfoItemInput} placeholder={'省市区县、乡镇等'}>
              </TextInput>
            </View>
            <View style={[styles.ae_addressInfoItem, styles.ae_noBottomBorder]}>
              <Text style={styles.ae_addressInfoItemLabel}>
                详细地址
              </Text>
              <TextInput
                  ref="account"
                  // onFocus={this.onInputFocus.bind(this, 'account')}
                  // onChangeText={this.onInputChange.bind(this, 'account')}
                  style={styles.ae_addressInfoItemInput} placeholder={'街道、楼牌号等'}>
              </TextInput>
            </View>
          </View>

          {/*<View style={styles.ae_addressInfo}>*/}
          {/*  <View style={[styles.ae_addressInfoItem, styles.ae_noBottomBorder]}>*/}
          {/*    <Text style={styles.ae_addressInfoItemLabel1}>*/}
          {/*      设置默认地址*/}
          {/*    </Text>*/}
          {/*    <TextInput*/}
          {/*        ref="account"*/}
          {/*        // onFocus={this.onInputFocus.bind(this, 'account')}*/}
          {/*        // onChangeText={this.onInputChange.bind(this, 'account')}*/}
          {/*        style={styles.ae_addressInfoItemInput1} placeholder={'街道、楼牌号等'}>*/}
          {/*    </TextInput>*/}
          {/*  </View>*/}
          {/*</View>*/}
          {/* 下方操作栏 */}
          <View style={styles.ae_bottom}>
            <TouchableOpacity
                onPress={this.save}
                style={styles.ae_bottomButton}>
              <LinearGradient
                  style={styles.ae_bottomButtonLinearGradient}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ffb100', '#ec8f05', '#f0780d', '#ec5f00']}>
                <Text style={styles.ae_bottomButtonText}>保存</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

        </View>
    );
  }
}
