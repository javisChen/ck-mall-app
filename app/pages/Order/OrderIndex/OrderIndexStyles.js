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
    // borderWidth: 1,
    // borderColor: 'red'
  },

  oi_tabItemText: {
    fontSize: 13,
    borderWidth: 1,
  },

  oi_orderItem: {
    margin: 10,
    marginBottom: 5,
    flex: 9,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});