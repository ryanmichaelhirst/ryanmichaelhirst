'use client'; // if in Next.js, not needed in Remix
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function RotatingCube() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current!.clientWidth / mountRef.current!.clientHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(
      mountRef.current!.clientWidth,
      mountRef.current!.clientHeight,
    );
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    mountRef.current!.appendChild(renderer.domElement);

    // Add lighting for the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Load TypeScript logo texture
    const textureLoader = new THREE.TextureLoader();
    const typescriptTexture = textureLoader.load('/typescript-logo.svg');
    const effectTexture = textureLoader.load('/effectjs-logo.svg');
    const nodejsTexture = textureLoader.load('/nodejs-logo.svg');
    const postgresTexture = textureLoader.load('/postgres-logo.svg');
    const reactTexture = textureLoader.load('/react-logo.svg');
    const tailwindTexture = textureLoader.load('/tailwind-logo.svg');

    // Configure textures for high quality
    [
      typescriptTexture,
      effectTexture,
      nodejsTexture,
      postgresTexture,
      reactTexture,
    ].forEach((texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    });

    // Create materials for different faces
    const typescriptMaterial = new THREE.MeshBasicMaterial({
      map: typescriptTexture,
      transparent: true,
      opacity: 0.9,
    });
    const effectMaterial = new THREE.MeshBasicMaterial({
      map: effectTexture,
      transparent: true,
      opacity: 0.9,
    });
    const nodejsMaterial = new THREE.MeshBasicMaterial({
      map: nodejsTexture,
      transparent: true,
      opacity: 0.9,
    });
    const postgresMaterial = new THREE.MeshBasicMaterial({
      map: postgresTexture,
      transparent: true,
      opacity: 0.9,
    });
    const tailwindMaterial = new THREE.MeshBasicMaterial({
      map: tailwindTexture,
      transparent: true,
      color: 0xffffff, // Pure white background
    });
    const reactMaterial = new THREE.MeshBasicMaterial({
      map: reactTexture,
      transparent: true,
      opacity: 0.9,
    });

    // Create cube with different materials for each face
    const geometry = new THREE.BoxGeometry();
    const materials = [
      nodejsMaterial, // Right face (Node.js logo)
      postgresMaterial, // Left face (PostgreSQL logo)
      effectMaterial, // Top face (Effect logo)
      tailwindMaterial, // Bottom face (Tailwind logo)
      typescriptMaterial, // Front face (TypeScript logo)
      reactMaterial, // Back face (React logo)
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    camera.position.z = 3;

    // Animate
    const animate = () => {
      cube.rotation.x += 0.007; // Slower rotation
      cube.rotation.y += 0.003; // Even slower rotation for y-axis
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect =
        mountRef.current!.clientWidth / mountRef.current!.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current!.clientWidth,
        mountRef.current!.clientHeight,
      );
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current!.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-96 h-96" />;
}
