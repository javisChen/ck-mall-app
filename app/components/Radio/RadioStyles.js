import {StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 9
  },

  radioWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },

  radioButton: {
    width: 30,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioImage: {
    width : 18,
    height : 18,
  },

  childContent: {
    marginRight: 20,
    width: '85%',
    justifyContent: 'center',
  },
});