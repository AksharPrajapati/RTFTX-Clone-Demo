import React, { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, softShadows, useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
function Thing({ anim, animSphere }) {
  
  const { nodes, materials, scene } = useGLTF('/shoes.glb')
  scene.scale.set(5,5,5)
  
  useFrame(() => {
    scene.rotation.y = -1 * anim.y
    // scene.scale.x = -1 * anim.x
    // scene.scale.z = -1 * anim.x


  })
  return (
     <primitive object={scene} />
  )
}

function Canvas3D({ mainRef }) {

  let animable = {
    x: -8,
    y: -2
  }
  let animableSphere = {
    y: 0
  }

  useEffect(() => {
    if (mainRef) {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.section-one',
          start: 'top top',
          endTrigger: '.section-four',
          end: 'bottom bottom',
          scrub: 1,
        }
      })
      tl1.to(animable, {
        x: 8,
        y: 3
      })
      // const tl3 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.section-two',
      //     start: 'top top',
      //     endTrigger: '.section-three',
      //     end: 'bottom bottom',
      //     markers: true,
      //     scrub: 1
      //   }
      // })
      // tl3.to(animableSphere, {
      //   y: 3.3
      // })
      // const tl2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.section-three',
      //     start: 'top top',
      //     endTrigger: '.section-four',
      //     end: 'bottom bottom',
      //     markers: true,
      //     scrub: 1
      //   }
      // })
      // tl2.to(animable, {
      //   x: -3
      // })
    }
  }, [mainRef])

  return (
    <Canvas shadowMap camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.3} />
      <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
      <Thing anim={animable} animSphere={animableSphere} />
    </Canvas>
  )
}

export default Canvas3D