import React, { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, softShadows, useGLTF, useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EffectComposer, Glitch, Scanline } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'
import { SpotLightHelper, Vector3 } from 'three'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)
function Thing({ anim, animSphere }) {
  const { nodes, materials, scene, animations } = useGLTF('/akira.glb')
  // console.log(materials)
  scene.scale.set(13, 13, 13)

  let mixer
  useEffect(() => {
    if (animations.length) {
      mixer = new THREE.AnimationMixer(scene)
      const action = mixer.clipAction(animations[2])
      const action1 = mixer.clipAction(animations[1])
      const action0 = mixer.clipAction(animations[0])

      action.play()
      action1.play()
      action0.play()
    }
  }, [animations])

  useFrame((state, delta) => {
    mixer?.update(delta)
    scene.position.y = anim.py
    scene.scale.x = anim.x
    scene.scale.y = anim.x
    scene.scale.z = anim.x
    scene.rotation.x = anim.rx
    scene.rotation.y = anim.ry
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
    x: 12.5,
    y: 0,
    py: -11.5,
    rx: 1,
    ry: 0
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
        x: 7,
        y: 2,
        py: -5,
        rx: 0.5,
        ry: -1.7
      })
      // gsap.to('.section-one', {
      //   scrollTrigger: {
      //     trigger: '.section-one',
      //     // endTrigger: '.section-two',
      //     onUpdate: () => {
      //       console.log('Hii')
      //     }
      //   }
      // })
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

  const Lights = () => {
    const light = useRef()
    // useHelper(light, SpotLightHelper, 'cyan')
    return (
      <group>
        <ambientLight />
        <spotLight ref={light} position={[50, 40, 40]} castShadow />
      </group>
    )
  }

  return (
    <Canvas shadowMap camera={{ position: [0, 0, 15] }} className="canvas" style={{ zIndex: '-1', backgroundColor: 'gray' }}>
      {/* <ambientLight intensity={0.7} />
      <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[10, 25, 20]} /> */}
      <Lights />
      {/* <spotLightHelper /> */}
      <Thing anim={animable} animSphere={animableSphere} />
      <Effects />
    </Canvas>
  )
}

export default Canvas3D
