import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import Events2 from "./components/Events/Eventssecond";
import Events3 from "./components/Events/Eventsthird";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="w-full max-w-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/2" element={<Events2 />} />
          <Route path="/events/3" element={<Events3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
