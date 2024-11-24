import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import EventDetails from './components/EventDetails'
import Footer from "./components/Footer";
import ScrollToTop from "./assets/ScrollToTop"
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <div className="w-full max-w-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </div><Footer/>
    </Router>
  );
}

export default App;
