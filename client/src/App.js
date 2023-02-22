import Login from "./pages/common/Login";
import "./stylesheets/theme.css";
import "./stylesheets/alignments.css";
import "./stylesheets/textelements.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/common/Register";
import Home from "./pages/common/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import { currentUser } from "./apicalls/user";



function App() {

  

  return (
    <BrowserRouter>
        <Routes>
          {/* Common Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute>
              <Home />
          </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
