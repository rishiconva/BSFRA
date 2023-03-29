import React, { useState } from 'react'
import './FarmerRegister.css'
import 'react-dom';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import img2 from '../../assets/img/gallery/logo-icon.png'
const FarmerLogin = () => {
  
const [formData, setFormData] = useState({
  email: '',
  password: ''
})
const navigate = useNavigate()
const changeEmail = (e) => {
  setFormData({
    ...formData,
    email: e.target.value
  })
  console.log(formData)
}
const changePassword = (e) => {
  setFormData({
    ...formData,
    password: e.target.value
  })
  console.log(formData)
}
 const submitForm = (e) => {
  e.preventDefault()
  axios.post('http://localhost:5000/farmerLogin', formData, {withCredentials: true})
    .then(response => {
      console.log("farmerLogin")
      console.log(response)
      navigate('/farmerProfile')
      navigate(0)
      // console.log(formData);
    })
    .catch(err => {
        console.log(err);
    })
  }
  return (
    <div class='farmer-register'>
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
    <form id ="farmer-register-form" action="/farmerLogin" method="POST">
      <label className="farmer-register-label">
        <p class="farmer-register-label-txt" name="name" >ENTER YOUR EMAIl</p>
        <input type="name"  onKeyDown={e => changeEmail(e)} class="farmer-register-input" name="email"/>
        <input type="name"  onKeyUp={e => changeEmail(e)} class="farmer-register-input" name="email"/>
        <div class="farmer-register-line-box">
          <div class="farmer-register-line"></div>
        </div>
      </label>
      <br/>
      <label className="farmer-register-label">
        <p class="farmer-register-label-txt">ENTER YOUR PASSWORD</p>
        <input type="password"  onKeyDown={e => changePassword(e)} class="farmer-register-input" name="password"/>
        <input type="password"  onKeyUp={e => changePassword(e)} class="farmer-register-input" name="password"/>
        <div class="farmer-register-line-box">
          <div class="farmer-register-line"></div>
        </div>
      </label>
      <br/>
      <button className='farmer-register-button' onClick={(e) => submitForm(e)} type="submit">LOGIN</button>
    </form>
   
  </div>
  )
}
export default FarmerLogin