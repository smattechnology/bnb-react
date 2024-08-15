import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full">
      <div className="w-full">
            <Navbar />
  
      </div>
      <div className="w-full">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="*" element={<> not found</>} />
          </Routes>
        </Router>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
