import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Scene = () => {
    const sceneContainer = useRef(null);

    useEffect(() => {
        // Initialiser la scène Three.js
        const width = sceneContainer.current.clientWidth;
        const height = sceneContainer.current.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: sceneContainer.current });
        scene.background = new THREE.Color('#21191A');
        const controls = new OrbitControls(camera, renderer.domElement);

        // Initialiser la source de lumière directionnelle
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        light.target.position.set(0, 0, 0);
        scene.add(light);

        // Ajouter un objet à la scène
        const geometry = new THREE.SphereGeometry(0.6, 32, 32);
        const loader = new THREE.TextureLoader();
        const texture = loader.load('./assets/fullmapb.jpg');
        const material = new THREE.MeshPhongMaterial({
            shininess: 100,
            reflectivity: 0.5,
            map: texture,
            bumpMap: texture,
            bumpScale: 0.3,
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);



        // // Ajouter une texture de nuages
        // const cloudTexture = loader.load('./images.jpg');
        // const cloudMaterial = new THREE.MeshPhongMaterial({
        //     transparent: true,
        //     opacity: 0.5,
        //     map: cloudTexture,
        // });
        // const clouds = new THREE.Mesh(geometry, cloudMaterial);
        // scene.add(clouds);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);

            sphere.rotation.x += 0.00;
            sphere.rotation.y += 0.002;

            renderer.render(scene, camera);
        };

        animate();
    }, []);

    return <canvas style={{ width: '100vw', height: '100vh' }} ref={sceneContainer} />;
};

export default Scene;
