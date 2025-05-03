
import { useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { useParams } from 'react-router-dom';
import * as THREE from 'three';

const CloudGlobe = ({size}) => {
  const globeEl = useRef();

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const defaultSize = 500; 
  const currentSize = isXs ? size.xs : defaultSize;
   
  useEffect(() => {
    const globe = globeEl.current;

    if (!globe) return;

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;
    globe.controls().enableZoom = false;

    // Add clouds
    const CLOUDS_IMG_URL = '/clouds.png'; // Place this in your public folder
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.009;

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      // Animate clouds
      const animate = () => {
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(animate);
      };
      animate();
    });
  }, []);

  return (
   
    <Globe
      ref={globeEl}
      animateIn={false}
      globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0, 0, 0, 0)"
        width={currentSize}
        height={currentSize}
    />
  );
};

export default CloudGlobe;
