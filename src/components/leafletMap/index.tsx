import { LatLngTuple } from 'leaflet';
import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

import { MapLocation } from './styles';

const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
const zoom2 = 15;

const LeafletMap: React.FC = () => {
  return (
    <MapLocation center={defaultLatLng} zoom={zoom2}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapLocation>
  );
};

export default LeafletMap;
