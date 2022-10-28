import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import LogIn from "./components/Authentification/LogIn";
import SignUp from "./components/Authentification/SignUp";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
