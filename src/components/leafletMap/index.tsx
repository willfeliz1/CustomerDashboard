import React, { useEffect, useState } from 'react';

import { TileLayer, Marker, Popup, Map } from 'react-leaflet';

import databaseMock from '../../database/databaseMock.json';

const zoom = 15;

interface ILocal {
  lat: number;
  lng: number;
}

const LeafletMap: React.FC = () => {
  const [local, setLocal] = useState<ILocal>({ lat: 0, lng: 0 });

  useEffect(() => {
    setLocal(databaseMock.User.latLngLocalJob);
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
