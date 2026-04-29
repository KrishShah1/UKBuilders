import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function FitBounds({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords.length >= 2) map.fitBounds(coords, { padding: [40, 40] });
  }, [map]);
  return null;
}

export default function ProjectMap({ projects }) {
  const located = projects.filter((p) => p.lat && p.lng);
  const coords = located.map((p) => [p.lat, p.lng]);

  return (
    <MapContainer
      center={[19.18, 72.848]}
      zoom={12}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={20}
      />
      <FitBounds coords={coords} />
      {located.map((project) => (
        <CircleMarker
          key={`${project.name}-${project.year}`}
          center={[project.lat, project.lng]}
          radius={7}
          pathOptions={{
            fillColor: '#C5A059',
            fillOpacity: 0.9,
            color: '#0B1D3A',
            weight: 1.5,
          }}
        >
          <Popup>
            <div style={{ fontFamily: 'Georgia, serif', minWidth: '140px' }}>
              <div style={{ color: '#0B1D3A', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '13px', marginBottom: '2px' }}>
                {project.name}
              </div>
              <div style={{ color: '#C5A059', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {project.year} &middot; {project.builder}
              </div>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
