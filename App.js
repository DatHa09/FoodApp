import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreenBottomTab from './screen/HomeScreenBottomTab';
import CartScreen from './screen/cart/CartScreen';
import DetailScreen from './screen/detail/DetailScreen';
import MapScreen from './screen/map/MapScreen';

import {
  homeBottomTabName,
  detailName,
  mapName,
  cartName,
  colors,
} from './assets/data/foodAppData';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} />
      <Stack.Navigator>
        <Stack.Screen
          name={homeBottomTabName}
          options={{headerShown: false}}
          component={HomeScreenBottomTab}
        />
        <Stack.Screen
          name={detailName}
          component={DetailScreen}
          options={({route}) => ({
            // title: route.params.food.name,
            headerShown: false,
          })}
        />
        <Stack.Screen
          name={mapName}
          options={{headerShown: false}}
          component={MapScreen}
        />
        <Stack.Screen
          name={cartName}
          options={{title: 'Cart'}}
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
