import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    // height: 15 + '%',
    // height: 30 + '%',
  },

  textSubject: {
    fontWeight: 'bold',
    width: 45 + '%',
    color: 'black',
  },
  timeSubject:{
    fontWeight:"bold",
    width:20 + '%',
    color:'black',
  },
  roomSubject:{
    fontWeight:'bold',
    width:20 + '%',
    color: 'black',
    justifyContent:"center",
    alignContent: 'center',
  },

})
