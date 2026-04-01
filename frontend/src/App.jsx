import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import NewIn from "./Pages/NewIn";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Kids from "./Pages/Kids";
import Accessories from "./Pages/Accessories";
import GiftTreats from "./Pages/GiftTreats";
import Cart from "./Pages/Cart";

// Men sub-pages
import MenShirts from "./Pages/MenShirts";
import MenTShirts from "./Pages/MenTshirts";
import MenTrousers from "./Pages/MenTrousers";
import MenShorts from "./Pages/MenShorts";
import MenBlazers from "./Pages/MenBlazers";
import MenJeans from "./Pages/MenJeans";

// Women sub-pages
import WomanTop from "./Pages/Woman/WomanTop";
import WomanDresses from "./Pages/Woman/WomenDresses";
import WomenSaaris from "./Pages/Woman/WomenSaaris";

// Kids sub-pages
import KidsTShirts from "./Pages/Kids/KidsTShirts";
import KidsShorts from "./Pages/Kids/KidsShorts";
import KidsShoes from "./Pages/Kids/KidsShoes";

import AccessoriesBags from "./Pages/Accessories/AccessoriesBags";
import AccessoriesBelts from "./Pages/Accessories/AccessoriesBelts";
import AccessoriesSunglasses from "./Pages/Accessories/AccessoriesSunglasses";
import AccessoriesWatches from "./Pages/Accessories/AccessoriesWatches";
 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/new-in"       element={<NewIn />} />
        <Route path="/women"        element={<Women />} />
        <Route path="/men"          element={<Men />} />
        <Route path="/kids"         element={<Kids />} />
        <Route path="/accessories"  element={<Accessories />} />
        <Route path="/gift-treats"  element={<GiftTreats />} />
        <Route path="/cart"         element={<Cart />} />

        {/* Men sub-pages */}
        <Route path="/men/shirts"   element={<MenShirts />} />
        <Route path="/men/tshirts"  element={<MenTShirts />} />
        <Route path="/men/trousers" element={<MenTrousers />} />
        <Route path="/men/shorts"   element={<MenShorts />} />
        <Route path="/men/blazers"  element={<MenBlazers />} />
        <Route path="/men/jeans"    element={<MenJeans />} />

        {/* Women sub-pages */}
        <Route path="/women/tops"    element={<WomanTop />} />
        <Route path="/women/dresses" element={<WomanDresses />} />
        <Route path="/women/saaris"  element={<WomenSaaris />} />

        {/* Kids sub-pages */}
        <Route path="/kids/tshirts"  element={<KidsTShirts />} />
        <Route path="/kids/shorts"   element={<KidsShorts />} />
        <Route path="/kids/shoes"    element={<KidsShoes />} />

         <Route path="/accessories/bags"        element={<AccessoriesBags />} />
        <Route path="/accessories/belts"       element={<AccessoriesBelts />} />
        <Route path="/accessories/sunglasses"  element={<AccessoriesSunglasses />} />
        <Route path="/accessories/watches"     element={<AccessoriesWatches />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;