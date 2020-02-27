import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column'
  },
  productScrollView: {
    flex: 1
  },
  headerBtn: {
    width: 30,
    height: 30,
    backgroundColor: '#000000',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerBtnImage: {
    width: 20,
    height: 20,
    margin: 20
  },
  productImage: {
    width: width,
    height: 400
  },
  productDescWrap: {
    padding: 15,
    flex: 2,
    backgroundColor: '#ffffff'
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3c3c3c'
  },
  subTitle: {
    marginTop: 5,
    fontSize: 12,
    color: 'rgba(0,0,0,.54)'
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    color: '#FF6700'
  },
  oldPrice: {
    fontSize: 12,
    color: 'rgba(0,0,0,.54)',
    textDecorationLine: 'line-through'
  },
  componentWrap: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ffffff'
  },
  componentTitle: {
    color: 'rgba(0,0,0,.54)',
    fontSize: 12,
    flex: .9,
  },
  componentContent: {
    flex: 10,
  },
  componentText: {
    flex: 10,
    fontSize: 13,
    marginLeft: 25,
  },
  rightArrow: {
    width: 8,
    height: 18,
    marginLeft: 10
  },
  paramScrollView: {
    flexDirection: 'row',
  },
  paramItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderRightColor: 'hsla(0,0%,64%,.8)',
    borderRightWidth: .3,
    width: 95
  },
  paramItemValue: {
    fontSize: 13,
  },

  paramItemName: {
    marginTop: 5,
    fontSize: 10,
    color: 'rgba(0,0,0,.54)',
  },

  detailOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40
  },

  detailOptionItem: {
    flex: 1,
    textAlign: 'center',
    height: 40,
    lineHeight: 40,
    fontSize: 13
  },
  detailOptionItemActivated: {
    color: '#FF6700',
    fontSize: 14
  },
  detailContent: {},
});