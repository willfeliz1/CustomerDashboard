import React from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

import { EmojiEmotionsOutlined } from '@material-ui/icons';
import { MapLocation } from './styles';

const defaultLatLng: LatLngTuple = [-23.7599142, -53.3032763];
const zoom = 15;

const LeafletMap: React.FC = () => {
  return (
    <MapLocation center={defaultLatLng} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultLatLng}>
        <Popup>Estamos aqui!!</Popup>
      </Marker>
    </MapLocation>
  );
};

export default LeafletMap;
