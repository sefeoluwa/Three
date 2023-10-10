/* eslint-disable react/no-unknown-property */
const Three = () => {
  return (
    <>

    <mesh>
      <sphereGeometry args={[1, 32, 32]}/>
      <meshStandardMaterial color='#ffffff' />
    </mesh>

    <ambientLight args={[`#f2f2f2` , 1]} />
    </>
  )
}


export default Three