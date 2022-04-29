import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';

import {colors, categories} from '../../../../assets/data/foodAppData';

import {styles} from './RenderCategoriesStyle';
export default function RenderCategories({
  categoryIdSelected,
  setCategoryIdSelected,
}) {
  const renderCategories = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setCategoryIdSelected(item.id)}>
        <View
          style={[
            styles.container,
            categoryIdSelected === item.id
              ? {
                  backgroundColor: colors.primary,
                }
              : {
                  backgroundColor: colors.backgroundColor,
                },
          ]}>
          <View style={styles.container_category}>
            <View style={styles.container_image}>
              <Image
                style={styles.container_image__content}
                source={item.icon}
              />
            </View>
            <Text
              style={[
                styles.container__text,
                categoryIdSelected === item.id
                  ? {
                      color: colors.backgroundColor,
                    }
                  : {
                      color: colors.textColor,
                    },
              ]}>
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderCategories}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
