import React, { useEffect, useState } from 'react';

import { TileLayer, Marker, Popup, Map } from 'react-leaflet';

import api from '../../services/api';

const zoom = 15;

interface ILocal {
  lat: number;
  lng: number;
}

const LeafletMap: React.FC = () => {
  const [local, setLocal] = useState<ILocal>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    api.get('User').then((response) => {
      setLocal(response.data.latLngLocalJob);
    });
  }, []);

  return (
    <Map
      center={[local.lat, local.lng]}
      zoom={zoom}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[local.lat, local.lng]}>
        <Popup>Estamos aqui!!</Popup>
      </Marker>
    </Map>
  );
};

export default LeafletMap;
