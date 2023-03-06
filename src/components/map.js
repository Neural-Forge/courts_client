import { useState } from "react";
import "leaflet/dist/leaflet.css";

import Leaflet from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function Map() {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [zoom, setZoom] = useState(13);

  return (
    <div className="maps">
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        //   style={{ width: "100%", height: "60vh" }}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
