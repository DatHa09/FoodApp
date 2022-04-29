import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import MapView from 'react-native-maps';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus, faStar} from '@fortawesome/free-solid-svg-icons';
import {styles} from './style/MapScreenStyle';

import {colors} from '../../assets/data/foodAppData';

export default function MapScreen({route}) {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const onRegionChangeComplete = region => {
    setRegion(region);
  };
  console.log(region);
  return (
    <View style={styles.root}>
      {/* address bar */}
      <View style={styles.container_address_bar}>
        {/* address */}
        <View style={styles.container_address_bar_address}>
          <Image
            style={styles.container_address_bar_address__red_pin}
            source={require('../../assets/icons/location/red-pin.png')}
          />
          <Text style={styles.content}>745 Lincoln PI, New York</Text>
        </View>

        {/* duration */}
        <Text style={styles.content}>7 mins</Text>
      </View>

      <View>
        {/* zoom in, zoom out*/}
        <View style={styles.container_zoom_in_zoom_out}>
          <TouchableOpacity
            style={[styles.container_zoom, styles.marginBottom20]}>
            <FontAwesomeIcon icon={faPlus} size={24} style={styles.zoom_icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.container_zoom}>
            <FontAwesomeIcon
              icon={faMinus}
              size={24}
              style={styles.zoom_icon}
            />
          </TouchableOpacity>
        </View>

        {/* shipper info */}
        <View style={styles.container_shipper_info}>
          {/* content */}
          <View style={styles.container_shipper_info_content}>
            {/* avatar */}
            <Image
              style={[
                styles.marginRight10,
                styles.container_shipper_info_content__avatar,
              ]}
              source={require('../../assets/images/avatar-5.jpg')}
            />
            {/* info */}
            <View style={styles.container_shipper_info_content_container}>
              {/* shipper name, restaurant rating */}
              <View
                style={styles.container_shipper_info_content_container_name}>
                <Text style={styles.text}>Bruce Evans</Text>
                <View
                  style={
                    styles.container_shipper_info_content_container_name_rating
                  }>
                  {/* rating icon */}
                  <FontAwesomeIcon
                    icon={faStar}
                    size={22}
                    color={colors.primary}
                    style={[styles.marginRight10]}
                  />
                  <Text style={styles.text}>{route.params.rating}</Text>
                </View>
              </View>
              {/* restaurantName */}
              <Text style={styles.text_2}>{route.params.foodName}</Text>
            </View>
          </View>

          {/* button */}
          <View style={styles.container_contact}>
            <TouchableOpacity
              style={[styles.marginRight10, styles.btn, styles.btn_call]}>
              <Text style={styles.btn_call__content}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.marginRight10, styles.btn, styles.btn_message]}>
              <Text style={styles.btn_message__content}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <MapView
        region={region}
        onRegionChangeComplete={onRegionChangeComplete}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
    </View>
  );
}
