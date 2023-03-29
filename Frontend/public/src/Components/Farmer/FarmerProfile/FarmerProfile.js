import React, { useState,useEffect } from 'react'
import './FarmerProfile.css'
import jwt_decode from "jwt-decode";
import {useNavigate,Link, useParams } from 'react-router-dom'
import axios from 'axios'
import useFetch from "react-fetch-hook"
import Product from './Product.js'
import img2 from '../../../assets/img/gallery/logo-icon.png'
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../../../utils/loadContract";
import Web3 from "web3";
import { farmerContractAbi, farmerContractAddress } from "../StoreAbi";
import CreateProduct from '../CreateProduct/CreateProduct';
import {Card} from 'react-bootstrap'


function check_cookie_name(name)  // "token"
{
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return (match[2]);
  }
  else{
      return ''
  }
}

let provider;
let web3;
let farmer;
var decoded;

const FarmerProfile = ({route,navigate}) => {
  const [products,setProducts] = useState([]);
  //const [data,setData] = useState([]);
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
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      setAccount(accounts[0]);
     farmer = new web3.eth.Contract(
      farmerContractAbi,
      farmerContractAddress
    );
    //console.log(farmer);
     //farmer = await loadContract("Farmer", provider);
     //console.log(accounts[0]);
    decoded = await farmer.methods.farmer_map(accounts[0]).call();
    //console.log(decoded);
    //console.log(decoded.typeof);
    setName(decoded[1]);
    //console.log(name);
    setPhone(decoded[6]);
    //console.log(phone);
    setMail(decoded[7]);
    //console.log(mail);
    setAdd(decoded[5]);
    //console.log(add);
    var result = await farmer.methods.viewProductsFarmer(accounts[0]).call();
    console.log(result);
    var set = new Set(result);
    result=Array.from(set);
    setProductId(result);
    
    result.map(getProductDetails);
      //setData(products);

    console.log(products);
    };
  
    loadProvider();

  }, []);
  window.addEventListener('load', (event) => {
    setProducts([]);
});
  // if(decoded == null){
  //   navigate('/farmerRegister')
  //   navigate(0)  
  // }
  useNavigate();
   
  
  const getProductDetails = async (_id)=>{
    var temp = products;
    console.log(_id);
    var res = await farmer.methods.product_map(_id-1).call()
    //console.log(res)
 
    temp.push({
      id: res[0],
      name: res[1],
      price: res[2],    
      amount: res[3],
      category: res[4]
    });
    console.log(temp);
    setProducts(temp);
    console.log(products)
    //setData(products);
  }

  const submitLogout = (e) => {
    e.preventDefault()

    // axios.post('http://localhost:5000/logout')
    //   .then(response => {
    //     console.log(response)
    //     navigate('/')
    //     navigate(0)
    //     // console.log(formData);
    //   })
    //   .catch(err => {
    //       console.log(err);
    // })

  }
  var showProduct = products.map(({name, category, price, amount, id}) => {                     
      <div className="product-box"><Product name={name} category={category} price={price} quantity={amount} key={id} /></div>
    //   <div className="product-box">
    //     <div>
    //     <Card style={{ width: '12rem' , 	marginRight: '10px'}}>
    //     <Card.Img variant="top" src="https://5.imimg.com/data5/WT/EQ/BN/SELLER-7734044/fresh-wheat-500x500.png" />
    //     <Card.Body>
    //       <Card.Title>{name}</Card.Title>
    //       <Card.Text>
    //          <span><bold>Category: </bold></span>{category} <br/>
    //          <span><bold>Price: </bold></span>{price} <br/>
    //          <span><bold>Quantity: </bold></span>{amount} <br/>
    //     </Card.Text>
    //       {/* <Button variant="primary">Go somewhere</Button> */}
    //     </Card.Body>
    //     </Card>
    //     <br></br>
    // </div>
    //   </div>
  })

  // useEffect(() => {
  //   axios.get(`http://localhost:5000/products/farmerProducts`,{
  //     withCredentials: true
  //   })
  //     .then((actualData) => {
  //       //setProducts(actualData);
  //       console.log('hey')
  //       setProducts(actualData.data.response);
  //       console.log(actualData.data.response);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setProducts(null);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  const pt = products.map((product) => 
  <div key ={product.id}>
    <h1>{product.name} </h1>
    <h2>{product.amount}</h2>
  </div>
  );

  return (
    <div id="farmer-profile">
    
      <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light opacity-85" data-navbar-on-scroll="data-navbar-on-scroll">
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
                        <form class="d-flex">
                            <button class="btn btn-lg btn-dark bg-gradient order-0" type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
            <br></br>
            <br></br>
            <br></br>
      <div class="container">
    <div class="farmer-profile-main-body">
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="farmer-profile-card">
                <div class="farmer-profile-card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>Farmer</h4>
                      {/* <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="farmer-profile-card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Authority</h6>
                    <span class="text-secondary"> Kisan ID </span>
                  </li>
                </ul>
              </div>
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
                    {/* address */}
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
                <div class="farmer-profile-card mb-3">
                <div class="farmer-profile-card-body">

                <h3 style={{textAlign:"center", marginBottom:"2rem"}  }>PRODUCTS</h3>
                      {/* fetch products */}
                 <div className="products-flexbox-container">
                      {products.length > 0  && products.map((product,id) => {                     
       return <div className="product-box"><Product  
                        details={product} 
                        key={id}
        //name={name} category={category} price={price} quantity={amount} key={id} 
        /></div>})}
                  </div>
                  
              <Link to="/farmerCreateProduct">
              <button>Add Products</button>
              </Link>    
                </div>
                </div>
              {/* <div class="row gutters-sm">
              <button  onClick={(e) => submitLogout(e)} type="submit" >Log Out</button>
              </div> */}

            </div>
          </div>

        </div>
        {/* {pt} */}
    </div>

    </div>
  )
}

export default FarmerProfile