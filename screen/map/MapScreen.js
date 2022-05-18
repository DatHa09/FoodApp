import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
} from 'react-native';
import React, {useRef, useEffect} from 'react';

import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import decodePolyline from 'decode-google-map-polyline';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus, faStar} from '@fortawesome/free-solid-svg-icons';

import {styles} from './style/MapScreenStyle';

import {colors} from '../../assets/data/foodAppData';

export default function MapScreen({route}) {
  const distance = 124.8; //KM
  const newDistance = distance / 2;

  const latitude = 10.764909;
  const longitude = 106.6534265;

  const latitudeEnd = 10.767117;
  const longitudeEnd = 106.6507593;

  let latitudeDelta;
  let longitudeDelta;

  const calculateLatNLongDelta = latitude => {
    const circumference = 40075;

    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;

    const angularDistance = newDistance / circumference;

    latitudeDelta = newDistance / oneDegreeOfLatitudeInMeters;
    longitudeDelta = Math.abs(
      Math.atan2(
        Math.sin(angularDistance) * Math.cos(latitude),
        Math.cos(angularDistance) - Math.sin(latitude) * Math.sin(latitude),
      ),
    );
  };

  const mapRef = useRef();

  const iconCar = require('../../assets/icons/location/iconCar.png');

  let points =
    'gou`Aux}iSoAUGCW[iAcBKOaAj@{DdCiCxAiEvB_@VGHMb@?ROV?PNRRFDAj@r@b@h@lBbDjAJf@NLDFg@AGAO?M';

  calculateLatNLongDelta(latitude);
  const coordinator = {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
  };

  calculateLatNLongDelta(latitudeEnd);
  const endCoordinator = {
    latitude: latitudeEnd,
    longitude: longitudeEnd,
    latitudeDelta,
    longitudeDelta,
  };

  useEffect(() => {
    mapRef.current.animateToRegion(coordinator, 1000);
  });

  let newCoord = decodePolyline(points).map((value, index) => ({
    latitude: value.lat,
    longitude: value.lng,
  }));

  const onPressCallButton = () => {
    Linking.openURL(`tel:0774865589`);
  };

  return (
    <View style={styles.root}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        // zoomControlEnabled
        zoomEnabled
        maxZoomLevel={20} //max 20
        minZoomLevel={2}>
        <Polyline coordinates={newCoord} strokeColor={'red'} strokeWidth={3} />

        <Marker coordinate={coordinator}>
          <Image style={{width: 42, height: 42}} source={iconCar} />
        </Marker>
        <Marker coordinate={endCoordinator} />
      </MapView>
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
              onPress={onPressCallButton}
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
    </View>
  );
}
