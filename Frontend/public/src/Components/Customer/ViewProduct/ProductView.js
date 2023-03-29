import React,{useState,useEffect} from 'react'
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../../../utils/loadContract";
import Web3 from "web3";
import { customerContractAbi, customerContractAddress, farmerContractAbi, farmerContractAddress } from "../StoreAbi";
// import './ProductView.css'
let provider;
 let web3;
 let customer;
 let farmer;
 var decoded;
 var accounts;

const ProductView = (props) => {
    const [account,setAccount] = useState(null);
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
    const [quantity,setQuantity] = useState(0);
    
    console.log(props);
    const onAdd=()=>{
        setQuantity(quantity=>quantity+1);
    }

    const onSub=()=>{
        console.log(quantity);
        setQuantity(quantity=>quantity-1);
    }


    const addToCart= async ()=>{
        // console.log(props.key);
        // console.log(props.details.address);
        await customer.methods.addProduct(props.id-1,quantity,props.details.address).send({from:accounts[0],gas:300000}).then(console.log);
        var order_price = await customer.methods.order_price_map(accounts[0]).call();
        console.log(order_price);
    }
  return (
    <div>
      <div style={{ float: `center` }}>
        <div class="product py-4" style={{}}>
            <div class="text-center">
              
              <img
                src="https://www.pngitem.com/pimgs/m/240-2407572_big-basket-of-fruits-and-vegetables-hd-png.png"
                width="200"
                height="200" alt = ''
              />
            </div>
          <div class="about text-center">
            <h5> {props.name} </h5> <span>Rs.{props.price}/kg</span>
            <br></br>
            <span>Amount Available : {props.quantity}</span>
         
          <div
            class="cart-button mt-3 px-2 d-flex justify-content align-items-center"
            style={{ marginLeft: `60px` }}
          >
            <div class="counter_view" style={{ marginLeft: `450px` }}>
              <span class="btn_view" onClick={onSub}>
                {" "}
                -{" "}
              </span>
              <span class="count_view"> {quantity} </span>
              <span class="btn_view" onClick={onAdd}>
                {" "}
                +{" "}
              </span>
            </div>
            <br></br>

            {/* <div class="add"> <span class="product_fav"><i class="fa fa-heart-o"></i></span> <span class="product_fav"><i class="fa fa-opencart"></i></span> </div> */}
          </div>
          <div
            class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"
           
          >
            <button
              class="btn btn-primary text-uppercase" style= {{marginLeft: `550px`}}
              onClick={addToCart}
             
            >
              Add to cart
            </button>
            {/* <div class="add"> <span class="product_fav"><i class="fa fa-heart-o"></i></span> <span class="product_fav"><i class="fa fa-opencart"></i></span> </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView