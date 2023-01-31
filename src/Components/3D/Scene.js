import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { NavLink } from 'react-router-dom';
import './Scene.css';


const Scene = () => {
    const sceneContainer = useRef(null);
    const [isRotating, setIsRotating] = useState(true);

    useEffect(() => {
        // Initialiser la scène Three.js
        const width = sceneContainer.current.clientWidth;
        const height = sceneContainer.current.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: sceneContainer.current });
        renderer.setSize(window.innerWidth, window.innerHeight);
        scene.background = new THREE.Color('#21191A');
        const controls = new OrbitControls(camera, renderer.domElement);
        // controls.autoRotate = isRotating;

        // Initialiser la source de lumière 
        const light = new THREE.AmbientLight(0xffffff, 1.2);
        scene.add(light);

        // Ajouter un objet à la scène
        const geometry = new THREE.SphereGeometry(1.8, 64, 64);
        const loader = new THREE.TextureLoader();
        const texture = loader.load('./assets/nightmap.jpg');
        const material = new THREE.MeshPhongMaterial({
            shininess: 100,
            reflectivity: 0.5,
            map: texture,
            bumpMap: texture,
            bumpScale: 0.1,
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);

            if (isRotating) {
                sphere.rotation.x += 0.00;
                sphere.rotation.y += 0.002;
            }

            renderer.render(scene, camera);
        };

        animate();
    }, [isRotating]);

    const handleMouseDown = () => {
        setIsRotating(false);

    };

    const handleMouseUp = () => {
        setIsRotating(true);

    };

    return (

        <div className='canva'>
            <div className="button">
                <button className='button'> <NavLink to={'/'}></NavLink>Explore</button>
            </div>
            <canvas ref={sceneContainer} />
        </div>


    );
};

export default Scene;
