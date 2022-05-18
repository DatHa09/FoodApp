import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';

import {categories, colors} from '../../../../assets/data/foodAppData';

import {styles} from './RenderFoodsStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faCircle} from '@fortawesome/free-solid-svg-icons';

export default function RenderFoods({data, onPressFoods}) {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.menu} onPress={() => onPressFoods(item)}>
      <View style={{marginBottom: 8}}>
        <Image style={styles.menu__img} source={item.photo} />
        <View style={styles.menu__duration}>
          <Text style={styles.menu__duration__text}>{item.durations}</Text>
        </View>
      </View>
      <Text style={styles.menu__title}>{item.name}</Text>
      <View style={styles.menu_type}>
        <FontAwesomeIcon
          icon={faStar}
          size={22}
          color={colors.primary}
          style={[styles.marginRight10]}
        />
        <Text style={[styles.menu_type__content, styles.marginRight8]}>
          {item.rating}
        </Text>
        {/* food tag */}
        {categories.map((categoryItem, index) => {
          if (item.categories === categoryItem.id) {
            return (
              <View
                style={{flexDirection: 'row', alignItems: 'center'}}
                key={`${categoryItem.name}-${index + 1}`}>
                <Text style={[styles.menu_type__content, styles.marginRight15]}>
                  {categoryItem.name}
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

        <Text style={styles.menu_type__content}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return <FlatList data={data} renderItem={renderItem} />;
}
