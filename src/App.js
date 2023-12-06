import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
import Home from "./components/pages/home";
import ItemDetails from "./components/pages/itemDetails";

function App() {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={localStorage.getItem("Login") ? <Home/>: <Login/>}/>
          <Route path="/login" exact element={localStorage.getItem("Login") ? <Home/>: <Login/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/itemdetails" exact element={<ItemDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
