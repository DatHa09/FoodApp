import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {detailName, homeName} from '../../assets/data/foodAppData';

import RenderAppBar from './components/appBar/RenderAppBar';
import RenderCategories from './components/category/RenderCategories';
import RenderFoods from './components/food/RenderFoods';

import {styles} from './styles/HomeScreenStyle';

export default function HomeScreen({navigation, route}) {
  const [categoryIdSelected, setCategoryIdSelected] = useState(1);
  const onPressFoods = food => {
    navigation.navigate(detailName, {
      food: food,
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <RenderAppBar
          screenName={homeName}
          navigation={navigation}
          route={route}
        />
        {/* {renderAppBar()} */}
        <View style={styles.container_title}>
          <Text style={styles.container_title__content}>Main</Text>
          <Text style={styles.container_title__content}>Categories</Text>
        </View>
        <RenderCategories
          categoryIdSelected={categoryIdSelected}
          setCategoryIdSelected={setCategoryIdSelected}
        />
        <RenderFoods
          categoryIdSelected={categoryIdSelected}
          onPressFoods={onPressFoods}
        />
      </View>
    </ScrollView>
  );
}
