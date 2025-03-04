"use client";

import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Icon, Style } from "ol/style";

const ReachUsMap = () => {
  const mapRef = useRef(null);
  const collegeCoords = [75.9597, 27.1769]; // Corrected the order of coordinates

  useEffect(() => {
    const marker = new Feature({
      geometry: new Point(fromLonLat(collegeCoords)),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          src: "/img/amity_logo.png",
          scale: 0.035, // Reduced the scale of the icon to make the marker smaller
        }),
      })
    );

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        new VectorLayer({ source: new VectorSource({ features: [marker] }) }),
      ],
      view: new View({
        center: fromLonLat(collegeCoords),
        zoom: 15,
        maxZoom: 15,
        minZoom: 15,
      }),
    });

    return () => map.setTarget(null);
  }, []);

  return (
    <section className="bg-purple-400 p-4 h-fit pt-[5rem]">
      <div
        ref={mapRef}
        style={{ width: "100%", height: "400px" }}
        className="rounded-md overflow-hidden"
      />
    </section>
  );
};

export default ReachUsMap;
