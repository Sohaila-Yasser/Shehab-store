import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home/home";
import { Cart } from "./pages/cart/cart";
import { Login } from "./pages/login/login";
import { Contact } from "./pages/contact/contact";
import { StoreContextProvider } from "./context/store-context";
import { Favourite } from "./pages/favourite/favorite";

export default function App() {
  return (
    <div>
      <StoreContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />

              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="fav" element={<Favourite />} />
            </Route>
          </Routes>
        </Router>
      </StoreContextProvider>
    </div>
  );
}
