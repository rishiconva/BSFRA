import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import FarmerLogin from './Components/Farmer/FarmerLogin.js';
import FarmerRegister from './Components/Farmer/FarmerRegister.js';
import FarmerProfile from './Components/Farmer/FarmerProfile/FarmerProfile.js';
import CreateProduct from './Components/Farmer/CreateProduct/CreateProduct.js';
import ViewProduct from './Components/Customer/ViewProduct/ViewProduct.js';
import ViewProductss from './Components/Customer/ViewProductss/ViewProduct.js';
import CheckoutPage from './Components/Customer/CheckoutPage.js';

import CustomerLogin from './Components/Customer/CustomerLogin.js';
import CustomerRegister from './Components/Customer/CustomerRegister.js';
import CustomerProfile from './Components/Customer/CustomerProfile/CustomerProfile.js';
import DistributorLogin from './Components/Distributor/DistributorLogin.js';
import DistributorRegister from './Components/Distributor/DistributorRegister.js';
import DistributorProfile from './Components/Distributor/DistributorProfile/DistributorProfile.js';
import InitializeContract from './Components/Payments/InitializeContract';
import CancelOrder from './Components/Payments/CancelOrder';
import ConfirmRecipt from './Components/Payments/ConfirmRecipt';
import ReturnItem from './Components/Payments/ReturnItem';
import ReleaseAmount from './Components/Payments/releaseAmount';
import Rating from './Components/Payments/Rating';

import AddVehicles from './Components/Distributor/AddVehicles/AddVehicles';
import jwt_decode from "jwt-decode";
import * as bst from "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";

function App() {
  var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXllc2hhIiwiZW1haWwiOiJBc2h1QGdtYWlsLmNvbSIsImNvbnRhY3ROdW1iZXIiOiI2NzU4OTA1NjciLCJpYXQiOjE2NTAwMzU2NjZ9.Bu7BjJfKLfhHLaUe8kl77qle00Lp3bxrUqUlFZqrsnw";
  var decoded= jwt_decode(token);

  console.log(decoded);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/farmerLogin" element={<FarmerLogin />} />
          <Route path="/farmerRegister" element={<FarmerRegister />} />
          <Route path="/farmerProfile" element={<FarmerProfile />} />
          <Route path="/farmerCreateProduct" element={<CreateProduct />} />

          <Route path="/customerLogin" element={<CustomerLogin />} />
          <Route path="/customerRegister" element={<CustomerRegister />} />
          <Route path="/customerProfile" element={<CustomerProfile />} />

          <Route path="/distributorLogin" element={<DistributorLogin />} />
          <Route
            path="/distributorRegister"
            element={<DistributorRegister />}
          />
          <Route path="/distributorProfile" element={<DistributorProfile />} />
          <Route path="/viewProduct" element={<ViewProduct />} />
          <Route path="/viewProducts" element={<ViewProductss />} />
          <Route path="/cart" element={<CheckoutPage />} />
          <Route path="/addVehicles" element={<AddVehicles />} />

          <Route path="/initializeContract" element={<InitializeContract />} />
          <Route path="/cancelOrder" element={<CancelOrder />} />
          <Route path="/confirmRecipt" element={<ConfirmRecipt />} />
          <Route path="/returnItem" element={<ReturnItem />} />
          <Route path="/releaseAmount" element={<ReleaseAmount />} />

          <Route path="/rating" element={<Rating />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

