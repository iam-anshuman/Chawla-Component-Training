import './App.css'
import Banner from './Components/Banner'
import Carousel from './Components/Carousel'
import Copilot from './Components/Copilot'
import FollowMicrosoft from './Components/FollowMicrosoft'
import Footer from './Components/Footer'
import ForBusiness from './Components/ForBusiness'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Products from './Components/Products'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Carousel/>
      <ProductList/>
      <Products/>
      <Copilot/>
      <ForBusiness/>
      <FollowMicrosoft/> 
      <Footer/>
    </>
  )
}

export default App
