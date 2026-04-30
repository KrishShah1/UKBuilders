import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function CenterMap({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 16);
  }, [map, lat, lng]);
  return null;
}

export default function ProjectLocationMap({ name, lat, lng }) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={16}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={20}
      />
      <CenterMap lat={lat} lng={lng} />
      <CircleMarker
        center={[lat, lng]}
        radius={10}
        pathOptions={{ fillColor: '#C5A059', fillOpacity: 1, color: '#0B1D3A', weight: 2 }}
      >
        <Popup>
          <span style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#0B1D3A', textTransform: 'uppercase', fontSize: '12px' }}>
            {name}
          </span>
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
}
