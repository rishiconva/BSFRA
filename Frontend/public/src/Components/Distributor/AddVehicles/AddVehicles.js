import React, { useState, useEffect } from "react";
import "./AddVehicles.css";
import "react-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../../../utils/loadContract";
import Web3 from "web3"; 

//import { farmerContractAbi, farmerContractAddress } from "../StoreAbi";

// function check_cookie_name(name)  // "token"
// {
//   var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//   if (match) {
//     return (match[2]);
//   }
//   else{ 
//       return ''
//   }
// }
let web3;
let farmer;
let provider;
const AddVehicles = () => {
  // var decoded = jwt_decode(check_cookie_name("token"))
  // console.log(decoded)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    owner: "",
  });
  const navigate = useNavigate();
  const [account, setAccount] = useState(localStorage.getItem("account"));
  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (accounts) => {
      setAccount(accounts[0]);
      localStorage.setItem("account", accounts[0]);
      console.log(accounts[0]);
    });
  };
  useEffect(() => {
    const loadProvider = async () => {
      provider = await detectEthereumProvider();

      if (provider) {
        setAccountListener(provider);
        provider.request({ method: "eth_requestAccounts" });
      } else {
        console.error("Please install MetaMask!");
      }
      if (typeof web3 !== "undefined") {
        web3 = new Web3(web3.currentProvider);
      } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(provider);
      }
      //const accounts = await web3.eth.getAccounts();
      //setAccount(accounts[0]);
    //   console.log(account);
    //   farmer = new web3.eth.Contract(farmerContractAbi, farmerContractAddress);
    //   console.log(farmer);
    };

    loadProvider();
  }, []);

  const AddVehicles = async () => {
    //const provider=new Web3.providers.HttpProvider("http://127.0.0.1:7545");
    var name = formData.name;
    var category = formData.category;
    var price = formData.price;
    var quantity = formData.quantity;
    console.log(name);
    console.log(category);
    console.log(price);
    console.log(quantity);
    console.log(farmer.address);
    console.log(account);
    //farmer.createProduct(name,price,category,quantity,{from:account,gasLimit:3000000});
    // await farmer.methods
    //   .createProduct(name, price, category, quantity)
    //   .send({ from: account, gas: 3000000 })
    //   .then(console.log);

    // //var result = await farmer.methods.viewProductsFarmer(account).call();
    // console.log(result);
  };

  const changeName = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
    //console.log(formData)
  };
  const changeOwner = (e) => {
    setFormData({
      ...formData,
      owner: "",
      // decoded.name
    });

    //console.log(formData)
  };
  const changeCategroy = (e) => {
    setFormData({
      ...formData,
      category: e.target.value,
    });
    //console.log(formData)
  };
  const changePrice = (e) => {
    setFormData({
      ...formData,
      price: e.target.value,
    });
    //console.log(formData)
  };
  const changeQuantity = (e) => {
    setFormData({
      ...formData,
      quantity: e.target.value,
    });
    //console.log(formData)
  };
  const submitForm = (e) => {
    e.preventDefault();
    //createProduct();
    navigate("/distributorProfile");
    navigate(0);

    // axios.post('http://localhost:5000/farmerCreateProduct', formData, {withCredentials: true})
    //   .then(response => {
    //     console.log(response)
    //     // navigate('/farmerProfile')
    //     // navigate(0)
    //     console.log(formData);
    //   })
    //   .catch(err => {
    //       console.log(err);
    //   })
  };

  return (
    <div id="vehicle-create-product">
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="farmer-create-product-card">
              <h5 class="text-center mb-4">Add Vehicle</h5>
              <form
                class="form-card"
                action="/farmerCreateProduct"
                method="POST"
              >
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label farmer-create-product-label px-3 ">
                      Vehicle name<span class="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      onKeyUp={(e) => changeName(e)}
                      id="fname"
                      name="name"
                      placeholder="Enter Vehicle Name"
                      className="farmer-create-product-input"
                      onblur="validate(1)"
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label farmer-create-product-labe; px-3">
                      Vehicle Category <span class="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      onKeyUp={(e) => changeCategroy(e)}
                      id="lname"
                      name="lname"
                      placeholder="Enter Vehicle Type "
                      className="farmer-create-product-input"
                      onblur="validate(2)"
                    />{" "}
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label farmer-create-product-label px-3">
                      Rental Price<span class="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      onKeyUp={(e) => changePrice(e)}
                      name="price"
                      placeholder="0"
                      className="farmer-create-product-input"
                      onblur="validate(3)"
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label farmer-create-product-label px-3">
                      Rental Duration<span class="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      onKeyUp={(e) => changeQuantity(e)}
                      id="mob"
                      name="quantity"
                      placeholder="0"
                      className="farmer-create-product-input"
                      onblur="validate(4)"
                    />{" "}
                  </div>
                </div>
                <br />
                {/* <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label farmer-create-product-label px-3">Job title<span class="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" className="farmer-create-product-input" onblur="validate(5)"/> </div>
                    </div> */}
                {/* <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label farmer-create-product-lebel px-3">Confirm your Email<span class="text-danger"> *</span></label>
                         <input type="text"  onKeyUp={e => changeOwner(e)} id="ans" name="ans" placeholder="" className="farmer-create-product-input" onblur="validate(6)"/> </div>
                    </div> */}
                <div class="row justify-content-center">
                  <div class="form-group col-sm-6">
                    {" "}
                    <button
                      type="submit"
                      onClick={(e) => submitForm(e)}
                      class="btn-block-farmer-product btn-primary-farmer-product farmer-create-product-button"
                    >
                      Add Vehicle
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicles;
