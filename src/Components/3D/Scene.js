import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
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
        const controls = new OrbitControls(camera, renderer.domElement);


        // Initialiser la source de lumière 
        const light = new THREE.AmbientLight(0xffffff, 1.2);
        scene.add(light);

        // Ajouter un objet à la scène TerreNight
        const geometry = new THREE.SphereGeometry(1.8, 64, 64);
        const loader = new THREE.TextureLoader();
        loader.load('./assets/stars.jpg', function (texture) {
            scene.background = texture;
        });
        let texture = loader.load('./assets/nightmap.jpg');


        // Ajout du timer jour/nuit
        const date = new Date();
        const hour = date.getHours();

        if (hour >= 6 && hour < 18) {
            texture = loader.load('./assets/daymap.jpg');
        } else {
            texture = loader.load('./assets/nightmap.jpg');
        }

        const material = new THREE.MeshPhongMaterial({
            shininess: 100,
            reflectivity: 0.5,
            map: texture,
            bumpMap: texture,
            bumpScale: 0.1,
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);





        // Ajouter un objet à la scène Nuages

        const cloudGeometry = new THREE.SphereGeometry(1.81, 64, 64);
        const cloudTexture = loader.load('./assets/clouds.jpg');
        const cloudMaterial = new THREE.MeshLambertMaterial({
            map: cloudTexture,
            transparent: true,
            opacity: 0.4,
        });
        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
        scene.add(cloud);


        // Ajouter la lune à la scène
        const moonGeometry = new THREE.SphereGeometry(0.3, 64, 64);
        const moonTexture = loader.load('./assets/moon.jpg');
        const moonMaterial = new THREE.MeshPhongMaterial({
            map: moonTexture
        });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);

        // Définir la distance entre la Terre et la Lune
        const moonOrbitRadius = 4;

        // Initialiser la position de la lune
        moon.position.x = moonOrbitRadius;

        // Ajouter la lune à la scène
        scene.add(moon);

        camera.position.z = 7;


        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            if (isRotating) {
                sphere.rotation.x += 0.00;
                sphere.rotation.y += 0.0015;
                cloud.rotation.x += 0.00;
                cloud.rotation.y += 0.003;
                moon.rotation.x += 0.00;
                moon.rotation.y += 0.003;

                // Ajouter la rotation de la lune autour de la Terre
                const time = Date.now() * 0.0001;
                moon.position.x = moonOrbitRadius * Math.cos(time);
                moon.position.z = moonOrbitRadius * Math.sin(time);
            }

            renderer.render(scene, camera);
        };

        animate();
    }, [isRotating]);





    return (

        <div className='canva'>

            <canvas ref={sceneContainer} />
            <div >
                <button className="buttonScene">Explore</button>
            </div>
        </div>


    );
};

export default Scene;
