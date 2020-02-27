import React, {Component} from 'react';
import styles from "./MineStyles";

import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Separator from "@components/Separator/Separator";

export default class Mine extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  toLoginPage = () => {
    this.props.navigation.navigate('Login')
  };

  render() {
    return (
        <ScrollView style={styles.container}>
          <ImageBackground
              source={require('@res/images/mine/icon-mine-header-bg.png')}
              style={styles.header}>

            <TouchableOpacity
                onPress={this.toLoginPage}
                activeOpacity={1}
            >
              <View style={styles.loginWrapper}>
                <Image
                    style={styles.userIcon}
                    source={require('@res/images/mine/icon-mine-user.png')}
                />
                <Text style={styles.text}>登录 / 注册</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>

          <View style={styles.orderInfoWrapper}>
            <View style={styles.myOrderWrapper}>
              <Text style={styles.myOrderText}>我的订单</Text>
              <Text style={styles.allOrderText}>全部订单</Text>
              <Image
                  style={styles.rightArrow}
                  source={require('@res/images/detail/right.png')}
              />
            </View>
            <View style={styles.orderStatusWrapper}>
              <View style={styles.orderStatusItem}>
                <Image
                    style={styles.orderStatusItemIcon}
                    source={require('@res/images/mine/icon-wait-for-pay.png')}
                />
                <Text style={styles.orderStatusItemText}>
                  待付款
                </Text>
              </View>
              <View style={styles.orderStatusItem}>
                <Image
                    style={styles.orderStatusItemIcon}
                    source={require('@res/images/mine/icon-wait-for-deliver.png')}
                />
                <Text style={styles.orderStatusItemText}>
                  待发货
                </Text>
              </View>
              <View style={styles.orderStatusItem}>
                <Image
                    style={styles.orderStatusItemIcon}
                    source={require('@res/images/mine/icon-wait-for-receive.png')}
                />
                <Text style={styles.orderStatusItemText}>
                  待收货
                </Text>
              </View>
              <View style={styles.orderStatusItem}>
                <Image
                    style={styles.orderStatusItemIcon}
                    source={require('@res/images/mine/icon-wait-for-comment.png')}
                />
                <Text style={styles.orderStatusItemText}>
                  待评价
                </Text>
              </View>
            </View>
          </View>
          <Separator/>

          <View style={styles.list}>

          </View>
        </ScrollView>
    )
        ;
  }
}
