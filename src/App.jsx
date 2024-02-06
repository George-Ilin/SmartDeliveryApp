import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CarPage from "./pages/CarPage";
import ScooterPage from "./pages/ScootersPage";
import Scooters from "./pages/Scooters";
import Success from "./pages/Success";
import Cars from "./pages/Cars";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<Explore />} />
              <Route path="/scooters" element={<Scooters />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/car-page/:id" element={<CarPage />} />
              <Route path="/scooter-page/:id" element={<ScooterPage />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </div>
          <Footer />
        </Router>
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
