import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView
} from "react-native";

import styles from "./SkuLayerStyles";
import CommonUtils from "@utils/commonUtils";
import BaseLayer from "@components/BaseLayer/BaseLayer";

class SkuLayer extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  show = () => {
    this.refs.baseLayer.show()
  };

  hide = () => {
    this.refs.baseLayer.hide()
  };

  render() {
    const formatParams = CommonUtils.groupBy(this.props.spuParams, 'paramCategory')
    return (
        <BaseLayer ref="baseLayer">
          <View style={styles.skuHeader}>
            <View style={styles.skuImageWrapper}>
              <Image
                  style={styles.skuImage}
                  source={require('@res/images/phone.jpg')}
              />
            </View>
            <View style={styles.skuDesc}>
              <Text style={styles.skuPrice}>¥ 1899</Text>
              <Text style={styles.skuCombine}>Redmi K30 8GB+128GB 深海微光</Text>
            </View>
          </View>
          <ScrollView style={{zIndex: -1}}>
            <View stlye={styles.contentWrapper}>
              <View style={styles.contentPartWrapper}>
                <Text style={styles.specName}>版本</Text>
                <View style={styles.specValueWrapper}>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={[styles.valueItemWrapper]}>
                    <Text style={[styles.valueItemText, styles.valueItemTextActivated]}>6GB+64GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>6GB+128GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>8GB+128GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>12GB+256GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>12GB+256GB</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.contentPartWrapper}>
                <Text style={styles.specName}>版本</Text>
                <View style={styles.specValueWrapper}>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>6GB+64GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>6GB+128GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>8GB+128GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>12GB+256GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>12GB+256GB</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.contentPartWrapper}>
                <Text style={styles.specName}>版本</Text>
                <View style={styles.specValueWrapper}>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>6GB+64GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>6GB+128GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>8GB+128GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>12GB+256GB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      activeOpacity={1}
                      style={styles.valueItemWrapper}>
                    <Text style={styles.valueItemText}>12GB+256GB</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.purchaseQuantityWrapper}>
                <Text style={styles.purchaseQuantityTitle}>购买数量</Text>
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
          </ScrollView>
          <View style={styles.actionBar}>
            <TouchableOpacity>
              <Text style={styles.actionBarText}>加入购物车</Text>
            </TouchableOpacity>
          </View>
        </BaseLayer>
    );
  }
}

SkuLayer.propTypes = {
  spuParams: PropTypes.array.isRequired
};

SkuLayer.defaultProps = {
  spuParams: []
};

export default SkuLayer;
