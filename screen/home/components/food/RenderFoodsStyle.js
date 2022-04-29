import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../assets/data/foodAppData';
const textSize = 18;
const restaurantName = 28;
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: colors.primary,
    alignItems: 'center',
  },
  container: {
    width: Math.round(Dimensions.get('window').width) - 25,
    // elevation: 100,
  },
  image: {
    width: Math.round(Dimensions.get('window').width) - 25,
    height: 180,
    borderRadius: 30,
  },
  duration: {
    position: 'absolute',
    backgroundColor: colors.backgroundColor,
    padding: 15,
    left: 0,
    bottom: 0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    color: colors.textColor,
    fontWeight: 'bold',
    fontSize: textSize,
  },

  info: {
    marginTop: 10,
    marginBottom: 20,
    
  },
  info_restaurant_name: {
    marginBottom: 8,
    fontSize: restaurantName,
    color: colors.textColor,
    fontWeight: 'bold',
  },
  info_categories: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info_categories__content: {
    fontSize: 18,
    color: colors.textColor,
    fontWeight: 'bold',
  },
  marginRight10: {
    marginRight: 10,
  },
  marginRight15: {
    marginRight: 15,
  },
});
