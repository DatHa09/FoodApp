import {View, Text} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './home/HomeScreen';
import FavoriteScreen from './favorite/FavoriteScreen';
import SearchScreen from './search/SearchScreen';
import ProfileScreen from './profile/ProfileScreen';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUtensils,
  faMagnifyingGlass,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {
  colors,
  homeName,
  favoriteName,
  searchName,
  profileName,
} from '../assets/data/foodAppData';

const Tab = createBottomTabNavigator();

export default function HomeScreenBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let routeName = route.name;
          if (routeName === homeName) {
            iconName = faUtensils;
          }
          if (routeName === searchName) {
            iconName = faMagnifyingGlass;
          }
          if (routeName === favoriteName) {
            iconName = faHeart;
          }
          if (routeName === profileName) {
            iconName = faUser;
          }
          return <FontAwesomeIcon icon={iconName} color={color} size={size} />;
        },

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        // tabBarLabelStyle: {paddingBottom: 10, fontSize: 15},
        tabBarStyle: {height: 70},
      })}>
      <Tab.Screen
        name={homeName}
        options={{tabBarShowLabel: false, headerShown: false}}
        component={HomeScreen}
      />
      <Tab.Screen
        name={searchName}
        options={{tabBarShowLabel: false, headerShown: false}}
        component={SearchScreen}
      />
      <Tab.Screen
        name={favoriteName}
        options={{tabBarShowLabel: false, headerShown: false}}
        component={FavoriteScreen}
      />
      <Tab.Screen
        name={profileName}
        options={{tabBarShowLabel: false, headerShown: false}}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
