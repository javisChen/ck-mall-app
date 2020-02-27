import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({

  layerWrapper: {
    position: 'absolute',
    height: height,
    width: width,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1
  },

  contentWrapper: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    width: width,
    minHeight: 100,
    maxHeight: height / 1.3,
    flex: 1,
    flexDirection: 'column',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    zIndex: -1,
    borderWidth: 1
  },

  title: {
    flex: 9,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeIconWrapper: {
    position: 'absolute',
    right: 0,
    width:40,
    height:40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    zIndex: 1
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
});