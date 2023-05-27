import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import Admin from "./pages/Admin"
import AdminLogin from "./pages/AdminLogin"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;