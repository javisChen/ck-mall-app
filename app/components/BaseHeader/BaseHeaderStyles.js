import {StyleSheet, Dimensions} from "react-native";
import CommonStyles from "@common/CommonStyles.js";

export default StyleSheet.create({
      linearGradient: {
      },
      wrapper: {
        ...Platform.select({
          ios: {
            paddingTop: 15,
          },
          android: {
            marginTop: 0,
          }
        }),
        height: 55,
        justifyContent: 'center',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerBtn: {
        position: 'absolute',
        left: 5,
        top: 20,
        width: 30,
        height: 30,
        // backgroundColor: '#000000',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red'
        zIndex: 99
      },
      headerBtnImage: {
        width: 20,
        height: 20,
        margin: 20
      },
      title: {
        fontSize: 15,
        color: '#ffffff'
      }
    }
);