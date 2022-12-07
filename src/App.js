import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Welcome from "./components/layout/Welcome";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/layout/ContactUs";
import CoomingSoon from "./components/layout/pages/CoomingSoon";
import AboutUs from "./components/layout/AboutUs";
import Menu from "./components/layout/Menu";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Welcome />
              <Menu />
              <AboutUs />
              <ContactUs />
            </>
          }
        ></Route>
        <Route path="/soon" element={<CoomingSoon />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
