import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Routes, Route } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import RequiredAuth from "./components/RequiredAuth/RequiredAuth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/inventory" element={
          <RequiredAuth>
            <Inventory />
          </RequiredAuth>
        }></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

        {/* <Route path='/orders' element={} */}
      </Routes>
    </div>
  );
}

export default App;
