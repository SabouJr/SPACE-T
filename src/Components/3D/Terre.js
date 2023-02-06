import { TextureLoader } from 'three';
import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import daymap from "./systemSolaire/daymap.jpg";
import moon from "./systemSolaire/moon.jpg";

const Terre = (props) => {
    const meshRef = useRef();
    const moonRef = useRef();
    const [isActive, setIsActive] = useState(false);
    const { position } = props;
    const name = 'Terre';

    useFrame((state) => {
        meshRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 240;
        meshRef.current.position.z = Math.cos(state.clock.getElapsedTime() * 0.1) * 240;
        meshRef.current.rotation.y += 0.001;


        moonRef.current.position.x = meshRef.current.position.x + 8;
        moonRef.current.position.z = meshRef.current.position.z + 8;
        moonRef.current.rotation.y += 0.01;
    });

    return (
        <>
            <mesh ref={meshRef} position={position} onClick={() => setIsActive(!isActive)}>
                <sphereBufferGeometry attach="geometry" args={[1.2, 32, 32]} />
                <meshBasicMaterial
                    attach="material"
                    map={new TextureLoader().load(daymap)}
                />
            </mesh>
            <mesh ref={moonRef}>
                <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
                <meshBasicMaterial
                    attach="material"
                    map={new TextureLoader().load(moon)}
                />
            </mesh>
            {isActive && (
                console.log(name)
            )}
        </>
    );
};
export default Terre;
