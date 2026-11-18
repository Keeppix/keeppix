import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Account from "../pages/Account";
import Gallery from "../pages/Gallery";
import Login from "../pages/Login";
import Signup from "../pages/signup";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
