import { StyleSheet } from "react-native";
import { scaled } from "../theme/scaler";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    alignSelf: "center",
    borderBottomWidth: 0.5,
    padding: scaled(22),
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: scaled(22),
  },
  lastContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.5,
    padding: scaled(20),
    paddingLeft: 0,
    paddingRight: 0,
  },
  textSubject: {
    flex: 1,
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    fontWeight: "bold",
    color: "black",
    padding: scaled(6),
  },
});
