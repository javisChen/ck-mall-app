import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  skuHeader: {
    flexDirection: 'row',
    height: 90,
    zIndex: -1
  },
  skuImageWrapper: {
    width: 75,
    height: 75,
  },
  skuImage: {
    flex: 2,
    width: 60,
    height: 60,
  },
  skuDesc: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  skuPrice: {
    color: '#f56600',
    fontWeight: 'bold'
  },
  skuCombine: {
    marginTop: 10
  },
  contentWrapper: {
    flexDirection: 'column',
  },
  contentPartWrapper: {
    flexDirection: 'column',
    marginBottom: 15
  },
  specName: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  specValueWrapper: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  valueItemWrapper: {
    padding: 8,
    backgroundColor: '#e6e6e6',
    marginRight: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  valueItemText: {
    textAlign: 'center',
    fontSize: 11
  },
  valueItemWrapperActivated: {
    borderColor: '#f56600',
    borderWidth: .3
  },
  valueItemTextActivated: {
    color: '#f56600',
  },

  purchaseQuantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  purchaseQuantityTitle: {
    fontSize: 13,
    flex: 7,
    fontWeight: 'bold',
  },
  purchaseQuantityInputWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus: {
    width: 15,
    height: 15,
  },
  plus: {
    width: 15,
    height: 15,
  },
  quantityWrapper: {
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 40,
  },
  quantity: {
    textAlign: 'center'
  },
  actionBar: {
    backgroundColor: '#ff6700',
    height: 40,
    borderRadius: 20
  },
  actionBarText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 15,
    color: '#FFFFFF',
  }
});