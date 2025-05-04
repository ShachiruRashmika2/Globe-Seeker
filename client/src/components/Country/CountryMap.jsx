import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = ({ osmLink }) => {
  const [position, setPosition] = useState([0, 0]);
  const [loading, setLoading] = useState(true);

  const relationId = osmLink ? osmLink.split("/").pop() : 378734;

  useEffect(() => {
    const fetchCenterFromOverpass = async () => {
      try {
        const query = `
          [out:json];
          relation(${relationId});
          out center;
        `;
        const response = await fetch(
          "https://overpass-api.de/api/interpreter",
          {
            method: "POST",
            body: query,
          }
        );
        const data = await response.json();

        if (
          data.elements &&
          data.elements.length > 0 &&
          data.elements[0].center
        ) {
          const { lat, lon } = data.elements[0].center;
          setPosition([lat, lon]);
        } else {
          console.warn("Center not found in Overpass response.");
        }
      } catch (error) {
        console.error("Overpass API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCenterFromOverpass();
    console.log("relationId", osmLink ? osmLink : relationId);
  }, [osmLink, position]);

  if (loading) return <Typography>Loading map...</Typography>;

  return (
    <Box
      className="glassy2"
      sx={{
        p: 2,
        borderRadius: 2,
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "white",
        boxSizing: "border-box",
      }}
    >
      <MapContainer
        center={position}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "80vh", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            View this relation on <br />
            <a href={osmLink} target="_blank" rel="noopener noreferrer">
              OpenStreetMap
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapComponent;
