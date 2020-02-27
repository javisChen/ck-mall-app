import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: 0,
      },
      android: {
        paddingTop: 0,
      }
    }),
    height: height,
    backgroundColor: '#ffffff',
    flexDirection: 'column'
  },

  header: {
    height: 90,
    backgroundColor: '#f37d0f',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },

  loginWrapper: {
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },

  text: {
    marginLeft: 10,
    color: '#FFFFFF'
  },
  userIcon: {
    width: 45,
    height: 45,
  },
  orderInfoWrapper: {
    height: 120,
  },
  myOrderWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CBCBCB'
  },
  myOrderText: {
    flex: 8,
    marginLeft: 15,
  },
  allOrderText: {
    flex: 2.,
  },
  rightArrow: {
    flex: .6,
    width: 8,
    height: 18,
  },
  orderStatusWrapper: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  orderStatusItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderStatusItemIcon: {
    width: 30,
    height: 30,
  },
  orderStatusItemText: {
    fontSize: 12,
    marginTop: 5,
  },
  list: {
    backgroundColor: 'green'
  }
});