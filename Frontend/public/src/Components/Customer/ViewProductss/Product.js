import React from 'react'
import {Card} from 'react-bootstrap'
import axios from 'axios'

async function addToCart(id,name,price, e) {
  e.preventDefault()
  axios.post("http://localhost:5000/cart/add",{
    _id: id,
    name:name,
    price:price

  }, {withCredentials: true})
    .then((data) =>{
      console.log(data)
      alert("Item Added To Cart");
      console.log(data);
    })
    .catch((err) =>{
      console.log(err);
  })
  console.log(id)
 
}

const Product = (props) => {
  return (
      <div>  
        <Card class="col-md-4" style={{ width: '15rem', marginRight:'2rem'}}>
        <Card.Body>
            <Card.Img src="https://4.imimg.com/data4/KE/LY/NSDMERP-14316935/tomatoes-500x500.png"   width="200" height="200"/> 
            <Card.Title><h4 style={{textAlign: 'center', marginTop: '1rem'}}> {props.name} </h4> </Card.Title>
            <Card.Text>
            <span><strong>Price: </strong></span>{props.price}/kg <br/>

            <div class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center" >
             <button  onClick={(e) => addToCart(props.id,props.name, props.price, e)} class="btn btn-primary text-uppercase">Add to cart</button>
                <div class="add"> <span class="product_fav"><i class="fa fa-heart-o"></i></span> <span class="product_fav"><i class="fa fa-opencart"></i></span> </div>
            </div>
        </Card.Text>
        </Card.Body>
       
        </Card>
        <br/>    
        </div>
  )
}

export default Product