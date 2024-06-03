import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Advantages from './Components/Pages/Advantages';
import Features from './Components/Pages/Features';
import Mainpage from './Components/Pages/Mainpage';
import Testimonial from './Components/Pages/Testimonial';
import Thirdpage from './Components/Pages/Thirdpage';
import FAQ from "./Components/Pages/FAQ";
import Imgpage from './Components/Pages/Imgpage';
import Footer from './Components/Pages/Footer';
function App() {
  return (
   <>
   <Navbar/>
   <Mainpage/>
   <Features/>
   <Advantages/>
   <Thirdpage/>
   <Testimonial/>
   <FAQ/>
   <Imgpage/>
   <Footer/>
   </>
  );
}

export default App;
