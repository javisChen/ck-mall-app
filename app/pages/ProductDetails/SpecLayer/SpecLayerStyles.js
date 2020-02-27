import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  group: {
    flex: 1,
    flexDirection: 'column',
    borderBottomColor: 'rgba(186,186,186,0.54)',
    borderBottomWidth: .4,
    marginBottom: 10,
    paddingBottom: 5,
  },
  groupName: {
    fontSize: 13,
    marginBottom: 5
  },
  groupItem: {
    flex: 3,
    flexDirection: 'row',
    height: 25
  },
  commonParam: {
    color: 'rgba(93,93,93,0.54)',
    fontSize: 13,
    lineHeight: 25
  },
  paramName: {
    flex: 3,
  },
  paramValue: {
    flex: 7,
  }
});