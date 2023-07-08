import { StyleSheet } from "react-native";
import { colors } from '../../../colors/colors';
import { scaled } from "../../../components/theme/scaler";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: scaled(24),
    flex: 1,
  },
  header: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    color: '#111111',
    textAlign: 'center',
    fontSize: scaled(38),
    marginBottom: scaled(48),

  },
  textInput: {
    backgroundColor: 'rgba(249, 249, 249, 0.8)',
    padding: scaled(10),
    borderWidth: 1.3,
    borderColor: '#EEEEEE',
    borderRadius: 5,
    transform: [{ rotate: '0.3deg' }],
    height: scaled(40),
    marginBottom: scaled(38),
    marginTop: scaled(12),
  },
  btnContainer: {
    alignItems: 'center',
    backgroundColor: colors.red,
    height: scaled(44),
    padding: scaled(10),
    borderRadius: scaled(8),
    marginTop: scaled(14),
  },

  txt: {
    marginStart: scaled(6),
    color: '#111111',
    textDecorationColor: 'black',

  },
  forgoTxt: {
    marginStart: scaled(6),
    textAlign: 'left',
    color: colors.red,
  },
  buttonText: {
    color: '#FFFFFF',
    width: scaled(80),
    height: scaled(26),
    fontFamily: 'Helvetica',
    fontSize: scaled(18),
    lineHeight: scaled(24),
    fontWeight: 'bold',
  }
});
