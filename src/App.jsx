import { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';


function RecenterMap({ position }) {
  const map = useMap();
  if (position) {
    map.flyTo([position.lat, position.lng], 12, {
  duration: 1.5
});

  }
  return null;
}

function App() {
  const [position, setPosition] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log("Got location:", latitude, longitude);
        setPosition({ lat: latitude, lng: longitude });
      },
      (err) => {
        console.error("Geolocation error:", err);
      }
    );
  };

  return (
    <>
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: "800px", width: "1080px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {position && (
          <>
            <Marker position={[position.lat, position.lng]}>
              <Popup>You are here</Popup>
            </Marker>
            <RecenterMap position={position} />
          </>
        )}
      </MapContainer>



      <button onClick={getLocation}  style={{ padding: '10px 20px', marginTop: '20px' }}>
        Get my Location
      </button>

      {position && (
        <p>Latitude: {position.lat}, Longitude: {position.lng}</p>
      )}
    </>
  );
}

export default App;
