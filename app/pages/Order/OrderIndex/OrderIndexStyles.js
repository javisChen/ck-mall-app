import {StyleSheet, Dimensions} from "react-native";
import CommonStyles from "@common/CommonStyles.js";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eaeaea',
  },

  oi_tab: {
    height: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  oi_tabItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '100%',
  },

  oi_tabItemActived: {
    color: CommonStyles.themeColor
// borderWidth: 1,
    // borderColor: 'red'
  },

  oi_tabItemText: {
    fontSize: 13,
    // borderWidth: 1,
  },

  oi_order: {
    // backgroundColor: 'red'
  },

  oi_orderItem: {
    margin: 10,
    marginBottom: 5,
    flex: 9,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
    // height: 40,
  },

  oi_orderItemHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    // borderWidth: 1,
  },
  oi_orderId: {
    fontSize: 13,
  },
  oi_dustbinWrapper: {
    position: 'absolute',
    right: 0,
    width: 15,
    height: 15,
  },
  oi_dustbin: {
    width: 15,
    height: 15,
  },
  oi_orderItemContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    width: '100%'
  },
  oi_orderItemPic: {
    width: 70,
    height: 70,
    flex: 2,
  },
  oi_orderItemDesc: {
    flex: 7,
    marginLeft: 10
  },
  oi_orderItemExpense: {
    position: 'absolute',
    right: 0,
    fontSize: 11
  },
  oi_expenseText: {
    fontWeight: '600',
    fontSize: 16,
  },
  oi_orderItemButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  oi_orderItemButton: {
    borderRadius: 10,
    borderWidth: .3,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 10
  },
  oi_buttonText: {
    fontSize: 12
  }
});