import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './Components/Footer/Footer'


function App() {

  const [coins, setCoins] = useState(0)
  const [availablePlayer, setAvailablePlayer] = useState(false)
  const [selectedPlayers, setSelectedPlayers] = useState([])

  const handelCoins = () => {
    setCoins(coins + 60006000)
  }

  const handleAvailablePlayers = () => {
    setAvailablePlayer(!availablePlayer)
  }

  const handleSelectedPlayers = (player) => {
    const isAlreadyExistPlayer = selectedPlayers.find(p => p.playerId === player.playerId)
  
    if (player.biddingPrice > coins) {
      toast.error('❌ Not enough coins to buy this player!')
    }
    else if (isAlreadyExistPlayer) {
      toast.error(`⚠️ ${player.name} is already selected!`)
    }
    else if (selectedPlayers.length >= 11) {
      toast.warning("⚠️ You can't select more than 11 players!")
    }
    else {
      const newSelectedPlayers = [...selectedPlayers, player]
      setSelectedPlayers(newSelectedPlayers)
      setCoins(coins - player.biddingPrice)
      toast.success(`✅ Player ${player.name} bought for ${player.biddingPrice} coins!`)
    }
  
    console.log(selectedPlayers.length, isAlreadyExistPlayer, selectedPlayers)
  }
  


  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Banner handelCoins={handelCoins} ></Banner>
      <Players handleSelectedPlayers={handleSelectedPlayers} availablePlayer={availablePlayer} handleAvailablePlayers={handleAvailablePlayers}></Players>
      <SelectedPlayers selectedPlayers={selectedPlayers} ></SelectedPlayers>
      <Footer></Footer>
      {/* Toast container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  )
}

export default App
