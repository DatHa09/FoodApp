import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../assets/data/foodAppData';
export default function SearchScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.textColor}}>
        SearchScreen
      </Text>
    </View>
  );
}
