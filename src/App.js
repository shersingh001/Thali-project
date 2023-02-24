import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserCart from "./components/UserCart/UserCart";
import ContactPage from "./Pages/ContactUsPage/ContactPage";
import HomePage from "./Pages/HomePage/HomePage";
import AllProductsPage from "./Pages/ProductsPage/AllProductsPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";

const App = () => {
  return(
    <BrowserRouter>
    <Switch>
      <Route path={"/home"} exact>
        <Layout />
        <HomePage />
      </Route>
      <Route path={"/home-dish/:name"} exact>
        <AllProductsPage />
      </Route>
      <Route path={"/user-cart"} exact>
        <UserCart />
      </Route>
      <Route path={"/services"} exact>
        <ServicesPage />
      </Route>
      <Route path={"/contact-us"} exact>
        <ContactPage />
      </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default App;