import { StyleSheet } from "react-native";
import { colors } from '../../../colors/colors'
import { scaled } from "../../../components/theme/scaler";

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scaled(50),
    marginTop: scaled(22),
  },
  header: {
    fontSize: scaled(28),
    color: 'black',
    fontWeight: 'bold',
  },
  listContainer: {
    borderRadius: 6,
    borderWidth: 1,
    margin: scaled(6),
  },
  dayOfWeek: {
    fontSize: scaled(20),
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },

  subjectTimeRoomView: {
    flexDirection: "row",
    justifyContent: 'space-around',
    width: '100%',
  },
  subjectTimeRoom: {
    marginTop: scaled(22),
    marginBottom: scaled(22),
    color: colors.red,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    borderBottomWidth: 0.5,
  },
  tableContainer: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  wholeContainer: {
    backgroundColor: colors.white,
  }
});
