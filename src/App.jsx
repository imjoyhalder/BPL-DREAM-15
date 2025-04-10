
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players'

function App() {

  const [coins, setCoins] = useState(0)

  const handelCoins = () =>{
      setCoins(coins+50000)
  }

  return (
    <>
      <Navbar coins = {coins}></Navbar>
      <Banner handelCoins={handelCoins} ></Banner>
      <Players></Players>
    </>
  )
}

export default App
