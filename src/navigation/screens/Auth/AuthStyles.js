import { StyleSheet } from "react-native";
import { colors } from '../../../colors/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
  },
  header: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    color: '#111111',
    textAlign: 'center',
    fontSize: 36,
    marginBottom: 48,

  },
  textInput: {
    backgroundColor: 'rgba(249, 249, 249, 0.8)',
    padding: 8,
    borderWidth: 1.3,
    borderColor: '#EEEEEE',
    borderRadius: 5,
    transform: [{ rotate: '0.3deg' }],
    height: 36,
    marginBottom: 36,
    marginTop: 10,
  },
  btnContainer: {
    alignItems: 'center',
    backgroundColor: colors.red,
    height: 40,
    padding: 8,
    borderRadius: 8,
    marginTop: 12,
  },

  txt: {
    marginStart: 4,
    color: '#111111',

  },
  forgoTxt: {
    marginStart: 4,
    textAlign: 'left',
    color: colors.red,
  },
  buttonText: {
    color: '#FFFFFF',
    width: 44,
    height: 18,
    fontFamily: 'Helvetica',
    fontSize: 16,
    lineHeight: 18,
    fontWeight:'bold',
  }
});
