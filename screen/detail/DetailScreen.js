import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles/DetailScreenStyle';
import {detailName, mapName} from '../../assets/data/foodAppData';

import RenderAppBar from '../home/components/appBar/RenderAppBar';
import RenderFoodInfo from './components/renderFoodInfo/RenderFoodInfo';
import RenderPaymentInfo from './components/renderpaymentInfo/RenderPaymentInfo';
export default function DetailScreen({navigation, route}) {
  const [count, setCount] = useState(1);

  const onPressMinus = () => {
    if (count <= 1) {
      return setCount(1);
    } else {
      return setCount(count - 1);
    }
  };

  const onPressPlus = () => {
    if (count >= route.params.food.qty) {
      return setCount(count);
    } else {
      return setCount(count + 1);
    }
  };

  const onPressOrderButton = () => {
    navigation.navigate(mapName, {
      foodName: route.params.food.name,
      rating: route.params.food.rating,
    });
  };

  return (
    <View style={styles.root}>
      <RenderAppBar
        screenName={detailName}
        navigation={navigation}
      />
      {/* {renderFoodInfo()} */}
      <RenderFoodInfo
        navigation={navigation}
        route={route}
        count={count}
        onPressMinus={onPressMinus}
        onPressPlus={onPressPlus}
      />
      {/* {renderPaymentInfo()} */}
      <RenderPaymentInfo
        navigation={navigation}
        route={route}
        count={count}
        onPressOrderButton={onPressOrderButton}
      />
    </View>
  );
}
