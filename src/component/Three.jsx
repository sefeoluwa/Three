import { PerspectiveCamera } from "@react-three/drei"
import { angleToRadians } from "./angle"

/* eslint-disable react/no-unknown-property */
const Three = () => {

  return (
    <>
    {/* Important for creating dimensions of the 3D element. It's like the eyes of the user or what the user can see. */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]}/>

      {/* defines the shape of the 3d element */}    
      {/* defines the surface of the element */}
    <mesh position={[0, 0.5, 0]}>
      <sphereGeometry args={[0.5, 32, 32]}/>  
      <meshStandardMaterial color='#ffffff' />   
    </mesh>


{/* Defines the background of the 3D element */}
{/* Defines the surface of the background of the 3D element  */}
    <mesh rotation={[-(angleToRadians(90)), 0, 0]}>
      <planeGeometry args={[7, 7]} />
      <meshStandardMaterial color='#1ea3dB'/>
    </mesh>

    {/* Sets lighting on the element */}
    <ambientLight args={["#ffffff" , 1]} />
    </>
  )
}


export default Three