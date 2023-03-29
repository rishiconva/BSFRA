import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from 'axios'
import CheckoutProduct from "./CheckoutProduct"
import img2 from '../../assets/img/gallery/logo-icon.png'
//import {Link} from 'react-router-dom'


const CheckoutPage = () => {
    const [carts, setCarts] = useState([]);
    const [product, setProducts] = useState([]);

    const [payload, setPayloader] = useState({});
    const [hasError, setError] = useState(false);
    const [data, setData] = useState([]);



    async function fetchCart() {
       axios.get("http://localhost:5000/cart")
          .then((res) => {
           
            console.log(res.data);
            console.log(res.data);
            
            
            setPayloader(res.data);
            const arr = []
            for(let i = 0; i < res.data.length; i++)
            arr.push(getProduct(res.data[i].products[0]))
            setData(arr)
            setCarts(res.data);
          })
          .catch((error) => {
            setError(error);
        });
    }
    async function getProduct(id) {
        axios.get("http://localhost:5000/products/"+id)
           .then((res) => {
               setProducts(res.data.response);
               setPayloader(res.data);
            return ("Name: "+res.data.response.name +" Price: "+ res.data.response.price)
            //  console.log(res.data.reasponse);
           })
           .catch((error) => {
             setError(error);
             return error.message
         });
     }


    useEffect(() => {
        fetchCart();
    }, []);

    const productList = (products) => {
        const productList = products.map(product => {
            return <CheckoutProduct id={product._id} name={product.name} price={product.price} />
        })
        return productList
    }
    // console.log(getProduct(item.products[0]));

  
    
    return (
        
        <div style={{ marginTop: `90px` }}>
        

            <section class="h-100" style={{backgroundColor: `#eee;`}}>
                <div class="container h-100 py-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-10">

                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>

                                 {carts.map((item, i) => (
                                  <div>
                                  <h1>{item.subTotal}</h1>
                                  

                                   {/* <p> {data[i]} </p>  */}
                                  <br/>

                                  </div>
                               
                                ))}  

                                
                            </div>
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
                        {/* <form class="d-flex">
                            <button class="btn btn-lg btn-dark bg-gradient order-0" type="submit">Logout</button>
                        </form> */}
                    </div>
                </div>
            </nav>
                            <div class="card rounded-3 mb-4">
                                <div class="card-body p-4">
                                    <div class="row d-flex justify-content-between align-items-center">
                                        <div class="col-md-2 col-lg-2 col-xl-2">
                                            <img src="https://www.fruitnvegiesrus.com.au/wp-content/uploads/2018/08/small-basket.jpg"
                                                class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                        </div>
                                        <div class="col-md-3 col-lg-3 col-xl-3">
                                            <p class="lead fw-normal mb-2">Potato</p>
                                            <p><span class="text-muted">Price: </span> Rs. 25/kg <span class="text-muted"> </span></p>
                                        </div>
                                         
                                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 class="mb-0">Rs 25.00</h5>
                                        </div>
                                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card rounded-3 mb-4">
                                <div class="card-body p-4">
                                    <div class="row d-flex justify-content-between align-items-center">
                                        <div class="col-md-2 col-lg-2 col-xl-2">
                                            <img src="https://www.fruitnvegiesrus.com.au/wp-content/uploads/2018/08/small-basket.jpg"
                                                class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                        </div>
                                        <div class="col-md-3 col-lg-3 col-xl-3">
                                            <p class="lead fw-normal mb-2">Apple</p>
                                            <p><span class="text-muted">Price: </span> Rs. 100/kg <span class="text-muted"> </span></p>
                                        </div>
                                         
                                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 class="mb-0">Rs 100.00</h5>
                                        </div>
                                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card rounded-3 mb-4">
                                <div class="card-body p-4">
                                    <div class="row d-flex justify-content-between align-items-center">
                                        <div class="col-md-2 col-lg-2 col-xl-2">
                                            <img src="https://www.fruitnvegiesrus.com.au/wp-content/uploads/2018/08/small-basket.jpg"
                                                class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                        </div>
                                        <div class="col-md-3 col-lg-3 col-xl-3">
                                            <p class="lead fw-normal mb-2">Groundnuts</p>
                                            <p><span class="text-muted">Price: </span> Rs. 80/kg <span class="text-muted"> </span>Grey</p>
                                        </div>
                                         
                                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 class="mb-0">Rs 80.00</h5>
                                        </div>
                                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card rounded-3 mb-4">
                                <div class="card-body p-4">
                                    <div class="row d-flex justify-content-between align-items-center">
                                        <div class="col-md-2 col-lg-2 col-xl-2">
                                            <img src="https://www.fruitnvegiesrus.com.au/wp-content/uploads/2018/08/small-basket.jpg"
                                                class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                        </div>
                                        <div class="col-md-3 col-lg-3 col-xl-3">
                                            <p class="lead fw-normal mb-2">Rice</p>
                                            <p><span class="text-muted">Price: </span> Rs. 112/kg <span class="text-muted"> </span>Grey</p>
                                        </div>
                                         
                                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 class="mb-0">Rs 112.00</h5>
                                        </div>
                                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row d-flex justify-content-between align-items-center" style={{marginTop: `50px`, marginBottom:`50px`}}>
                                
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                    <p class="lead fw-normal mb-2">Total Price Of Items: </p>
                                </div>

                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 class="mb-0">Rs 317.00</h5>
                                </div>
                                
                            </div>
                    
                            <div class="card">
                                <div class="card-body">
                                <Link to="/initializeContract">  
                                    <button type="button" class="btn btn-warning btn-block btn-lg" style={{ display: `block`, width: `100%` }}>Proceed to Pay</button>
                                    </Link>
                                </div>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default CheckoutPage