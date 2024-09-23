import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./common/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import TopHeader from "./common/TopHeader";
import MidHeading from "./common/MidHeading";
import Header from "./common/Header";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <TopHeader />
        <MidHeading />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
