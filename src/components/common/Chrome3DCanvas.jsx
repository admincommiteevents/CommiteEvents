import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Chrome3DCanvas = ({ className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Three.js Scene Setup
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Geometry & Metallic Material
    // Metallic Torus Ring
    const geometry = new THREE.TorusKnotGeometry(1.1, 0.35, 128, 32);
    
    const material = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      metalness: 0.95,
      roughness: 0.12,
      wireframe: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 3. Lighting Setup (Specular Chrome + Crimson Spotlights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 3.5);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    // Signature Deep Red Ambient Light Source
    const redLight = new THREE.PointLight(0xe50914, 5.0, 10);
    redLight.position.set(-3, -2, 2);
    scene.add(redLight);

    const blueSoftLight = new THREE.PointLight(0x38bdf8, 2.0, 10);
    blueSoftLight.position.set(3, 3, -2);
    scene.add(blueSoftLight);

    // 4. Mouse Parallax Tracker
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Render Loop
    let animationFrameId;
    const animate = () => {
      // Slow continuous rotation
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.008;

      // Smooth mouse parallax lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mesh.rotation.y += mouseX * 0.02;
      mesh.rotation.x += mouseY * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full min-h-[300px] flex items-center justify-center pointer-events-none select-none ${className}`}
    />
  );
};

export default Chrome3DCanvas;
