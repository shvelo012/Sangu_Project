import { StyleSheet } from 'react-native';
import { scaled } from '../../../components/theme/scaler';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  containerItems: {
    width: '100%',
    paddingVertical: scaled(42),
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    width: '75%',
    color: 'black',
    fontSize: scaled(28),
    marginLeft: scaled(22),
    fontWeight: 'bold',
  },
  profile: {
    borderBottomWidth: 0.5,
  },
  exit: {
    borderTopWidth: 0.5,
    paddingBottom: 0,
    marginBottom: scaled(20),
  },
  images: {
    marginLeft: scaled(22),
    height: scaled(34),
    width: scaled(34),
    marginRight: scaled(12),
  },

});
