import './App.css'
 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
 
import Hero from './components/Hero';
import OpeningHours from './components/OpeningHours';
import FoodShowcase from './components/FoodShowcase';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  

  return (
    <>
       <Navbar/>
      <Hero/>
       
      <OpeningHours/>
      <FoodShowcase/>
      <Footer/>
    </>
  )
}

export default App
