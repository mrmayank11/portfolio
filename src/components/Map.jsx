import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-77.1025, -25.7041, 0],
                center: [-1, -3],
                scale: 2500
            }}
        >
            <Geographies
                geography="/features.json"
                fill="#060816"
                stroke="#FFFFFF"
                strokeWidth={1.2}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[77, 29]}
                dx={-70}
                dy={-30}
                connectorProps={{
                    stroke: "#FFFFFF",
                    strokeWidth: 3,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
                    {"Delhi"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default MapChart;
