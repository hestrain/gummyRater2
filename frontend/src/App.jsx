import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { NewRating } from "./pages/NewRating";
import { Profile } from "./pages/Profile";
import { Navbar } from "./components/Navbar";
import { Layout } from "./components/Layout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newRating" element={<NewRating />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
