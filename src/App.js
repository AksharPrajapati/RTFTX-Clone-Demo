import React, { useEffect, useRef, useState } from 'react'
import Canvas3D from './Components/Canvas3D'
import Content from './Components/Content'
import Header from './Components/Header'
import { ethers } from 'ethers'

function App() {
  const [main, setMain] = useState()
  const ref = useRef()

  useEffect(() => {
    setMain(ref.current.children[1])
  }, [main])

  const onWalletConnect = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum.request({ method: 'eth_requestAccounts' }).then((res) => accountChangeHandler(res[0]))
    } else {
      alert('install metamask extension!!')
    }
  }

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      })
      .then((balance) => {
        // Setting balance
        // setdata({
        //   Balance: ethers.utils.formatEther(balance)
        // })
        console.log('balance', ethers.utils.formatEther(balance))
      })
  }

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    // setdata({
    //   address: account
    // })
    console.log('account', account)

    // Setting a balance
    getbalance(account)
  }
  return (
    <>
      <Header onWalletConnect={onWalletConnect} />
      <main ref={ref}>
        <div className="canvas3D">
          <Canvas3D mainRef={main} />
        </div>
        <Content onWalletConnect={onWalletConnect} />
      </main>
    </>
  )
}

export default App
