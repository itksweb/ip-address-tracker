import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map2 = ({marker}) => {
    // console.log(`${lat} and ${lng}`)
    const marked =
      marker &&
      marker.length === 2 &&
      !marker.includes(null) &&
      !marker.includes("") &&
      !marker.includes(undefined);
    useEffect(() =>{

    },[])
  const mapRef = useRef(null);
  return (
    <div
      id="map"
      className="h-[65vh] max-md:h-[60vh] w-full bg-amber-100 m-0"
    >
      {marked ? <MapContainer
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
        <Marker position={marker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>:<></>}
    </div>
  );
};

export default Map2;
