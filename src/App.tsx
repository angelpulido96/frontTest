import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./screen/login";
import { SignUp } from "./screen/SignUp";
import Home from "./screen/Home";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
