import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import AboutUs from './components/aboutUs';
import Academics from './components/academics';
import Admissions from './components/admissions';
import HomeSlideshow from './components/HomeSlideshow';
import Faculty from './components/faculty';
import Student from './components/student';
import Gallery from './components/gallery';
import ContactUs from './components/Contactus';

const Home = () => (
  <>
    <HomeSlideshow />
    
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/student" element={<Student />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
