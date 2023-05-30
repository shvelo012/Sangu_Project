import { StyleSheet } from "react-native";
import { colors } from '../../colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor:'red',
  },
  textSubject: {
    paddingVertical:52,
    flex: 1,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  iconStyle: {
    height: 25,
    width: 25,
    marginLeft: 10,
  },
  textScore: {
    flex: 1,
    color: colors.red,
    textAlign: 'center',
    fontWeight: 'bold',
    // backgroundColor:'red'
  },


  // modal Styles -------------

  modalContainer: {
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 85 + "%",
    fontSize: 12,
    marginTop:20,
  },
  modalHeader: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  closeButton: {
    // borderWidth:1,
    alignSelf:"center",
    width: 25,
    height: 25,
  },
  modalElements: {
    // alignContent: 'flex-start',
    // alignItems: 'flex-start',
    // backgroundColor:'green',
    margin: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  HomeScrollStyle:{
    width:'95%',
    borderRadius:10,
    marginBottom:20,
    marginTop:10,
  },

  scoreContainer: {
    width:'95%',
    marginTop: 20,
    margin: 20,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent:"center",
    alignSelf:"center",

  },
  modalName: {
    width:150,
    // backgroundColor:'red',
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    justifyContent:"center",
    alignSelf:"center",
    flexWrap:"wrap",
    marginTop: 10,
  },

  modalScore: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
  },
});
