import {StyleSheet, Dimensions} from "react-native";

const win = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 5,
    ...Platform.select({
      ios:{
        marginTop: 20,
      },
      android:{
        marginTop: 0,
      }
    }),
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerSearchWrap: {
    flex: 9.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 5,
    marginRight: 5,
    marginLeft: 6,
    borderRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 100, height: 200},
    shadowOpacity: 1

  },
  headerSearchIcon: {
    width: 25,
    height: 25
  },
  headerSearchText: {
    color: 'rgba(0,0,0,.3)'
  },
  headerUserWrap: {
    flex: .5,
    marginRight: 6
  },
  headerUser: {
    width: 20,
    height: 20
  },
  content: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  contentBanner: {
    flex: 4,
  },
  contentBannerImage: {
    height: 200,
    width: win
  },
  contentMenu: {
    flex: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuItem: {
    flex: 0,
    padding: 5,
    width: win / 5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  menuItemIcon: {
    width: 50,
    height: 50
  },
  menuItemTitle: {
    fontSize: 12
  },

  contentProducts: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },

  productItem: {
    width: win  / 2,
    ...Platform.select({
      ios:{
        height: 240,
      },
      android:{
        height: 250,
      }
    }),
    flexDirection: 'column',
    alignItems: 'center',
  },

  productItemImg: {
    width: '95%',
    height: 150,
    // marginLeft: 5,
    // marginRight: 5,
  },

  mainTitle: {
    marginTop: 5,
    fontSize: 13
  },

  subTitle: {
    fontSize: 13,
    color: 'rgba(0, 0, 0, .54)'
  },

  price: {
    color: '#ea625b'
  },

  oldPrice: {
    color: 'rgba(0,0,0,.54)',
    textDecorationLine: 'line-through'
  },

  button: {
    width: 100,
    alignItems: 'center',
    backgroundColor: '#ea625b',
    padding: 8,
    borderRadius: 2
  },
});