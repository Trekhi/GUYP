import './App.css'
import Navi from './components/header/Navi'
import Body from './components/body/Body'
import CaruselCard from './components/cards/CaruselCard'
import Nosotros from './components/nosotros/Nosotros'
import Temporadas from './components/temporadas/Temporadas'
import Footer from './components/footer/Footer'

function App() {
  
  return (
    <>
      <Navi/>
      <Body/>
      <CaruselCard/>
      <Nosotros/>
      <Temporadas/>
      <Footer/>
    </>
  )

}

export default App
