import React from 'react'

const CheckoutProduct = (props) => {
  return (
    <div> <div class="card rounded-3 mb-4">
        <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                    <img src="https://www.fruitnvegiesrus.com.au/wp-content/uploads/2018/08/small-basket.jpg"
                        class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                <h1> {props.name}</h1>
                    <p class="lead fw-normal mb-2">{props.name}</p>
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
  </div>
  )
}

export default CheckoutProduct