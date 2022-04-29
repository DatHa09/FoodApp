import {colors} from '../../../assets/data/foodAppData';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  container_title: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  container_title__content: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});
