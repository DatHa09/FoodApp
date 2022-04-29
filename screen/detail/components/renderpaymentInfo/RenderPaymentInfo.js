import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {styles} from './RenderPaymentInfoStyle';
import {colors} from '../../../../assets/data/foodAppData';
export default function RenderPaymentInfo({route, count, onPressOrderButton}) {
  const renderPaymentInfo = () => {
    return (
      <View style={styles.root}>
        {/* quantity and price */}
        <View style={styles.container_qty_price}>
          <Text style={styles.container_qty_price__content}>
            {count} Items in Cart
          </Text>
          <View style={styles.container_qty_price_total}>
            <Text
              style={[
                styles.container_qty_price__content,
                styles.container_qty_price__size,
              ]}>
              ${Math.round(count * route.params.food.price * 100) / 100}
            </Text>
          </View>
        </View>

        {/* address and payment method*/}
        <View style={styles.container_address}>
          {/* address */}
          <View style={styles.container_address_container_address}>
            <FontAwesomeIcon
              icon={faLocationDot}
              size={20}
              color={colors.secondary}
              style={styles.marginRight10}
            />
            <Text style={styles.container_address_container_address__content}>
              745 Lincoln PI
            </Text>
          </View>

          {/* payment */}
          <View style={styles.container_payment}>
            <Image
              source={require('../../../../assets/icons/paymentMethod/mastercard.png')}
              style={[styles.container_payment__image, styles.marginRight10]}
            />
            <FontAwesomeIcon
              icon={faCircle}
              size={5}
              style={styles.marginRight2}
            />
            <FontAwesomeIcon
              icon={faCircle}
              size={5}
              style={styles.marginRight2}
            />
            <FontAwesomeIcon
              icon={faCircle}
              size={5}
              style={styles.marginRight2}
            />
            <FontAwesomeIcon
              icon={faCircle}
              size={5}
              style={styles.marginRight5}
            />
            <Text style={styles.container_payment__content}>5491</Text>
          </View>
        </View>

        {/* button order */}
        <TouchableOpacity
          style={styles.container_order}
          onPress={onPressOrderButton}>
          <Text style={styles.container_order__content}>Order</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return renderPaymentInfo();
}
