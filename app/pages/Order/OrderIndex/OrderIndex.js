import React, {Component} from 'react';
import styles from "./OrderIndexStyles.js";

import {
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import BaseHeader from "../../../components/BaseHeader/BaseHeader";
import LinearGradient from 'react-native-linear-gradient'

export default class AddressIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: [
        {
          text: '全部'
        },
        {
          text: '待付款'
        },
        {
          text: '待发货'
        },
        {
          text: '待收货'
        },
        {
          text: '评价'
        },
      ],
      orderList: [
        {
          picture: '',
          desc: '小米Redmi 256GB'
        }
      ]
    }
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
              title={'我的订单'}/>

          <View style={styles.oi_tab}>
            {
              this.state.tab.map((value, index) => {
                return (
                    <View key={index} style={styles.oi_tabItem}>
                      <Text style={styles.oi_tabItemText}>{value.text}</Text>
                    </View>
                )
              })
            }
          </View>

          {
            this.state.orderList.map((value, index) => {
              return (
                  <View style={styles.oi_orderItem}>

                    {/*<Image*/}
                    {/*    style={styles.productItemImg}*/}
                    {/*    source={require('@res/images/phone.jpg')}*/}
                    {/*/>*/}
                  </View>

              )
            })
          }


        </View>
    );
  }
}
