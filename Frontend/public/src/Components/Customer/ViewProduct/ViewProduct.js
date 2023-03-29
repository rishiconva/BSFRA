import React ,{useState,useEffect} from 'react'
import './ViewProduct.css'
import img2 from '../../../assets/img/gallery/logo-icon.png'
import {Link,useLocation} from 'react-router-dom'
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../../../utils/loadContract";
import Web3 from "web3";
import { customerContractAbi, customerContractAddress, farmerContractAbi, farmerContractAddress } from "../StoreAbi";
//import FarmerCustomer from './FamerCustomer';

  
 import ProductView from './ProductView'
 let provider;
 let web3;
 let customer;
 let farmer;
 var decoded;
 var accounts;
const ViewProduct = () => {
    const [account,setAccount] = useState(null);
    const location = useLocation()
    const { details } = location.state
    //console.log(details)
    //details.products.push({name:"Cabbage",id:0,price:40,amount:75})
    console.log(details)
    console.log(details.constructor)

    const setAccountListener = (provider) => {
        provider.on("accountsChanged", (accounts) => {
          setAccount(accounts[0]);
          localStorage.setItem('account',account);
          //setProducts([]);
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
    
        farmer = new web3.eth.Contract(
          farmerContractAbi,
          farmerContractAddress
        )
    
        console.log(farmer);
        console.log(customer);
    };
  
    loadProvider();

  },[]);

    return (
      <div style={{ marginTop: `90px` }}>
        <nav
          class="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light opacity-85"
          data-navbar-on-scroll="data-navbar-on-scroll"
        >
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <img
                class="d-inline-block align-top img-fluid"
                src={img2}
                alt=""
                width="50"
              />
              <span class="text-theme font-monospace fs-4 ps-2">AgriChain</span>
            </a>
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item px-2">
                  <a
                    class="nav-link fw-medium active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link fw-medium" href="#Opportuanities">
                    Opportunities
                  </a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link fw-medium" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link fw-medium" href="#invest">
                    Invest
                  </a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link fw-medium" href="#contact">
                    Contact{" "}
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <button
                  class="btn btn-lg btn-dark bg-gradient order-0"
                  type="submit"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div class="container-fluid mt-5 mb-5">
          <div class="row g-2">
            <div class="col-md-12">
              <div class="row g-2">
                <div class="card" style={{ marginRight: `8px` }}>
                  <div class="row ">
                    <div style={{ alignContent: `center` }}>
                      <div class="card-body">
                        <h5 class="card-title">Farmer Name: {details.name}</h5>
                        <p class="card-text">Address: {details.address}</p>

                        {/* <div class="star-wrapper">
                                                <a href="#" class="fas fa-star s1"></a>
                                                <a href="#" class="fas fa-star s2"></a>
                                                <a href="#" class="fas fa-star s3"></a>
                                                <a href="#" class="fas fa-star s4"></a>
                                                <a href="#" class="fas fa-star s5"></a>
                                            </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <ProductView name={details.products.name} price={details.products.price} quantity={details.products.amount}/>
                            <ProductView name="hellllll" price="00" quantity="2"/> */}
                <div className="products-flexbox-container">
                  <div>
                    {details.products.length > 0 &&
                      details.products.map((product, id) => {
                        return (
                          <div className="product-box">
                            <ProductView
                              details={details}
                              name={product.name}
                              price={product.price}
                              quantity={product.amount}
                              id={product.id}
                              key={id}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
                <Link to="/initializeContract" state={{ details: details }}>
                  <button
                    type="button"
                    class="btn btn-warning btn-block btn-lg"
                    style={{ display: `inline`, width: `40%` , marginLeft: `400px`}}
                  >
                    <i class="fas fa-shopping-cart"></i> Checkout
                  </button>
                   
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ViewProduct