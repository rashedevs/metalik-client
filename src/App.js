import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="portfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="purchase/:id" element={<Purchase></Purchase>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
