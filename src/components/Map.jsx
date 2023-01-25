import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "./map.css";
import "maplibre-gl/dist/maplibre-gl.css";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-73.91040197831518);
  const [lat] = useState(-38.37256734909374);
  const [zoom] = useState(8);
  const [API_KEY] = useState("wAtQQA0l3nloTXg0tPCX");
  
  useEffect(() => {
    const getPoints = async (url) => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => res.features.map((item, i) => item.geometry.coordinates))
        .then((res, i) => {
          res.map((item) => {
            new maplibregl.Marker({ color: "#000" })
            .setLngLat([item[0], item[1]])
            .setPopup(new maplibregl.Popup().setText("Punto en la isla"))
            .addTo(map.current);
          })

        })
    };

    const points = getPoints(
      `https://api.maptiler.com/data/fe508ab5-f355-4db0-9e4d-77bfe4cf0b80/features.json?key=${API_KEY}`
    );

    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
      pitch: 85,
      bearing: 90,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
  }, []);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
