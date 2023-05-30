import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection: 'column',
  },
  containerItems: {
    width:'100%',
    paddingVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text:{
    width: '75%',
    color: 'black',
    fontSize: 26,
    marginLeft:20,
    fontWeight: 'bold',
  },
  profile: {
    borderBottomWidth: 0.5,
  },
  exit: {
    borderTopWidth: 0.5,
  },
  images: {
    marginLeft:20,
    height: 30,
    width: 30,
    marginRight: 10,
  },

});
