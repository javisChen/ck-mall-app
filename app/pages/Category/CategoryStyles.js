import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
  },
  content: {
    flexDirection: 'row',
    flex: 9,
  },
  leftWrapper: {
    flex: 2.6,
    flexDirection: 'column',
    borderRightColor: '#f8f8f8',
    borderRightWidth: 10,
    backgroundColor: '#f3f3f3'
  },
  left: {},
  leftCategoryItem: {
    height: 50,
    justifyContent: 'center',
  },
  leftCategoryItemTextWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftCategoryItemText: {
    fontSize: 12,
    textAlign: 'center',
  },
  rightWrapper: {
    flex: 9,
    // paddingLeft: 20,
    // paddingRight: 10,
    justifyContent: 'center',
    // borderWidth: 1,

  },
  right: {
    flex: 1,
  },
  categoryGroupWrapper: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 5
  },
  categoryNameWrapper: {
    height: 30,
  },
  categoryNameText: {
    lineHeight: 30,
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 5,
  },
  categoryGroupContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },
  rightCategoryItem: {
    width: '33%',
    height: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1
  },
  rightCategoryItemImage: {
    width: 50,
    height: 50
  },
  rightCategoryItemText: {
    fontSize: 12,
  }
});