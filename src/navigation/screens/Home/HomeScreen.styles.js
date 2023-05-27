import { StyleSheet } from 'react-native';
import { colors } from '../../../colors/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  header: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  listContainer: {
    margin: 10,
    justifyContent: 'space-between',
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
  subjectInfoResultView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign:'center',
    borderBottomWidth: 0.5,
    height: '10%',
  },
  subjectInfoResult: {
    fontSize: 14,
    color: colors.red,
    fontWeight: 'bold',
  },
});
