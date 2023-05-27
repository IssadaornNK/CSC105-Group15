import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import Admin from "./pages/Admin"
import AdminLogin from "./pages/AdminLogin"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;