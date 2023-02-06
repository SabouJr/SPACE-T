import { TextureLoader } from 'three';
import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import mars from "./systemSolaire/mars.jpg";


const Mars = (props) => {
    const meshRef = useRef();
    const [isActive, setIsActive] = useState(false);
    const { position } = props;
    const name = 'Mars';

    useFrame((state) => {
        meshRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.08) * 260;
        meshRef.current.position.z = Math.cos(state.clock.getElapsedTime() * 0.08) * 260;
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <>
            <mesh ref={meshRef} position={position} onClick={() => setIsActive(!isActive)}>
                <sphereBufferGeometry attach="geometry" args={[0.6, 32, 32]} />
                <meshBasicMaterial
                    attach="material"
                    map={new TextureLoader().load(mars)}
                />
            </mesh>
            {isActive && (
                console.log(name)
            )}
        </>
    );
};
export default Mars;