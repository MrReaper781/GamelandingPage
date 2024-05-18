import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Homepage
