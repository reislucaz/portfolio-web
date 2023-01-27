import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Model } from './model'
import './index.css';


function ThreeScene() {
    return(
        <Canvas id="canvas-three" camera={{position: [0.2, 0.1, 0]}}>
            <pointLight />
            <Model />
        </Canvas>
    )
}

export default ThreeScene


