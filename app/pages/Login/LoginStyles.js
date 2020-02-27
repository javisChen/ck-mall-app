import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    padding: 20
  },
  productScrollView: {
    flex: 1
  },
  headerBtn: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerBtnImage: {
    width: 20,
    height: 20,
    margin: 20
  },
  title: {
    marginTop: 80,
    marginBottom: 40,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
  },
  input: {
    height: 35,
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: 1,
    marginBottom: 25,
  },
  loginBtnWrapper: {
    backgroundColor: 'rgba(255,138,0,0.47)',
    height: 40,
    borderRadius: 5
  },
  loginBtnText: {
    lineHeight: 40,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 15
  }
});