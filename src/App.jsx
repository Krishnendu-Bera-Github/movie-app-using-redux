import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Search from "./pages/Search/Search";
import Error from "./pages/Error/Error";
import Title from "./pages/Title/Title";

function App() {
  return (
    <div className="app-conatiner">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:selectedOption/:name" element={<Search />} />
          <Route path="/title/:media_type/:id/:name" element={<Title />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
