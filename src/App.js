import React, { useEffect, useRef, useState } from 'react'
import Canvas3D from './Components/Canvas3D'
import Content from './Components/Content'
import Header from './Components/Header'

function App() {
  const [main, setMain] = useState()
  const ref = useRef()

  useEffect(() => {
    setMain(ref.current.children[1])
  }, [main])

  return (
    <>
      <Header />
      <main ref={ref}>
        <div className="canvas3D">
          <Canvas3D mainRef={main} />
        </div>
        <Content />
      </main>
    </>
  )
}

export default App
