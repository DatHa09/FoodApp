import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/data/foodAppData';

export const styles = StyleSheet.create({
  root: {
    // flex: 4,
  },
  container_photo: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  container_photo__image: {
    width: 240,
    height: 240,
    borderRadius: 999,
  },
  container_photo_container_qty: {
    position: 'absolute',
    bottom: '-5%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    padding: 10,
    borderRadius: 99,
    elevation: 20,
  },
  container_photo_container_qty__minus: {
    marginRight: 20,
  },
  container_photo_container_qty__count: {
    marginRight: 20,
    color: colors.textColor,
    fontSize: 24,
    fontWeight: 'bold',
  },

  container_info: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },

  container_info_title: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  container_info_title__content: {
    textAlign: 'center',
    color: colors.textColor,
    fontWeight: 'bold',
    fontSize: 24,
  },
  container_info__descriptions: {
    textAlign: 'center',
    color: colors.textColor,
    fontSize: 18,
  },

  container_calories: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  container_calories__image: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  container_calories__calories: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: 'bold',
  },

  container_slide_show: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  marginRight10: {
    marginRight: 10,
  },
});
