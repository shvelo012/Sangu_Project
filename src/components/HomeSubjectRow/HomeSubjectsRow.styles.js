import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 15 + '%',
  },

  textSubject: {
    fontWeight: 'bold',
    width: 40 + '%',
    color: 'black',

  },
  textInfo: {
    fontWeight: 'bold',
    color: 'black',
  },
  textScore: {
    color: 'red',
  },

  // modal Styles -------------

  modalContainer: {
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    // borderWidth: 1,
    width: 90 + '%',
    // fontSize: 12,
  },
  modalHeader: {
    color: 'white',
    fontSize: 18,
  },
  closeButton: {
    // alignSelf: 'flex-end',
    color: 'red',
    fontSize: 18,
  },
  modalElements: {
    // alignContent: 'flex-start',
    // alignItems: 'flex-start',
    margin: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  scoreContainer: {
    flex: 1,
    borderWidth: 1,
    width: 90 + '%',
    margin: 3,
    padding: 3,
    backgroundColor: 'white',


  },
  modalName: {
    color: 'black',
    // margin: 'auto',
    // flex: 0.5,
    // alignContent: 'flex-start',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  modalScore: {
    color: 'red',
    // marginLeft: 3,
    alignSelf: 'flex-end',
  }

});