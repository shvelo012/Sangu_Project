import { StyleSheet } from "react-native";
import { colors } from "../../colors/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign:"center",
    alignSelf:"center",
    borderBottomWidth: 0.5,
    padding:20,
    paddingLeft:0,
    paddingRight:0,
    marginBottom: 20,
  },
  lastContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.5,
    padding:20,
    paddingLeft:0,
    paddingRight:0,
  },
  textSubject: {
    flex:1,
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    fontWeight: "bold",
    color: "black",
    padding:5,
  },
});
