import {StyleSheet, Dimensions} from "react-native";
import CommonStyles from "@common/CommonStyles.js";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eaeaea',
  },

  ai_address: {
    flex: 9,
    margin: 10,
    marginBottom: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 100,
    padding: 10
  },

  ai_addressScrollView: {
    width: '100%'
  },

  shippingAddressRightArrow: {
    position: 'absolute',
    width: 10,
    height: 12,
    right: 10,
  },
  ai_addressItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(245, 245, 245)',
    padding: 10
  },
  ai_addressBasicInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  ai_addressBasicInfoText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  ai_nameText: {},
  ai_PhoneText: {
    marginLeft: 20
  },
  ai_detailedAddress: {
    marginTop: 5
  },
  ai_detailedAddressText: {
    fontSize: 11,
    fontWeight: '300'
  },
  ai_tag: {
    marginLeft: 5,
    backgroundColor: CommonStyles.themeColor,
    padding: 2,
    borderRadius: 2
  },
  ai_tagText: {
    fontSize: 10,
    color: '#ffffff'
  },


  ai_bottom: {
    flex: 1,
    marginRight: 10,
    bottom: 0,
    height: 40,
    justifyContent: 'center',
    width: '100%',
  },
  ai_bottomButton: {
  },
  ai_bottomButtonLinearGradient: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 50,
    height: 40,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center'
  },
  ai_bottomButtonText: {
    color: '#FFFFFF',
  },
});