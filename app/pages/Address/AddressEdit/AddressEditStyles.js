import {StyleSheet, Dimensions} from "react-native";
import CommonStyles from "@common/CommonStyles.js";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eaeaea',
  },

  ae_addressInfo: {
    margin: 10,
    marginBottom: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  ae_addressInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgb(245, 245, 245)',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  ae_addressInfoItemLabel: {
    flex: 2
  },
  ae_addressInfoItemInput: {
    flex: 8,
    // borderColor: 'rgb(245, 245, 245)',
    // borderWidth: 1,
    height: 40
  },

  ae_noBottomBorder: {
    borderBottomWidth: 0
  },

  ae_bottom: {
    position: 'absolute',
    bottom: 10,
    marginRight: 10,
    // height: 40,
    justifyContent: 'center',
    width: '100%',
  },
  ae_bottomButton: {},
  ae_bottomButtonLinearGradient: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 50,
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ae_bottomButtonText: {
    color: '#FFFFFF',
  },
});