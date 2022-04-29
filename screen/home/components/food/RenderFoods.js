import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SectionList,
  FlatList,
} from 'react-native';
import React from 'react';

import {
  categories,
  foodsData,
  colors,
} from '../../../../assets/data/foodAppData';

import {styles} from './RenderFoodsStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faCircle} from '@fortawesome/free-solid-svg-icons';

export default function RenderFoods({categoryIdSelected, onPressFoods}) {
  const data = [...foodsData];

  const renderFoods = () => {
    return data.map((food, foodIndex) => {
      if (categoryIdSelected === food.categories) {
        return (
          <TouchableOpacity key={food.id} onPress={() => onPressFoods(food)}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={food.photo}
                resizeMode="cover"
              />
              <Text style={styles.duration}>{food.durations}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.info_restaurant_name}>{food.name}</Text>
              <View style={styles.info_categories}>
                <FontAwesomeIcon
                  icon={faStar}
                  size={22}
                  color={colors.primary}
                  style={[styles.marginRight10]}
                />
                <Text
                  style={[
                    styles.info_categories__content,
                    styles.marginRight15,
                  ]}>
                  {food.rating}
                </Text>
                {/* food tag */}
                {categories.map((item, index) => {
                  if (food.categories === item.id) {
                    return (
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}
                        key={`${item.name}-${index+1}`}>
                        <Text
                          style={[
                            styles.info_categories__content,
                            styles.marginRight15,
                          ]}>
                          {item.name}
                        </Text>
                        <FontAwesomeIcon
                          icon={faCircle}
                          size={5}
                          style={styles.marginRight15}
                          color={colors.secondary}
                        />
                      </View>
                    );
                  }
                })}
                <Text style={[styles.info_categories__content]}>$</Text>
                <Text
                  style={[
                    styles.info_categories__content,
                    {color: colors.secondary},
                  ]}>
                  $$
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }
    });
  };

  return <View style={styles.root}>{renderFoods()}</View>;
}
