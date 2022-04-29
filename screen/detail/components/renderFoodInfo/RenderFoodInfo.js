import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus, faCircle} from '@fortawesome/free-solid-svg-icons';
import {styles} from './RenderFoodInfoStyle';
import {colors} from '../../../../assets/data/foodAppData';
export default function RenderFoodInfo({
  route,
  count,
  onPressMinus,
  onPressPlus,
}) {
  const renderFoodInfo = () => {
    return (
      <View style={styles.root}>
        {/* photo */}
        <View style={styles.container_photo}>
          <Image
            source={route.params.food.photo}
            style={styles.container_photo__image}
            resizeMode="contain"
          />
          <View style={styles.container_photo_container_qty}>
            <TouchableOpacity
              onPress={onPressMinus}
              disabled={count === 1 ? true : false}
              style={styles.container_photo_container_qty__minus}>
              <FontAwesomeIcon
                icon={faMinus}
                size={24}
                color={count === 1 ? colors.secondary : colors.textColor}
              />
            </TouchableOpacity>
            <Text style={styles.container_photo_container_qty__count}>
              {count}
            </Text>
            <TouchableOpacity
              onPress={onPressPlus}
              disabled={count === route.params.food.qty ? true : false}>
              <FontAwesomeIcon
                icon={faPlus}
                size={24}
                color={
                  count === route.params.food.qty
                    ? colors.secondary
                    : colors.textColor
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* info */}
        <View style={styles.container_info}>
          {/* title and price */}
          <View style={styles.container_info_title}>
            <Text
              style={[styles.container_info_title__content, {marginRight: 5}]}>
              {route.params.food.name}
            </Text>
            <Text style={styles.container_info_title__content}>
              ${route.params.food.price}
            </Text>
          </View>
          {/* description */}
          <Text style={styles.container_info__descriptions}>
            {route.params.food.description}
          </Text>
        </View>

        {/* calories */}
        <View style={styles.container_calories}>
          <Image
            source={require('../../../../assets/icons/calorie/fire.png')}
            style={styles.container_calories__image}
            resizeMode="cover"
          />
          <Text style={styles.container_calories__calories}>
            {route.params.food.calories} cal
          </Text>
        </View>

        {/* slideShow */}
        <View style={styles.container_slide_show}>
          <FontAwesomeIcon
            icon={faCircle}
            size={5}
            color={colors.secondary}
            style={styles.marginRight10}
          />
          <FontAwesomeIcon
            icon={faCircle}
            size={10}
            color={colors.primary}
            style={styles.marginRight10}
          />
          <FontAwesomeIcon
            icon={faCircle}
            size={5}
            color={colors.secondary}
            style={styles.marginRight10}
          />
          <FontAwesomeIcon icon={faCircle} size={5} color={colors.secondary} />
        </View>
      </View>
    );
  };

  return renderFoodInfo();
}
