import {colors} from '../../../assets/data/foodAppData';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.lightGray4,
  },

  container_title: {
    
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,

  },
  container_title__content: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 30,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'left'
  },
});
