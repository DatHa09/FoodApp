import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/data/foodAppData';

export const styles = StyleSheet.create({
  root: {
    flex: 2,
    backgroundColor: colors.backgroundColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    width: '100%',
  },
  container_qty_price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container_qty_price__content: {
    color: colors.textColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container_qty_price_total: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_qty_price__size: {
    fontSize: 22,
  },

  container_address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  container_address_container_address: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_address_container_address__content: {
    color: colors.textColor,
    fontSize: 16,
    fontWeight: 'bold',
  },

  container_payment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_payment__image: {
    width: 22,
    height: 22,
  },
  container_payment__content: {
    color: colors.textColor,
    fontSize: 16,
    fontWeight: 'bold',
  },

  container_order: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    // marginBottom: 15
  },
  container_order__content: {
    color: colors.backgroundColor,
    fontSize: 20,
    fontWeight: 'bold',
  },

  marginRight2: {
    marginRight: 2,
  },
  marginRight5: {
    marginRight: 5,
  },
  marginRight10: {
    marginRight: 10,
  },
});
