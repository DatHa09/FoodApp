import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faStreetView,
  faBasketShopping,
  faArrowLeft,
  faListUl,
} from '@fortawesome/free-solid-svg-icons';

import {styles} from './RenderAppBarStyle';
import {
  homeName,
  detailName,
  cartName,
  mapName,
} from '../../../../assets/data/foodAppData';
export default function RenderAppBar({screenName, navigation}) {
  const onPressCart = () => {
    navigation.navigate(cartName);
  };
  const renderAppBar = () => {
    switch (screenName) {
      case homeName:
        return (
          <View style={styles.container_appBar}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faStreetView} size={26} />
            </TouchableOpacity>
            <View style={styles.appBar_text}>
              <Text style={styles.appBar_text__content}>745 Lincoln PI</Text>
            </View>
            <TouchableOpacity onPress={onPressCart}>
              <FontAwesomeIcon icon={faBasketShopping} size={26} />
            </TouchableOpacity>
          </View>
        );
      case detailName:
        return (
          <View style={styles.container_appBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faArrowLeft} size={26} />
            </TouchableOpacity>
            <View style={styles.appBar_text}>
              <Text style={styles.appBar_text__content}>745 Lincoln PI</Text>
            </View>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faListUl} size={26} />
            </TouchableOpacity>
          </View>
        );
    }
  };
  return renderAppBar();
}
