import React, {Component} from 'react';
import styles from "./CategoryStyles";
import CommonStyles from "@common/CommonStyles.js";

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";

import Separator from "@components/Separator/Separator";
import BaseHeader from "@components/BaseHeader/BaseHeader";

export default class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {name: '众筹'},
        {name: '小米手机'},
        {name: 'Redmi手机'},
        {name: '黑鲨游戏手机'},
        {name: '电视'},
        {name: '大家电'},
        {name: '电脑办公'},
        {name: '小爱智能'},
        {name: '路由器'},
        {name: '生活电器'},
        {name: '厨房电器'},
        {name: '智能穿戴'},
        {name: '智能家居'},
        {name: '车载出行'},
        {name: '个护健康'},
        {name: '数码配件'},
        {name: '日用百货'},
        {name: '有品精选'},
        {name: '服务'},
        {name: '米粉卡'},
        {name: '零售店'},
      ]
    }
  }

  onLeftCategoryItemPress = (index, item) => {
    const s = `leftCategoryItem${index}`;
    Object.keys(this.leftItemRefs).forEach(r => {
      this.leftItemRefs[r].setNativeProps({
        style: {
          backgroundColor: '#f3f3f3'
        }
      })
    })
    this.leftItemRefs[s].setNativeProps({
      style: {
        backgroundColor: '#f8f8f8'
      }
    })

    const leftItemTextRef = `leftCategoryText${index}`;
    Object.keys(this.leftItemTextRefs).forEach(r => {
      this.leftItemTextRefs[r].setNativeProps({
        style: {
          fontSize: 12,
          fontWeight: 'normal'
        }
      })
    })
    this.leftItemTextRefs[leftItemTextRef].setNativeProps({
      style: {
        fontWeight: 'bold',
        fontSize: 13,
        borderLeftWidth: 1,
        borderLeftColor: 'red'
      }
    })
    const leftCategoryTextWrapper = `leftCategoryTextWrapper${index}`;
    Object.keys(this.leftCategoryItemTextWrapperRefs).forEach(r => {
      this.leftCategoryItemTextWrapperRefs[r].setNativeProps({
        style: {
          borderLeftWidth: 0,
        }
      })
    })
    this.leftCategoryItemTextWrapperRefs[leftCategoryTextWrapper].setNativeProps({
      style: {
        borderLeftWidth: 6,
        borderLeftColor: CommonStyles.themeColor
      }
    })


  };

  componentDidMount() {
    console.log(this.refs, this.leftItemTextRefs);
  }

  renderLeftItem = ({item, index}) => {
    return (
        <TouchableOpacity activeOpacity={1}
                          ref={(ref) => {
                            return this.leftItemRefs = {...this.leftItemRefs, [`leftCategoryItem${index}`]: ref};
                          }}
                          style={styles.leftCategoryItem}
                          onPress={this.onLeftCategoryItemPress.bind(this, index, item)}
        >
          <View
              ref={(ref) => {
                return this.leftCategoryItemTextWrapperRefs = {
                  ...this.leftCategoryItemTextWrapperRefs,
                  [`leftCategoryTextWrapper${index}`]: ref
                };
              }}
              style={styles.leftCategoryItemTextWrapper}>
            <Text
                ref={(ref) => {
                  return this.leftItemTextRefs = {...this.leftItemTextRefs, [`leftCategoryText${index}`]: ref};
                }}
                style={styles.leftCategoryItemText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
    )
  }

  _keyExtractor = (item, index) => {
    return index.toString()
  };

  render() {
    return (
        <View style={styles.container}>
          <BaseHeader title={'商品分类'}/>
          <View style={styles.content}>
            <View style={styles.leftWrapper}>
              <FlatList
                  keyExtractor={this._keyExtractor}
                  renderItem={this.renderLeftItem}
                  data={this.state.categories}
                  style={styles.left}/>
            </View>
            <View style={styles.rightWrapper}>
              <ScrollView style={styles.right}>
                <View style={styles.categoryGroupWrapper}>
                  <View style={styles.categoryNameWrapper}>
                    <Text style={styles.categoryNameText}>手机</Text>
                  </View>
                  <View style={styles.categoryGroupContent}>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                  </View>
                </View>
                <Separator color={'f8f8f8'}/>
                <View style={styles.categoryGroupWrapper}>
                  <View style={styles.categoryNameWrapper}>
                    <Text style={styles.categoryNameText}>手机</Text>
                  </View>
                  <View style={styles.categoryGroupContent}>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                  </View>
                </View>
                <Separator color={'f8f8f8'}/>
                <View style={styles.categoryGroupWrapper}>
                  <View style={styles.categoryNameWrapper}>
                    <Text style={styles.categoryNameText}>手机</Text>
                  </View>
                  <View style={styles.categoryGroupContent}>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                    <View style={styles.rightCategoryItem}>
                      <Image
                          source={require('@res/images/category/category1.png')}
                          style={styles.rightCategoryItemImage}>
                      </Image>
                      <Text style={styles.rightCategoryItemText}>Redmi K30 4G</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
    );
  }
}
