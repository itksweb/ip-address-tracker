import { useRef } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//This is my first time developing with leafletjs and react-leaflet
// so almost everything here (below) is new to me

const MyMap = ({ marker, loc }) => {

  const customIcon = new L.Icon({
    iconUrl: "/assets/images/icon-location.svg",
    iconSize: [35, 46],
    iconAnchor: [17, 46],
  });
  const marked =
    marker &&
    marker.length === 2 &&
    !marker.includes(null) &&
    !marker.includes("") &&
    !marker.includes(undefined);
    
  
  const mapRef = useRef(null);
  return (
    <div id="map" className="h-[65vh] max-md:h-[60vh] w-full bg-amber-100 m-0">
      {marked ? (
        <MapContainer
          center={marker}
          zoom={13}
          scrollWheelZoom={false}
          ref={mapRef}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={marker} icon={customIcon}>
            <Popup>{`${loc.city}, ${loc.region}, ${loc.country}`}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyMap;
