import React from 'react'

const CustomerProduct = (props) => {
  return (
    <div>
        <div class="row g-2">
        <div class="col-md-4">
            <div class="product py-4">   
                <div class="text-center"> <img src="https://images.healthshots.com/healthshots/en/uploads/2021/08/23133154/Peas.jpg"   width="200" height="200"/> </div>
                <div class="about text-center">
                    <h5> {props.name} </h5> <span>{props.price}</span>
                </div>
                <div class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center" style={{marginLeft: `60px`}}> <button class="btn btn-primary text-uppercase">Add to cart</button>
                    <div class="add"> <span class="product_fav"><i class="fa fa-heart-o"></i></span> <span class="product_fav"><i class="fa fa-opencart"></i></span> </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CustomerProduct