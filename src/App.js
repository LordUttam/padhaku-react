import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  Products,
  Cart,
  Wishlist,
  Login,
  Signup,
  NotFound,
} from "pages";
import RequiresAuth from "components/RequiresAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element=<RequiresAuth />>
          <Route path="/cart" element=<Cart /> />
          <Route path="/wishlist" element=<Wishlist /> />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
