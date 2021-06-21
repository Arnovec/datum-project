import React, { useEffect } from 'react';
import 'ol/ol.css';
import './style/DTPMap.css'
import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';

export default function DTPMap() {

    const map = new Map({
        layers: [
            new TileLayer({
                source: new OSM(),
            })],
        view: new View({
            center: [0, 0],
            zoom: 2,
        })
    });
    
    useEffect(() => {
        map.setTarget("map");
    })

    return (
        <div id="map">
        </div>
    );
}