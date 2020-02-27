import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Animated,
  ScrollView
} from "react-native";

import styles from "./SpecLayerStyles";
import CommonUtils from "@utils/commonUtils";
import BaseLayer from "@components/BaseLayer/BaseLayer";

class SpecLayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
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
        <BaseLayer ref="baseLayer" title={'商品详情'}>
          <ScrollView style={{zIndex: -1}}>
            {
              Object.keys(formatParams).map((name, idx) => {
                return (
                    <View style={styles.group} key={idx}>
                      <Text style={styles.groupName}>{name}</Text>
                      {
                        formatParams[name].map((item, childIdx) =>
                            (
                                <View style={styles.groupItem} key={childIdx}>
                                  <Text style={[styles.commonParam, styles.paramName]}>{item.name}</Text>
                                  <Text style={[styles.commonParam, styles.paramValue]}>{item.value}</Text>
                                </View>
                            )
                        )
                      }
                    </View>
                )
              })
            }
          </ScrollView>
        </BaseLayer>
    );
  }
}

SpecLayer.propTypes = {
  spuParams: PropTypes.array.isRequired
};

SpecLayer.defaultProps = {
  spuParams: []
};

export default SpecLayer;
