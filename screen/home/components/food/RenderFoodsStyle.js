import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../assets/data/foodAppData';
const textSize = 17;
const restaurantName = 23;
export const styles = StyleSheet.create({
  menu: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  menu__img: {
    width: '100%',
    height: 180,
    borderRadius: 30,
  },
  menu__duration: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  menu__duration__text: {
    fontFamily: 'Quicksand-SemiBold',
    color: colors.black,
    fontSize: textSize,
  },
  menu__title: {
    fontFamily: 'Quicksand-Bold',
    color: colors.black,
    marginBottom: 8,
    fontSize: restaurantName,
  },
  menu_type: {
    flexDirection: 'row',
  },
  menu_type__icon: {
    width: 16,
    height: 16,
  },
  menu_type__content: {
    fontFamily: 'Quicksand-Bold',
    color: colors.black,
    fontSize: textSize,
  },
  marginRight8: {
    marginRight: 8,
  },
  marginRight10: {
    marginRight: 10,
  },
  marginRight15: {
    marginRight: 15,
  },
});
