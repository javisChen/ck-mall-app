import {StyleSheet, Dimensions} from "react-native";

const win = Dimensions.get('window').width;

export default StyleSheet.create({
  separator: {
    borderBottomWidth: 10,
    borderColor: 'rgb(245, 245, 245)'
  },
});