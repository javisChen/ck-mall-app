import React, {Component} from 'react';
import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import styles from "./ProductDetailsStyles";
import Separator from "../../components/Separator/Separator";
import BottomActionBar from "./BottomActionBar/BottomActionBar";
import SpecLayer from "./SpecLayer/SpecLayer";
import SkuLayer from "./SkuLayer/SkuLayer";
import HTML from 'react-native-render-html';

export default class ProductDetails extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerLeftContainerStyle: {
        marginLeft: 5
      },
      headerLeft: () => (
          <TouchableOpacity
              onPress={navigation.getParam('backToHome')}
              style={styles.headerBtn}
          >
            <Image
                style={styles.headerBtnImage}
                source={require('@res/images/detail/back.png')}
            />
          </TouchableOpacity>
      ),
      headerBackTitleVisible: true,
      headerTransparent: false, // 背景透明
      title: '123'
    }
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      // 选中的详情选项
      selectedDetailOption: 'detail',
      product: {
        detail:
            '<img src="https://img30.360buyimg.com/sku/jfs/t1/72592/13/13128/58796/5da3e09aE4816d082/e335e3d2e4f3416d.jpg" alt="">' +
            '<img src="https://img30.360buyimg.com/sku/jfs/t1/59827/4/12876/182274/5da3e09aEdd49e5e1/a97d8e4db3ed8939.jpg" alt="">' +
            '<img src="https://img30.360buyimg.com/sku/jfs/t1/53117/39/13575/194921/5da3e09aE4d634aa6/b24b6df711e1536f.jpg" alt="">' +
            '<img src="https://img30.360buyimg.com/sku/jfs/t1/74427/31/12996/206691/5da3e09aEffb3bd6e/57344267ad03505e.jpg" alt="">' +
            '<span style="color: red;font-size: 20px" >123' +
            '<span/>',
        skus: [
          {
            specName: '版本',
            specValues: [
              {
                valueId: '1',
                valueName: '6GB+64GB'
              },
              {
                valueId: '2',
                valueName: '6GB+128GB'
              },
              {
                valueId: '3',
                valueName: '8GB+128GB'
              }
            ],
          },
          {
            specName: '颜色',
            specValues: [
              {
                valueId: '1',
                valueName: '深海微光'
              },
              {
                valueId: '2',
                valueName: '时光独白'
              }
            ],
          },
        ],
        spuParams: [
          {
            name: '上市时间',
            value: '2019.12',
            isCore: 1
          },
          {
            name: '前摄像头',
            value: '3200万像素',
            isCore: 1
          },
          {
            name: '后摄像头',
            value: '4800万+1300万+1300万+1300万',
            isCore: 1
          },
          {
            name: '屏幕尺寸',
            value: '6.5英寸',
            isCore: 1
          },
          {
            name: '机身厚度',
            value: '7.7毫米',
            isCore: 1
          },
          {
            name: '机身内存',
            value: '128GB',
            isCore: 1
          },
          {
            name: '品牌',
            value: '小米',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '型号',
            value: 'Redmi8A',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '入网许可证',
            value: '02-B324-193001',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '型号',
            value: 'Redmi8A',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '入网许可证',
            value: '02-B324-193001',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '型号',
            value: 'Redmi8A',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '入网许可证',
            value: '02-B324-193001',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '型号',
            value: 'Redmi8A',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '入网许可证',
            value: '02-B324-193001',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '型号',
            value: 'Redmi8A',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '入网许可证',
            value: '02-B324-193001',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '型号',
            value: 'Redmi8A',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '入网许可证',
            value: '02-B324-193001',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '型号',
            value: 'Redmi8A',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '入网许可证',
            value: '02-B324-193001',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '型号',
            value: 'Redmi8A',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '入网许可证',
            value: '02-B324-193001',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '型号',
            value: 'Redmi8A',
            isCore: 0,
            paramCategory: '主体'
          },
          {
            name: '入网许可证',
            value: '02-B324-193001',
            isCore: 0,
            paramCategory: '主体'
          },
        ]
      }
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({backToHome: this._backToHome});
  }

  _backToHome = () => {
    this.props.navigation.navigate('Home')
  };

  onDetailOptionItemClick = (option) => {
    this.setState({
      selectedDetailOption: option
    })
  };
  showSpecLayer = () => {
    this.refs.specLayer.show(this.state.product.spuParams);
  };
  showSkuLayer = () => {
    this.refs.skuLayer.show(this.state.product.spuParams);
  };

  activeDetailOption = (option) => {
    const b = this.state.selectedDetailOption === option;
    return b ? styles.detailOptionItemActivated : ''
  };

  render() {
    return (
        <View style={styles.container}>
          {/* 规格浮层 */}
          <SpecLayer
              spuParams={this.state.product.spuParams}
              ref="specLayer"/>

          {/*  SKU浮层  */}
          <SkuLayer
              spuParams={this.state.product.spuParams}
              ref="skuLayer"/>

          <ScrollView style={styles.productScrollView}>
            <Image
                style={styles.productImage}
                source={require('@res/images/detail/productImg.jpg')}
            />
            <View style={styles.productDescWrap}>
              <View>
                <Text style={styles.mainTitle}>Redmi 8A</Text>
                <Text style={styles.subTitle}>全曲面轻薄设计，全息幻彩玻璃机身 / 骁龙855旗舰处理器 / 20W无线闪充，标配27W有线快充 / 索尼4800万超广角微距三摄 /
                  极速屏下指纹解锁 / 多功能NFC</Text>
                <Text style={styles.price}>¥2699
                  <Text style={styles.oldPrice}> ¥3200</Text>
                </Text>
              </View>
            </View>
            <Separator/>
            {/* 规格参数 */}
            <TouchableOpacity activeOpacity={1}
                              onPress={this.showSpecLayer}>
              <View
                  onPress={this.showSpecLayer}
                  style={styles.componentWrap}>
                <Text style={styles.componentTitle}>规格</Text>
                <View style={styles.componentContent}>
                  <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      style={styles.paramScrollView}>
                    {
                      this.state.product.spuParams
                          .filter(item => item.isCore == 1)
                          .map((item, idx) =>
                              (<View style={styles.paramItem} key={idx}>
                                <Text numberOfLines={1}
                                      ellipsizeMode={'tail'}
                                      style={styles.paramItemValue}>{item.value}</Text>
                                <Text style={styles.paramItemName}>{item.name}</Text>
                              </View>)
                          )
                    }
                  </ScrollView>
                </View>
                <Image
                    style={styles.rightArrow}
                    source={require('@res/images/detail/right.png')}
                />
              </View>
            </TouchableOpacity>
            <Separator/>

            <TouchableOpacity activeOpacity={1}
                              onPress={this.showSkuLayer}>
              <View style={styles.componentWrap}>
                <Text style={styles.componentTitle}>已选</Text>
                <View style={styles.componentContent}>
                  <Text style={styles.componentText}>
                    蓝色星夜 Reno3 12GB+128GB 1件
                  </Text>
                </View>
                <Image
                    style={styles.rightArrow}
                    source={require('@res/images/detail/right.png')}
                />
              </View>
            </TouchableOpacity>
            {/*<Separator height={1}/>*/}
            {/*<View style={styles.componentWrap}>*/}
            {/*  <Text style={styles.componentTitle}>送至</Text>*/}
            {/*  <View style={styles.componentContent}>*/}
            {/*    <Text style={styles.componentText}>*/}
            {/*      广东省广州市*/}
            {/*    </Text>*/}
            {/*  </View>*/}
            {/*  <Image*/}
            {/*      style={styles.rightArrow}*/}
            {/*      source={require('@res/images/detail/right.png')}*/}
            {/*  />*/}
            {/*</View>*/}
            {/*<Separator height={1}/>*/}
            {/*<View style={styles.componentWrap}>*/}
            {/*  <Text style={styles.componentTitle}>运费</Text>*/}
            {/*  <View style={styles.componentContent}>*/}
            {/*    <Text style={styles.componentText}>*/}
            {/*      免基础运费（60.00KG内）*/}
            {/*    </Text>*/}
            {/*  </View>*/}
            {/*  <Image*/}
            {/*      style={styles.rightArrow}*/}
            {/*      source={require('@res/images/detail/right.png')}*/}
            {/*  />*/}
            {/*</View>*/}
            <Separator/>
            <View style={styles.detailOptions}>
              <Text onPress={this.onDetailOptionItemClick.bind(this, 'detail')}
                    style={[styles.detailOptionItem, this.activeDetailOption('detail')]}>图文详情</Text>
              <Text onPress={this.onDetailOptionItemClick.bind(this, 'params')}
                    style={[styles.detailOptionItem, this.activeDetailOption('params')]}>规格参数</Text>
            </View>
            {/* 商品详情 */}
            <View style={styles.detailContent}>
              <HTML html={this.state.product.detail}/>
            </View>
          </ScrollView>

          {/* 操作栏 */}
          <BottomActionBar/>
        </View>
    );
  }
}