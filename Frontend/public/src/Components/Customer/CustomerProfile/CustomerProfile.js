import React, { useState,useEffect } from 'react'
import './CustomerProfile.css'
import jwt_decode from "jwt-decode";
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
import img2 from '../../../assets/img/gallery/logo-icon.png'
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../../../utils/loadContract";
import Web3 from "web3";
import { customerContractAbi, customerContractAddress } from "../StoreAbi";
import FarmerCustomer from './FamerCustomer';

let provider;
let web3;
let customer;

var decoded;
var accounts;
const CustomerProfile = () => {
  const [farmers,setFarmers] = useState([]);
  const [products,setProducts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [account,setAccount] = useState(null);
 const [name,setName] = useState(null);
 const [phone,setPhone] = useState(null);
 const [mail,setMail] = useState(null);
 const [add,setAdd] = useState(null);  
 const [productId,setProductId] = useState([]);
  // var decoded = jwt_decode(check_cookie_name("token"))
  // console.log(decoded)
  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (accounts) => {
      setAccount(accounts[0]);
      localStorage.setItem('account',account);
      setProducts([]);
      console.log(accounts[0]);
    });
  };

  useEffect(() => {
    const loadProvider = async () => {
      provider = await detectEthereumProvider();
     
      if (provider) {
        setAccountListener(provider);
        provider.request({method: "eth_requestAccounts"});
      } else {
        console.error("Please install MetaMask!");
      }
      if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(provider);
    }
   
    // console.log(account);
    setAccount(localStorage.getItem('account'));
    console.log(account);
     accounts = await web3.eth.getAccounts();
      console.log(accounts);
      setAccount(accounts[0]);
     customer = new web3.eth.Contract(
      customerContractAbi,
      customerContractAddress
    );

    // farmer = new web3.eth.Contract(
    //   farmerContractAbi,
    //   farmerContractAddress
    // )
 
    // console.log(farmer);
    console.log(customer);
   
    var farmer_count = await customer.methods.farmer_count().call();
    

    for(var i=0;i<farmer_count;i++)
    {
      var _address=await customer.methods.farmerAddresses(i).call();
      console.log(_address);
      getFarmerNetwork(_address);
    }
    decoded = await customer.methods.customer_map(accounts[0]).call();
    //console.log(decoded);
    //console.log(decoded.typeof);
    setName(decoded[1]);
    console.log(name);
    setPhone(decoded[8]);
    console.log(phone);
    setMail(decoded[6]);
    console.log(mail);
    setAdd(decoded[7]);
    console.log(add);
    // var result = await farmer.methods.viewProductsFarmer(accounts[0]).call();
    // console.log(result);
    // var set = new Set(result);
    // result=Array.from(set);
    // setProductId(result);
    
    // result.map(getProductDetails);

    // console.log(products);
    var set = new Set(farmers);
    setFarmers(Array.from(set));
    console.log(farmers);
    };
  
    loadProvider();

  },[]);
//   window.addEventListener('load', (event) => {
//     setProducts([]);
// });
  
  useNavigate();
  window.addEventListener('load', (event) => {
    setFarmers([]);
});
  const getFarmerNetwork =async(_address)=>{
    var unit_farmer=await customer.methods.farmer_map(_address).call();
    var temp=farmers;
    //console.log(unit_farmer);
    var unit_farmer_products = await customer.methods.viewProductsFarmer(_address).call();
    //console.log(unit_farmer_products);
    var set = new Set(unit_farmer_products);
    unit_farmer_products=Array.from(set);
    //setProductId(unit_farmer_products);
    var arr=[];
    for(var j=0;j<unit_farmer_products.length;j++)
    {
      var _id=unit_farmer_products[j];
      var res = await customer.methods.product_map(_id).call()
      arr.push({
        // name:unit_farmer[1],
        // location: unit_farmer[5],
        // phone: unit_farmer[6],
        // email: unit_farmer[7],
        // address: unit_farmer[2],
        // products: {
          id: res[0],
          name: res[1],
          price: res[2],
          amount: res[3],
          category: res[4]
        //}
      })
    }
    temp.push({
       name:unit_farmer[1],
        location: unit_farmer[5],
        phone: unit_farmer[6],
        email: unit_farmer[7],
        address: unit_farmer[2],
        products: arr
    })
    arr=[];
    console.log(temp);
    setFarmers(temp);
  }
  const submitLogout = (e) => {
    e.preventDefault()

    // axios.post('http://localhost:5000/logout')
    //   .then(response => {
    //     console.log(response)
    //     // navigate('/')
    //     // navigate(0)
    //     // console.log(formData);
    //   })
    //   .catch(err => {
    //       console.log(err);
    //   })
  }

  return (
    <div id="farmer-profile">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light opacity-85" data-navbar-on-scroll="data-navbar-on-scroll" >
        <div class="container"><a class="navbar-brand" href="index.html"><img class="d-inline-block align-top img-fluid" src={img2} alt="" width="50" /><span class="text-theme font-monospace fs-4 ps-2">AgriChain</span></a>
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item px-2"><a class="nav-link fw-medium active" aria-current="page" href="/">Home</a></li>
                            <li class="nav-item px-2"><a class="nav-link fw-medium" href="#Opportuanities">Farmer</a></li>
                            <li class="nav-item px-2"><a class="nav-link fw-medium" href="#testimonial">Customer</a></li>
                            <li class="nav-item px-2"><a class="nav-link fw-medium" href="#invest">Distributor</a></li>
                            <li class="nav-item px-2"><a class="nav-link fw-medium" href="#contact">Contact </a></li>
                        </ul>
                        {/* <form class="d-flex">
                            <button class="btn btn-lg btn-dark bg-gradient order-0" type="submit">Logout</button>
                        </form> */}
                    </div>
        </div>
      </nav>
    <div class="farmer-profile-main-body" >
  
       <div class="row gutters-sm" style={{ marginTop: `50px` }}>
          <div class="col-md-4 mb-3">
            <div class="farmer-profile-card">
              <div class="farmer-profile-card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                  <div class="mt-3">
                    <h4>Customer</h4>
                    {/* <p class="text-secondary mb-1">Full Stack Developer</p>
                    <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="farmer-profile-card mt-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Authority</h6>
                  <span class="text-secondary"> Customer ID </span>
                </li>
              
              </ul>
            </div> */}
          </div>
          <div class="col-md-8">
            <div class="farmer-profile-card mb-3">
              <div class="farmer-profile-card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Full Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                  {name}
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                  {mail}
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Phone</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                  {phone}
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                  {add}
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-12">
                    <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row gutters-sm">
            {/* <Link to="/viewProduct">  
                                    <button type="button" class="btn btn-warning btn-block btn-lg" style={{ display: `block`, width: `20%` }}>View Items</button>
                                    </Link>               */}
              <div class="col-sm-6 mb-3">
               
              </div>
              <div class="col-sm-6 mb-3">
                
              </div>
            </div>


            {/* <div class="row gutters-sm">
              <button  onClick={(e) => submitLogout(e)} type="submit" >Log Out</button>
            </div> */}



         
     
    <hr></hr>
   <div class="Farmers" >
      {/* <FarmerCustomer name="Shyam" address="145247327687" location ="patna"/>
      <FarmerCustomer name="Shyam" address="145247327687" location ="patna"/> */}
      <div className="products-flexbox-container">
                      {farmers.length > 0  && farmers.map((product,id) => {                     
       return <div className="product-box"><FarmerCustomer  
                        details={product} 
                        key={id}
        //name={name} category={category} price={price} quantity={amount} key={id} 
        /></div>})}
                  </div>
        {/* -------------------------------- */}
      </div>
      </div>
    </div> 
    </div>

     
  </div>
  </div>
  )
}
export default CustomerProfile