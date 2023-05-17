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
    // width: 40 + '%',
  },
  textScore: {
    color: 'red',
    // width: 20 + '%',
  }
});