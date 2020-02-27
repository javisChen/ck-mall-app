import {StyleSheet} from "react-native";

export default StyleSheet.create({
  bottomActionBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  // 下方操作栏样式
  addToCartBtnWrap: {
    flex: 5,
    color: '#000000',
  },
  addToCartBtn: {
    height: 50,
    backgroundColor: '#ff6700',
  },
  addToCartBtnText: {
    color: '#ffffff',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 15
  },
  commonAction: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  commonActionIcon: {
    width: 18,
    height: 18
  },
  commonActionText: {
    marginTop: 3,
    fontSize: 11,
    color: '#323232'
  },
});