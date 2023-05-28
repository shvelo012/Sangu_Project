import { StyleSheet } from "react-native";
import { colors } from "../../colors/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.5,
    marginBottom: 30,
  },
  lastContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.5,
    marginBottom: 0,
  },
  textSubject: {
    width: "35%",
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "black",

  },
});
