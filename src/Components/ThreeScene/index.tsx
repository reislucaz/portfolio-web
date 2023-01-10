import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Model } from './model'


function ThreeScene() {
    return(
        <Canvas camera={{position: [0, 3, 0]}}>
            <ambientLight/>
            <Model/>
        </Canvas>
    )
}

export default ThreeScene


