import React, { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, softShadows, useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EffectComposer, Glitch, Scanline } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'

gsap.registerPlugin(ScrollTrigger)
function Thing({ anim, animSphere }) {
  const { nodes, materials, scene } = useGLTF('/shoes.glb')
  scene.scale.set(5, 5, 5)

  useFrame(() => {
    scene.rotation.y = -1 * anim.y
    // scene.scale.x = -1 * anim.x
    // scene.scale.z = -1 * anim.x
  })
  return <primitive object={scene} />
}

function Effects() {
  return (
    <EffectComposer>
      {/* <Glitch
        delay={[2, 4]}
        duration={[0, 0.6]}
        strength={[0.1, 0.2]}
        mode={GlitchMode.SPORADIC} // try CONSTANT_MILD
        active // toggle on/off
        ratio={0.1}
      />   */}
      <Scanline density={1.0} />
    </EffectComposer>
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
          endTrigger: '.section-seven',
          end: 'bottom bottom',
          scrub: 1
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
    <Canvas shadowMap camera={{ position: [0, 0, 10] }} style={{ zIndex: '-1', backgroundColor: 'gray' }}>
      <ambientLight intensity={0.3} />
      <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
      <Thing anim={animable} animSphere={animableSphere} />
      <Effects />
    </Canvas>
  )
}

export default Canvas3D
