import React, {Component} from 'react';
import styles from "./OrderIndexStyles.js";
import CommonStyles from "@common/CommonStyles.js";

import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
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
          picture: require('@res/images/phone.jpg'),
          desc: '小米Redmi 256GB',
          orderId: 'A10002',
          expense: 10.11,
          status: 1
        }
      ]
    }
  }
  onTabPress = (index, item) => {
    const s = `navRefsItem${index}`;
    Object.keys(this.navRefs).forEach(r => {
      this.navRefs[r].setNativeProps({
        style: {
          color: '#000'
        }
      })
    })
    this.navRefs[s].setNativeProps({
      style: {
        color: CommonStyles.themeColor
      }
    })
  };

  componentDidMount() {
  }

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
                    <TouchableOpacity
                        key={index} style={styles.oi_tabItem}
                        onPress={this.onTabPress.bind(this, index, value)}
                        activeOpacity={1}
                        >
                      <Text
                          ref={(ref) => {
                            return this.navRefs = {...this.navRefs, [`navRefsItem${index}`]: ref};
                          }}
                          style={[styles.oi_tabItemText]}>{value.text}</Text>
                    </TouchableOpacity>
                )
              })
            }
          </View>

          <View style={styles.oi_order}>
            <ScrollView>
              {
                this.state.orderList.map((value, index) => {
                  return (
                      <View key={index} style={styles.oi_orderItem}>
                        <View style={styles.oi_orderItemHeader}>
                          <Text style={styles.oi_orderId}>订单号：{value.orderId}</Text>
                          <TouchableOpacity style={styles.oi_dustbinWrapper}>
                            <Image
                                style={styles.oi_dustbin}
                                source={require('@res/images/common/dustbin.png')}
                            />

                          </TouchableOpacity>
                        </View>
                        <View style={styles.oi_orderItemContent}>
                          <Image
                              style={styles.oi_orderItemPic}
                              source={require('@res/images/phone.jpg')}
                          />
                          <Text style={styles.oi_orderItemDesc}>{value.desc}</Text>
                          <Text style={styles.oi_orderItemExpense}>¥
                            <Text style={styles.oi_expenseText}>{value.expense}</Text>
                          </Text>
                        </View>

                        <View style={styles.oi_orderItemButtonGroup}>
                          <TouchableOpacity style={styles.oi_orderItemButton}>
                            <Text style={styles.oi_buttonText}>查看物流</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.oi_orderItemButton}>
                            <Text style={styles.oi_buttonText}>查看物流</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.oi_orderItemButton}>
                            <Text style={styles.oi_buttonText}>查看物流</Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                  )
                })
              }
            </ScrollView>
          </View>


        </View>
    );
  }
}
