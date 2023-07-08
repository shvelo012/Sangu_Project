import { StyleSheet } from "react-native";
import { scaled } from "../../../components/theme/scaler";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  topContent: {
    marginTop: scaled(22),
    marginBottom: scaled(28),
    alignSelf: "center",
  },
  nameStyle: {
    fontSize: scaled(26),
    color: 'black',
    fontWeight: 'bold',
  },
  statusStyle: {
    marginTop: scaled(12),
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  infoContentStyle: {
    fontSize: scaled(18),
    fontWeight: "bold",
    color: 'black',
  },
  lastContentStyle: {
  },
  lastElement: {
    marginBottom: 0,
    borderBottomWidth: 0,
  }
});
