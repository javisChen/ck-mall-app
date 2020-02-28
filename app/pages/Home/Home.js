import React, {Component} from 'react';
import styles from "./HomeStyles";

import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {icon: '', title: '小米秒杀'},
        {icon: '', title: '小米秒杀'},
        {icon: '', title: '小米秒杀'},
        {icon: '', title: '小米秒杀'},
        {icon: '', title: '小米秒杀'},
        {icon: '', title: '小米秒杀'},
        {icon: '', title: '小米秒杀'},
        {icon: '', title: '小米秒杀'},
        {icon: '', title: '小米秒杀'},
        {icon: '', title: '小米秒杀'}
      ],
      products: [
        {
          mainTitle: 'Redmi Note 8 Pro',
          subTitle: '千元4800万四摄',
          price: '1299',
          oldPrice: '1399'
        },
        {
          mainTitle: 'Redmi Note 8 Pro',
          subTitle: '千元4800万四摄',
          price: '1299',
          oldPrice: '1399'
        },
        {
          mainTitle: 'Redmi Note 8 Pro',
          subTitle: '千元4800万四摄',
          price: '1299',
          oldPrice: '1399'
        },
        {
          mainTitle: 'Redmi Note 8 Pro',
          subTitle: '千元4800万四摄',
          price: '1299',
          oldPrice: '1399'
        }
      ]
    }
  }

  // 立即购买点击事件
  onBuyNowPress = () => {
    this.props.navigation.navigate('ProductDetails')
  };

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerSearchWrap}>
              <Image
                  style={styles.headerSearchIcon}
                  source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII='}}/>
              <Text style={styles.headerSearchText}>搜索商品名称</Text>
            </View>
            <View style={styles.headerUserWrap}>
              <Image
                  style={styles.headerUser}
                  source={require('@res/images/navTab/icon-user.png')}
              />
            </View>
          </View>
          <ScrollView>
            <View style={styles.content}>
              <View style={styles.contentBanner}>
                <Image
                    style={styles.contentBannerImage}
                    source={require('@res/images/banner1.jpg')}
                />
              </View>
              <View style={styles.contentMenu}>
                {
                  this.state.menus.map((value, index) => {
                    return (
                        <View style={styles.menuItem} key={index}>
                          <Image
                              style={styles.menuItemIcon}
                              source={require('@res/images/menu-icon.png')}
                          />
                          <Text style={styles.menuItemTitle}>{value.title + index}</Text>
                        </View>
                    )
                  })
                }

              </View>
              <View style={styles.contentProducts}>
                {
                  this.state.products.map((value, index) => {
                    return (
                        <View style={styles.productItem} key={index}>
                          <Image
                              style={styles.productItemImg}
                              source={require('@res/images/phone.jpg')}
                          />
                          <Text style={styles.mainTitle}>{value.mainTitle + index}</Text>
                          <Text style={styles.subTitle}>{value.subTitle}</Text>
                          <Text style={styles.price}>¥{value.price} <Text
                              style={styles.oldPrice}>¥{value.oldPrice}</Text> </Text>
                          <TouchableOpacity activeOpacity={1}
                              onPress={this.onBuyNowPress}
                              style={styles.button}
                          >
                            <Text style={{color: '#ffffff', fontWeight: 'bold'}}>立即购买</Text>
                          </TouchableOpacity>
                        </View>
                    )
                  })
                }
              </View>
            </View>
          </ScrollView>
        </View>
    );
  }
}

export default Home;