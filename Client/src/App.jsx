import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Admin from "./pages/Admin"
import AdminLogin from "./pages/AdminLogin"
import FZFPage from "./pages/FZFPage"
import ProfilePage from "./pages/ProfilePage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Login" element={<AdminLogin />} />
        <Route path="/*" element={<FZFPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;