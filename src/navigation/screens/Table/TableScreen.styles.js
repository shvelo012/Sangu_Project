import { StyleSheet } from "react-native";
import {colors} from '../../../colors/colors'

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 20,
  },
  header: {
    fontSize: 26,
    color:'black',
    fontWeight: 'bold',
  },
  listContainer: {
    borderRadius: 6,
    borderWidth: 1,
    margin: 6,
    backgroundColor: 'black',
  },
  dayOfWeek:{
    fontSize:18,
    alignSelf:'center',
    color:'black',
    fontWeight:'bold',
  },

  subjectTimeRoomView: {
    flexDirection: "row",
    justifyContent: 'space-around',
    width:'100%',
  },
  subjectTimeRoom: {
    marginTop: 20,
    marginBottom: 20,
    color: colors.red,
    fontWeight: "bold",
    textAlign:"center",
    flex:1,
    borderBottomWidth:0.5,
  },
  tableContainer:{
    width:'95%',
    borderRadius:5,
    borderWidth:1,
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:colors.white,
  }
});
