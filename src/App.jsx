import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Shop from './pages/Shop';
import Signup from './pages/Signup'
import Plans from './pages/Plans';

import MyCarousel from './components/Carousel';
import Cards from './components/Cards';
import Text from './components/Text';






export default function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <MyCarousel></MyCarousel>
   <Text></Text>
   
    <Cards></Cards>
   
      <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/plans" element={<Plans />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
