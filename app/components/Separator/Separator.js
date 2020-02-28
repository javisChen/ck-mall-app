import React, {Component} from 'react';
import {
  View,
  Text
} from "react-native";
import PropTypes from 'prop-types';

/**
 * 分隔线
 */
class Separator extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  showText = () => {
    if (this.state.text) {
      return <Text>{this.state.text}</Text>
    }
  };

  render() {
    return (
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: this.props.height,
            backgroundColor: this.props.color
          }}>
            {
              this.showText()
            }
          </View>
        </View>
    );
  }
}


Separator.propTypes = {
  height: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string
};

Separator.defaultProps = {
  height: 10,
  text: '',
  color: 'rgb(245, 245, 245)'
};

export default Separator