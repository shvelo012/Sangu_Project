import { StyleSheet } from 'react-native';
import { colors } from '../../../colors/colors';

export const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 30,
  },
  subjectInfoResultView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  subjectInfoResult: {
    fontSize: 14,
    color: colors.red,
    fontWeight: 'bold',
  },
});
