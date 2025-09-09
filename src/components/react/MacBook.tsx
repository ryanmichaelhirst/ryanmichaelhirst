'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

export default function MacBook() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene + Camera + Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Retina crispness
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight,
    );
    renderer.setClearColor(0x000000, 0);
    // Correct color space (modern three)
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(1, 1, 1);
    scene.add(dir);

    // MacBook group
    const group = new THREE.Group();

    // --- Screen (lid)
    const screenGeometry = new THREE.BoxGeometry(1.5, 1, 0.05);
    const screenMaterial = new THREE.MeshLambertMaterial({ color: 0x8a8a8a });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 0.45, 0);
    screen.rotation.x = -Math.PI / 6; // slightly open
    group.add(screen);

    // --- Screen display area (black)
    const displayGeometry = new THREE.PlaneGeometry(1.4, 0.9);
    const displayMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      toneMapped: false,
    });
    const display = new THREE.Mesh(displayGeometry, displayMaterial);
    display.position.set(0, 0.45, 0.03);
    display.rotation.x = -Math.PI / 6;
    group.add(display);

    // --- Vector Cursor logo (crisp at any size)
    const svgLoader = new SVGLoader();
    svgLoader.load('/cursor-logo.svg', (data) => {
      const logoGroup = new THREE.Group();

      for (const path of data.paths) {
        const fillColor = new THREE.Color(path.color);
        const material = new THREE.MeshBasicMaterial({
          color: fillColor,
          side: THREE.DoubleSide,
          depthWrite: false,
          toneMapped: false,
        });

        const shapes = SVGLoader.createShapes(path);
        for (const shape of shapes) {
          const geom = new THREE.ShapeGeometry(shape);
          const mesh = new THREE.Mesh(geom, material);
          logoGroup.add(mesh);
        }

        // Optional: stroke handling (if your SVG uses strokes)
        for (const subPath of path.subPaths) {
          const geom = SVGLoader.pointsToStroke(
            subPath.getPoints(),
            path.userData?.style || {},
          );
          if (geom) {
            const strokeMat = new THREE.MeshBasicMaterial({
              color: fillColor,
              side: THREE.DoubleSide,
              depthWrite: false,
              toneMapped: false,
            });
            const strokeMesh = new THREE.Mesh(geom, strokeMat);
            logoGroup.add(strokeMesh);
          }
        }
      } // Normalize & scale the logo to fit nicely on the display

      const box = new THREE.Box3().setFromObject(logoGroup);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);
      logoGroup.position.sub(center); // center at origin
      // Correct the orientation:
      // Rotate 180 degrees around the X-axis to flip it right-side-up.
      // This corrects the Y-axis inversion from the SVG loader.
      logoGroup.rotation.x = Math.PI; // Now scale the logo

      logoGroup.scale.setScalar(0.01); // Position logo onto the display plane

      logoGroup.position.set(-0.63, 0.54, 0.01); // slight z-offset above display
      logoGroup.rotation.x += -Math.PI / 6; // match screen tilt and add the 180-degree flip
      group.add(logoGroup);
    });

    // --- Base (keyboard deck)
    const baseGeometry = new THREE.BoxGeometry(1.5, 0.1, 1);
    const baseMaterial = new THREE.MeshLambertMaterial({ color: 0x8a8a8a });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.set(0, -0.1, 0);
    group.add(base);

    // --- Trackpad
    const trackpadGeometry = new THREE.PlaneGeometry(0.75, 0.5);
    const trackpadMaterial = new THREE.MeshLambertMaterial({ color: 0x9a9a9a });
    const trackpad = new THREE.Mesh(trackpadGeometry, trackpadMaterial);
    trackpad.position.set(0, -0.095, 0.25);
    trackpad.rotation.x = -Math.PI / 2;
    group.add(trackpad);

    // --- Keyboard area
    const keyboardGeometry = new THREE.PlaneGeometry(1.4, 0.4);
    const keyboardMaterial = new THREE.MeshLambertMaterial({ color: 0x8a8a8a });
    const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
    keyboard.position.set(0, -0.095, -0.25);
    keyboard.rotation.x = -Math.PI / 2;
    group.add(keyboard);

    // Move the whole MacBook model down a touch for visual centering
    group.position.y = -0.3;

    scene.add(group);

    // Animation loop
    let raf = 0;
    const animate = () => {
      group.rotation.y += 0.005; // slow spin
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      if (!mountRef.current) return;
      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);

      // dispose geometry/materials
      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).geometry) {
          (obj as THREE.Mesh).geometry.dispose?.();
        }
        if ((obj as THREE.Mesh).material) {
          const mat = (obj as THREE.Mesh).material as
            | THREE.Material
            | THREE.Material[];
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose?.());
          else mat.dispose?.();
        }
      });

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="h-96 w-96" />;
}
