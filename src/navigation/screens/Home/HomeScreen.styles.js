import { StyleSheet } from 'react-native';
import { colors } from '../../../colors/colors';
import { scaled } from '../../../components/theme/scaler';

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
    fontSize: scaled(30),
    fontWeight: 'bold',
    marginTop: scaled(30),
  },
  subjectInfoResultView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    paddingHorizontal: scaled(22),
    paddingVertical: scaled(22),
  },
  subjectInfoResult: {
    fontSize: scaled(18),
    color: colors.red,
    fontWeight: 'bold',
  },
});
