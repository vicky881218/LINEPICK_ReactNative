import { StatusBar, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#c8d3c5',
    flex: 1,
  },
  // flexDirection: 'column',
  //#FFFCC
  container1: {
    backgroundColor: '#c8d3c5',
    flex: 1,
  },
  container2: {
    backgroundColor: '#f9e7d2',
    flex: 1,
    flexDirection: 'row',
  },
  block: {
    backgroundColor: '#FFFFFF',
  },
  homecontainer: {
    backgroundColor: '#FFFCEC',
    flex: 10,
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 0, //若無值則||or 0(置頂)
  },
  baseText: {
    color: '#6b7f94',
    fontWeight: "bold",
  },
  baseText1: {
    color: '#6b7f94',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1
    //#c5b8a5
  },
  linePick: {
    color: '#77773c',
    fontWeight: 'bold',
    fontSize: 20,
  },
  drawerText: {
    flex: 1,
    color: '#6b7f94',
    fontSize: 18,
    justifyContent: "center",
  },
  innerText: {
    color: '#6b7f94',
    fontSize: 15,
  },
  borderStyle: {
    borderColor: '#6b7f94',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 10,
  },
  tipStyle: {
    borderStyle: 'solid',
    borderColor: '#6b7f94',
    borderWidth: 2,
    borderBottomWidth: 0,
    margin: 10,
  },
  signupborder: {
    borderColor: '#b5c4b1',
    borderWidth: 4,
    borderRadius: 10,
    flexDirection: 'column',
    padding: 20,
    width: 325,
    position: 'absolute',
  },
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#6b7f94',
    borderRadius: 9,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
    //#c5b8a5
  },
  multibuttons: {
    margin: 10,
    padding: 5,
    backgroundColor: '#6b7f94',
    margin: 20,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#6b7f94',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  whitebutton: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#6b7f94',
    borderWidth: 2,
    margin: 10,
  },
  buttonText1: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonTextAE: {
    color: '#6b7f94',
    fontSize: 15,
    fontWeight: 'bold',
  },
  addbutton: {
    color: '#6b7f94',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#AE8F00',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center'
    //#c5b8a5
  },
  addbuttonText: {
    color: '#AE8F00',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,

  },
  // borderColor: '#6b7f94',
  ProductUpload: {
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderStyle: 'dashed',
    marginHorizontal: 150,
    backgroundColor: '#FFFFFF',
    //#c5b8a5
    marginHorizontal: 8,
  },
  uploadarea1: {
    borderColor: '#6b7f94',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 8,
  },
  frame: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginHorizontal: 8,

  },
  icon: {
    color: '#2C384A',
    fontSize: 28,
  },
  textarea: {
    borderColor: '#6b7f94',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    //#c5b8a5
  },
  appbartitle: {
    backgroundColor: '#EAC100',
  },
  orderscheckStyle: {
    borderStyle: 'solid',
    borderColor: '#6b7f94',
    borderWidth: 2,
    borderBottomWidth: 0,
    marginLeft: 15,
    marginVertical: 20,
    backgroundColor: '#FFFFFF'
    //#c5b8a5
  },
  signuptextarea: {
    padding: 8,
    marginBottom: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6b7f94',
    height: 40,
    borderRadius: 10,
    margin: 10,
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    marginTop: StatusBar.currentHeight || 0,
  },
  inputStyle: {
    width: 150,
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  underLine: {
    textDecorationLine: 'underline',
    color: '#AE8F00',
  }
})
export default styles;