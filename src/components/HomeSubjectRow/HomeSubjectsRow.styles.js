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
  },
  closeButton: {
    // alignSelf: 'flex-end',
  },
  modalElements: {
    // alignContent: 'flex-start',
    // alignItems: 'flex-start',
    margin: 3,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  scoreContainer: {
    flex: 1,
    columnGap: 10,

  },
  modalName: {
    // margin: 'auto',
    // flex: 0.5,
    // alignContent: 'flex-start',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  modalScore: {
    // marginLeft: 3,
    alignSelf: 'flex-end',
  }

});