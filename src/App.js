import React from "react";
import { Switch, Route } from "react-router-dom";
import Sec01Green from "./components/Sec01Green";
import Sec02NAV from "./components/Sec02NAV";
import Sec03BT from "./components/Sec03BT";
import Sec04Home from "./components/Sec04Home";
import Sec10LowerSearch from "./components/Sec10LowerSearch";
import Sec11Footer from "./components/Sec11Footer";
import Sec12UnderFooter from "./components/Sec12UnderFooter";
import Aletler from "./components/Aletler";
import Alet from "./components/Alet";
import Destler from "./components/Destler";
import ElektrikEletler from "./components/ElektrikAletler";
import OlcuAletleri from "./components/OlcuAletleri";
import PnevmoAletler from "./components/PnevmoAletler";
import ElAletleri from "./components/ElAletleri";
import TermsOfUse from "./components/TermsOfUse";
import FAQ from "./components/FAQ";
import CustomerService from "./components/CustomerService";
import AboutUs from "./components/AboutUs";
import Delivery from "./components/Delivery";
import WishList from "./components/WishList";
import Basket from "./components/Basket";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Sec01Green />
      <Sec02NAV />
      <Sec03BT />
      <Switch>
        <Route exact path="/">
          <Sec04Home />
        </Route>
        <Route path="/destler">
          <Destler />
        </Route>
        <Route path="/elektrik_aletler">
          <ElektrikEletler />
        </Route>
        <Route path="/olchu_aletleri">
          <OlcuAletleri />
        </Route>
        <Route path="/pnevmo_aletler">
          <PnevmoAletler />
        </Route>
        <Route path="/el_aletleri">
          <ElAletleri />
        </Route>
        <Route exact path="/butun_aletler">
          <Aletler />
        </Route>
        <Route path="/butun_aletler/:aletId">
          <Alet />
        </Route>
        <Route path="/terms_of_use">
          <TermsOfUse />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/customer_service">
          <CustomerService />
        </Route>
        <Route path="/about_us">
          <AboutUs />
        </Route>
        <Route path="/delivery">
          <Delivery />
        </Route>
        <Route path="/wishlist">
          <WishList />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      <Sec10LowerSearch />
      <Sec11Footer />
      <Sec12UnderFooter />
    </div>
  );
}

export default App;
