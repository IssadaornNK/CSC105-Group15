import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Login from "./pages/Login"
import FZFPage from "./pages/FZFPage"
import ProfilePage from "./pages/ProfilePage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<FZFPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;