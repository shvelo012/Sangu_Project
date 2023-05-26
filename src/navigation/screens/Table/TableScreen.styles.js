import { StyleSheet } from "react-native";

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
    justifyContent: 'space-between',
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

  subjectTimeRoomView:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
  subjectTimeRoom:{
    marginTop: 20,
    fontSize:14,
    color:'#E74646',
    fontWeight:'bold'
  },
});
