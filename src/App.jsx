import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Three from './component/Three'

function App() {
 
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
