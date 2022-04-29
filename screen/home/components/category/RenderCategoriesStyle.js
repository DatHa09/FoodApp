import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/data/foodAppData';
export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  container: {
    borderRadius: 99,
    marginHorizontal: 10,
    marginVertical: 20,
    elevation: 10,
  },
  container_category: {
    padding: 8,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_image: {
    backgroundColor: colors.backgroundColor,
    padding: 15,
    borderRadius: 99,
    marginBottom: 10,
  },
  container_image__content: {
    height: 25,
    width: 25,
  },
  container__text: {
    fontSize: 16,
    color: colors.textColor,
    // fontWeight: 'bold',
  },
});
