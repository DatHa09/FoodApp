import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../../assets/data/foodAppData';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container_address_bar: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: Platform.OS === 'ios' ? 70 : 40,
    marginHorizontal: 20,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10,
  },
  container_address_bar_address: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_address_bar_address__red_pin: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  content: {
    color: colors.black,
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
  },

  container_zoom_in_zoom_out: {
    alignItems: 'flex-end',
    marginRight: 20,
    marginBottom: 60,
  },

  container_zoom: {
    backgroundColor: colors.backgroundColor,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
    elevation: 2,
  },

  zoom_icon: {
    position: 'absolute',
  },

  container_shipper_info: {
    marginHorizontal: 20,
    marginBottom: 40,
    backgroundColor: colors.backgroundColor,
    borderRadius: 20,
    padding: 18,
    elevation: 99,
  },
  container_shipper_info_content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_shipper_info_content__avatar: {
    width: 60,
    height: 60,
    borderRadius: 99,
  },
  container_shipper_info_content_container: {
    flex: 1,
    marginLeft: 5,
  },
  container_shipper_info_content_container_name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_shipper_info_content_container_name_rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  container_contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  btn: {
    alignItems: 'center',
    width: 160,
    padding: 15,
    borderRadius: 10,
  },
  btn_call: {
    backgroundColor: colors.primary,
  },
  btn_message: {
    backgroundColor: colors.secondary_2,
  },

  btn_call__content: {
    color: colors.backgroundColor,
    fontFamily: 'Quicksand-Bold',
  },
  btn_message__content: {
    color: colors.textColor,
    fontFamily: 'Quicksand-Bold',
  },

  text: {
    color: colors.textColor,
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
  },
  text_2: {
    color: colors.secondary,
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 14,
  },

  marginRight10: {
    marginRight: 10,
  },

  marginBottom20: {
    marginBottom: 20,
  },
});
