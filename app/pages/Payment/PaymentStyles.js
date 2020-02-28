import {StyleSheet, Dimensions} from "react-native";
import CommonStyles from "@common/CommonStyles.js";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eaeaea',
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

  payWay: {
    margin: 10,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
  },

  payWayItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomColor: 'rgb(245, 245, 245)',
    borderBottomWidth: 1,
    height: 50
  },

  amount: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  amountText: {
    color: CommonStyles.themeColor,
    fontSize: 18,
    marginTop: 10
  },

  amountPriceText: {
    fontSize: 28,
    fontWeight: '400'
  },

  payWayIcon: {
    width: 25,
    height: 25,
    marginRight: 10
  },

  payWayText: {
    fontSize: 13
  },

  radioImage: {
    width: 18,
    height: 18,
    position: 'absolute',
    right: 0
  },

  settleButton: {
    width: '100%',
    borderRadius: 20
  },
  settleButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    height: 40,
    lineHeight: 40,
    borderRadius: 20
  },
  cartBottomActionBar: {
    padding: 10,
    height: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  },
});