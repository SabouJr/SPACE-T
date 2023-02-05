import { Stats, OrbitControls } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { TextureLoader } from 'three';
import sun from "./systemSolaire/sun.jpg";
import mercury from "./systemSolaire/mercury.jpg";
import venus from "./systemSolaire/venus.jpg";
import daymap from "./systemSolaire/daymap.jpg";
import mars from "./systemSolaire/mars.jpg";
import jupiter from "./systemSolaire/jupiter.jpg";
import saturn from "./systemSolaire/saturn.jpg";
import uranus from "./systemSolaire/uranus.jpg";
import neptune from "./systemSolaire/neptune.jpg";
import ring from "./systemSolaire/ring.png";
import stars from "./stars.jpg"
import './Scene.css'

const Sun = () => {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <sphereBufferGeometry args={[13.9, 32, 32]} />
            <meshBasicMaterial map={new TextureLoader().load(sun)} />
        </mesh>
    );
};

const Planet = (props) => {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.position.x = props.distance * Math.sin(state.clock.getElapsedTime() / props.period);
        meshRef.current.position.z = props.distance * Math.cos(state.clock.getElapsedTime() / props.period);
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <sphereBufferGeometry />
            <meshBasicMaterial map={props.texture} />
        </mesh>
    );
};
const Ring = (props) => {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.position.x = 20 * Math.sin(state.clock.getElapsedTime() / 7);
        meshRef.current.position.z = 20 * Math.cos(state.clock.getElapsedTime() / 7);
    });

    return (
        <mesh ref={meshRef} rotation-x={Math.PI * 0.5} rotation-y={Math.PI * 0.009}>
            <torusBufferGeometry args={[0.9, 0.1, 2]} />
            <meshBasicMaterial map={new TextureLoader().load(ring)} />
        </mesh>
    );
};

const SolarSystem = () => {
    const [selected, setSelected] = useState(null);
    const planets = [
        {
            name: "Mercury",
            distance: 30,
            period: 2,
            texture: new TextureLoader().load(mercury),
            size: 0.04
        },
        {
            name: "Venus",
            distance: 70,
            period: 3,
            texture: new TextureLoader().load(venus),
            size: 0.12
        },
        {
            name: "Earth",
            distance: 100,
            period: 4,
            texture: new TextureLoader().load(daymap),
            size: 0.12
        },
        {
            name: "Mars",
            distance: 150,
            period: 5,
            texture: new TextureLoader().load(mars),
            size: 0.06
        },
        {
            name: "Jupiter",
            distance: 500,
            period: 6,
            texture: new TextureLoader().load(jupiter),
            size: 1.39
        },
        {
            name: "Saturn",
            distance: 900,
            period: 7,
            texture: new TextureLoader().load(saturn),
            size: 1.66
        },
        {
            name: "Uranus",
            distance: 1900,
            period: 8,
            texture: new TextureLoader().load(uranus),
            size: 0.05
        },
        {
            name: "Neptune",
            distance: 3000,
            period: 9,
            texture: new TextureLoader().load(neptune),
            size: 0.04
        },
    ];
    const handlePlanetClick = (planet) => {
        setSelected(planet);
    };


    return (
        <Canvas>
            <Stats />
            <Sun />
            {planets.map(planet => (
                <Planet
                    distance={planet.distance}
                    period={planet.period}
                    texture={planet.texture}
                    args={[planet.size, 32, 32]}
                    onClick={() => handlePlanetClick(planet)}
                />
            ))}
            <OrbitControls position={[0, 0, 30]} />
        </Canvas>
    );
};

export default SolarSystem;
