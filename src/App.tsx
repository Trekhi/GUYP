import './App.css'
import Navi from './components/header/Navi'
import Body from './components/body/Body'
import AutoPlay from './components/AutoPlay/AutoPlay'
import Nosotros from './components/nosotros/Nosotros'
import Populares from './components/populares/Populares'
import Temporadas from './components/temporadas/Temporadas'
import Footer from './components/footer/Footer'

function App() {
  
  return (
    <>
      <Navi/>
      <Body/>
      <AutoPlay/>
      <Populares/>
      <Nosotros/>
      <Temporadas/>
      <Footer/>
    </>
  )

}

export default App
