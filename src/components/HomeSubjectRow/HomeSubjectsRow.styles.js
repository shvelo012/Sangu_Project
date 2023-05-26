import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    height: '15%',
    justifyContent: 'space-around',
  },
  textSubject: {
    fontWeight: 'bold',
    color: 'black',
    width: '35%',
    textAlign:'center'
  },
  textInfo: {
    width:'35%',
    fontWeight: 'bold',
    color: 'black',
  },
  textScore: {
    width:'35%',
    color: 'red',
    textAlign: 'center',
  },


  // modal Styles -------------

  modalContainer: {
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",

    // flexDirection: 'column',
  },
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // borderWidth: 1,
    width: 85 + "%",
    height: 7 + "%",
    // fontSize: 12,
  },
  modalHeader: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  closeButton: {
    // borderWidth:1,
    width: 25,
    height: 25,
  },
  modalElements: {
    // alignContent: 'flex-start',
    // alignItems: 'flex-start',
    margin: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  scoreContainer: {
    flex: 1,
    borderWidth: 1,
    width: 90 + "%",
    marginTop: 15,
    margin: 20,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalName: {
    width: 200,
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    // margin: 'auto',
    // flex: 0.5,
    // alignContent: 'flex-start',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },

  modalScore: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
    // marginLeft: 1,
  },
});
