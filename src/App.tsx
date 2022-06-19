import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./screen/login";
import { SignUp } from "./screen/SignUp";
import Home from "./screen/Home";

import { AuthProvider } from "./context/AuthContext";
import Profile from "./screen/Profile";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile/:id" element={<Profile />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
