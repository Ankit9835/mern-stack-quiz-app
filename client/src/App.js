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
import Exams from "./components/Exams";
import AddExams from "./pages/admin/Exams/AddExams";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import ExamLists from "./pages/admin/Exams/ExamLists";
import EditExam from "./pages/admin/Exams/EditExam";


function App() {
  const {loading} =  useSelector((state) => state.loader)
  
  return (
    <>
      {loading && <Loader />} 
    <BrowserRouter>
        <Routes>
          {/* Common Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute>
              <Home />
          </ProtectedRoute>} />
          <Route
            path="/admin/add-exams"
            element={
              <ProtectedRoute>
                <AddExams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/exams"
            element={
              <ProtectedRoute>
                <ExamLists />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/exams/edit/:examId"
            element={
              <ProtectedRoute>
                <AddExams />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
