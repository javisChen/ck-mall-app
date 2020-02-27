import {StyleSheet, Dimensions} from "react-native";

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
    color: '#FF6700'
  },
  productOldPrice: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: 'normal',
    color: 'rgba(0,0,0,.54)',
    textDecorationLine: 'line-through'
  },
  purchaseQuantityWrapper: {
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
  purchaseQuantityInputWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus: {
    width: 12,
    height: 12,
  },
  plus: {
    width: 12,
    height: 12,
  },
  quantityWrapper: {
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    padding: 2,
    marginLeft: 2,
    marginRight: 2,
    width: 40,
  },
  quantity: {
    textAlign: 'center'
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
  amountText: {
    fontSize: 12
  },
  amount: {
    fontSize: 14,
    color: '#FF6700',
    fontWeight: 'bold'
  },
  freight: {
    fontSize: 12
  },

  expenseWrapper: {
  },
  settleButton: {
    marginLeft: 5,
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