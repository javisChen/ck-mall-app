import {StyleSheet, Dimensions} from "react-native";
import CommonStyles from "@common/CommonStyles.js";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eaeaea',
  },

  shippingAddress: {
    margin: 10,
    marginBottom: 5,
    flex: 9,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },

  shippingAddressText: {
    color: '#7a7a7a'
  },

  shippingAddressRightArrow: {
    position: 'absolute',
    right: 10,
    width: 8,
    height: 18,
  },

  content: {
    margin: 10,
    marginBottom: 5,
    flex: 9,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  productItemWrapper: {
    padding: 10
    // borderWidth: 1,
    // borderBottomWidth: 10,
    // borderBottomColor: '#eaeaea'
  },
  productImageWrapper: {
    borderRadius: 10,
    flexDirection: 'row'
  },
  productImage: {
    width: 65,
    height: 65,
    borderRadius: 10
  },
  productInfo: {
    marginLeft: 10,
    width: "75%",
    flexDirection: 'column',
    justifyContent: 'center',
  },
  productDesc: {
    fontSize: 12,
  },
  productPrice: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: CommonStyles.themeColor
  },
  productQuantity: {
    fontSize: 11,
    color: '#000000'
  },
  costInfo: {
    margin: 10,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  costInfoItem: {
    flex: 1,
    fontSize: 12,
    width: '100%',
    height: 25,
    justifyContent: 'center'
  },
  costInfoItemKeyWrapper: {
    position: 'absolute',
    left: 10
  },
  costInfoItemKey: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  costInfoItemValueWrapper: {
    position: 'absolute',
    right: 10
  },
  costInfoItemValue: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  costInfoItemValueText: {
    color: CommonStyles.themeColor
  },
  costInfoItemText: {
    fontSize: 12
  },
  cartBottomActionBar: {
    height: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  },
  cartBottomActionBarLeft: {
    position: 'absolute',
    left: 0,
  },
  cartBottomActionBarRight: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  amount: {
    fontSize: 14,
    color: CommonStyles.themeColor,
    fontWeight: 'bold'
  },
  settleButton: {
    marginLeft: 10,
    marginRight: 5,
    width: 100,
    borderRadius: 20
  },
  settleButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    height: 40,
    lineHeight: 40,
    borderRadius: 20
  },
});