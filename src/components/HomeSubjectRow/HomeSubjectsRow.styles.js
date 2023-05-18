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
  modalContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    // alignSelf: 'flex-end',
  },

});