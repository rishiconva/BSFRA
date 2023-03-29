import React from 'react'
import img1 from '../../assets/img/illustrations/hero-header.png' 
import img2 from '../../assets/img/gallery/logo-icon.png'
import img3 from '../../assets/img/gallery/short-terms.png'
import img4 from '../../assets/img/gallery/fully-funded.png'
import img5 from '../../assets/img/gallery/user-1.png'
import img6 from '../../assets/img/gallery/user-2.png'
import img7 from '../../assets/img/gallery/user-3.png'
import img8 from '../../assets/img/icons/farmer.svg'
import img9 from '../../assets/img/icons/growth.svg'
import img10 from '../../assets/img/icons/planting.svg'
import img11 from '../../assets/img/illustrations/bg.png'
import img12 from '../../assets/img/illustrations/footer-bg.png'
import img13 from '../../assets/img/illustrations/hero-bg.png'
import img14 from '../../assets/img/illustrations/hero-header.png'
import img15 from '../../assets/img/illustrations/how-it-works.png'
import img16 from '../../assets/img/illustrations/opportunities-bg.png'
import img17 from '../../assets/img/illustrations/testimonial-bg.png'




const Home = () => {
  return (
    <div>
           
 
      <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light opacity-85" data-navbar-on-scroll="data-navbar-on-scroll">
        <div class="container"><a class="navbar-brand" href="index.html"><img class="d-inline-block align-top img-fluid" src={img2} alt="" width="50" /><span class="text-theme font-monospace fs-4 ps-2">AgriChain</span></a>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item px-2"><a class="nav-link fw-medium active" aria-current="page" href="/">Home</a></li>
              <li class="nav-item px-2"><a class="nav-link fw-medium" href="#Opportuanities">Opportunities</a></li>
              <li class="nav-item px-2"><a class="nav-link fw-medium" href="#testimonial">Testimonial</a></li>
              <li class="nav-item px-2"><a class="nav-link fw-medium" href="#invest">Invest</a></li>
              <li class="nav-item px-2"><a class="nav-link fw-medium" href="#contact">Contact </a></li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-lg btn-dark bg-gradient order-0" type="submit" style={{marginRight: `20px`}}>Login</button>
              <button class="btn btn-lg btn-dark bg-gradient order-0" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </nav>
      <section class="py-0" id="header">
        <div class="bg-holder d-none d-md-block" style={{ backgroundImage: `url(${img1})` , height: `800px`}} >
          <div class="container">
            <div class="row align-items-center min-vh-75 min-vh-lg-100">
              <div class="col-md-7 col-lg-6 col-xxl-5 py-6 text-sm-start text-center" style={{marginTop: `80px`}}>
                <h1 class="mt-6 mb-sm-4 fw-semi-bold " style={{marginTop: `50px`}}>A New Way to Invest <br class="d-block d-lg-block" />in Agriculture</h1>
                <p class="mb-4 fs-4" style={{marginTop: `40px` , marginBottom: `50px`}}>AgriChain provides farmers,<br></br> ranchers, private foresters, <br></br>and agricultural producers with<br></br> online self service applications.<br></br></p><a class="btn btn-lg btn-success" href="#" role="button">Invest Now</a>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section class="py-5" id="Opportunities">
        <div class="bg-holder d-none d-sm-block" style= {{ backgroundImage: `url(${img11})` , backgroundPosition:`top left`,backgroundSize:`225px 755px` }}>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-9 mx-auto text-center mb-3">
              <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">New Opportunities</h5>
              <p class="mb-5">We are leveraging towards the crowdfunding platform enabling you to help purchase products of our farmers directly at your doorstep. No middle-men involved!!!</p>
            </div>
          </div>
          <div class="row flex-center h-100">
            <div class="col-xl-9">
              <div class="row">
                <div class="col-md-4 mb-5">
                  <div class="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                    <div class="text-center text-md-start card-hover" style={{marginTop: `15px`}}><img class="ps-3 icons" src={img8} height="60" alt="" />
                      <div class="card-body">
                        <h6 class="fw-bold fs-1 heading-color">Connect with farmers</h6>
                        <p class="mt-3 mb-md-0 mb-lg-2">Products from the farmers. The best handpicked items, directly to your home.</p>
                        <h5>Continue as customer</h5>
                        <a class="btn btn-lg btn-success" style={{ marginRight: `20px`, marginTop: `16px`}} href="/customerRegister" role="button">Sign up</a>
                        <a class="btn btn-lg btn-success" href="/customerProfile" style={{ marginTop: `16px` }} role="button">Login</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-5">
                  <div class="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                    <div class="text-center text-md-start card-hover" style={{ marginTop: `15px` }}><img class="ps-3 icons" src={img9} height="60" alt="" />
                      <div class="card-body">
                        <h6 class="fw-bold fs-1 heading-color">Grow your business</h6>
                        <p class="mt-3 mb-md-0 mb-lg-2">Register yourself with our website and sell your products online, Save expenses and chaos from having middle-men involved.</p>
                        <h5>Continue as farmer</h5>
                        <a class="btn btn-lg btn-success" style={{ marginRight: `20px`, marginTop: `16px`}} href="/farmerRegister" role="button">Sign up</a>
                        <a class="btn btn-lg btn-success" style={{ marginTop: `16px` }} href="/farmerProfile" role="button">Login</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-5">
                  <div class="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                    <div class="text-center text-md-start card-hover" style={{ marginTop: `15px` }}><img class="ps-3 icons" src={img10} height="60" alt="" />
                      <div class="card-body">
                        <h6 class="fw-bold fs-1 heading-color">Optimum Delivery Endpoints</h6>
                        <p class="mt-3 mb-md-0 mb-lg-2">Have the products delivered totally safely, and completely afresh. Explore Now!!</p>
                        <h5>Continue as distributor</h5>
                        <a class="btn btn-lg btn-success" style={{marginRight: `20px` , marginTop: `16px`}} href="#" role="button">Sign up</a>
                        <a class="btn btn-lg btn-success" href="#" role="button" style={{marginTop: `16px`}}>Login</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5" id="invest">

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-9 mb-3">
              <div class="row">
                <div class="col-lg-9 mb-3">
                  <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Invest on your convenience</h5>
                  <p class="mb-5">Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla</p>
                </div>
                <div class="col-md-6 mb-5">
                  <div class="card text-white"><img class="card-img" src={img3} alt="..." />
                    <div class="card-img-overlay d-flex flex-column justify-content-center px-5 px-md-3 px-lg-5 bg-dark-gradient">
                      <h6 class="text-success pt-2">NEW FARM TODAY</h6>
                      <hr class="text-white" style={{height:'0.12rem',width:'2.813rem'}} />
                      <div class="pt-lg-3">
                        <h6 class="fw-bold text-white fs-1 fs-md-2 fs-lg-3 w-xxl-50">Short terms investment</h6>
                        <p class="w-xxl-75">Invest in farms that will be ready for harvest in 3-18 months</p>
                        <button class="btn btn-lg btn-light text-success" type="button">Browse Farm</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-5">
                  <div class="card text-white"><img class="card-img" src={img4} alt="..." />
                    <div class="card-img-overlay d-flex flex-column justify-content-center px-5 px-md-3 px-lg-5 bg-light-gradient">
                      <h6 class="text-success pt-2">FULLY FUNDED</h6>
                      <hr class="text-white" style={{height:'0.12rem',width:'2.813rem'}} />
                      <div class="pt-lg-3">
                        <h6 class="fw-bold text-white fs-1 fs-md-2 fs-lg-3 w-xxl-50">Long terms investment</h6>
                        <p class="w-xxl-75">Consider farms that have long term investment program.</p>
                        <button class="btn btn-lg btn-light text-success" type="button">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    


      <section class="py-0">
        <div class="bg-holder" style={{backgroundImage: `url(${img15})`, backgroundPosition:'center bottom' ,backgroundSize:'cover'}}>
        </div>

      </section>
      <section class="py-8" id="testimonial">
        <div class="container-lg">
          <div class="row flex-center">
            <div class="col-12 col-lg-10 col-xl-12">
              <div class="bg-holder" style={{backgroundImage: `url(${img17})` , backgroundPosition:'top left',backgroundSize:'120px 83px'}}>
              </div>

              <h6 class="fs-3 fs-lg-4 fw-bold lh-sm">What investors like you <br />are saying about AgriChain</h6>
            </div>
            <div class="carousel slide pt-3" id="carouselExampleDark" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <div class="row h-100 mx-3 mx-sm-5 mx-md-4 my-md-7 m-lg-7 mt-7">
                    <div class="col-md-4 mb-5 mb-md-0">
                      <div class="card h-100 shadow">
                        <div class="card-body my-3">
                          <div class="align-items-xl-center d-block d-xl-flex px-3"><img class="img-fluid me-3 me-md-2 me-lg-3" src={img5} width="50" alt="" />
                            <div class="flex-1 align-items-center pt-2">
                              <h5 class="mb-0 fw-bold text-success">Fernando Soler</h5>
                              <p class="fw-normal text-black">Telecommunication Engineer</p>
                            </div>
                          </div>
                          <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-5 mb-md-0">
                      <div class="card h-100 shadow">
                        <div class="card-body my-3">
                          <div class="align-items-xl-center d-block d-xl-flex px-3"><img class="img-fluid me-3 me-md-2 me-lg-3" src={img6} width="50" alt="" />
                            <div class="flex-1 align-items-center pt-2">
                              <h5 class="mb-0 fw-bold text-success">Ilone Pickford</h5>
                              <p class="fw-normal text-black">Head of Agrogofund </p>
                            </div>
                          </div>
                          <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-5 mb-md-0">
                      <div class="card h-100 shadow">
                        <div class="card-body my-3">
                          <div class="align-items-xl-center d-block d-xl-flex px-3"><img class="img-fluid me-3 me-md-2 me-lg-3" src={img7} width="50" alt="" />
                            <div class="flex-1 align-items-center pt-2">
                              <h5 class="mb-0 fw-bold text-success">Ed O’Brien</h5>
                              <p class="fw-normal text-black">Herbalist</p>
                            </div>
                          </div>
                          <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div class="row h-100 mx-3 mx-sm-5 mx-md-4 my-md-7 m-lg-7 mt-7">
                    <div class="col-md-4 mb-5 mb-md-0">
                      <div class="card h-100 shadow">
                        <div class="card-body my-3">
                          <div class="align-items-xl-center d-block d-xl-flex px-3"><img class="img-fluid me-3 me-md-2 me-lg-3" src={img5} width="50" alt="" />
                            <div class="flex-1 align-items-center pt-2">
                              <h5 class="mb-0 fw-bold text-success">Fernando Soler</h5>
                              <p class="fw-normal text-black">Telecommunication Engineer</p>
                            </div>
                          </div>
                          <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-5 mb-md-0">
                      <div class="card h-100 shadow">
                        <div class="card-body my-3">
                          <div class="align-items-xl-center d-block d-xl-flex px-3"><img class="img-fluid me-3 me-md-2 me-lg-3" src={img6} width="50" alt="" />
                            <div class="flex-1 align-items-center pt-2">
                              <h5 class="mb-0 fw-bold text-success">Ilone Pickford</h5>
                              <p class="fw-normal text-black">Head of Agrogofund Groups </p>
                            </div>
                          </div>
                          <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-5 mb-md-0">
                      <div class="card h-100 shadow">
                        <div class="card-body my-3">
                          <div class="align-items-xl-center d-block d-xl-flex px-3"><img class="img-fluid me-3 me-md-2 me-lg-3" src={img7} width="50" alt="" />
                            <div class="flex-1 align-items-center pt-2">
                              <h5 class="mb-0 fw-bold text-success">Ed O’Brien</h5>
                              <p class="fw-normal text-black">Herbalist</p>
                            </div>
                          </div>
                          <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;Ui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row h-100 mx-3 mx-sm-5 mx-md-4 my-md-7 m-lg-7 mt-7">
                    <div class="col-md-4 mb-5 mb-md-0">
                      <div class="card h-100 shadow">
                        <div class="card-body my-3">
                          <div class="align-items-xl-center d-block d-xl-flex px-3"><img class="img-fluid me-3 me-md-2 me-lg-3" src={img5} width="50" alt="" />
                            <div class="flex-1 align-items-center pt-2">
                              <h5 class="mb-0 fw-bold text-success">Fernando Soler</h5>
                              <p class="fw-normal text-black">Telecommunication Engineer</p>
                            </div>
                          </div>
                          <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-5 mb-md-0">
                      <div class="card h-100 shadow">
                        <div class="card-body my-3">
                          <div class="align-items-xl-center d-block d-xl-flex px-3"><img class="img-fluid me-3 me-md-2 me-lg-3" src={img6} width="50" alt="" />
                            <div class="flex-1 align-items-center pt-2">
                              <h5 class="mb-0 fw-bold text-success">Ilone Pickford</h5>
                              <p class="fw-normal text-black">Head of Agrogofund Groups </p>
                            </div>
                          </div>
                          <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-5 mb-md-0">
                      <div class="card h-100 shadow">
                        <div class="card-body my-3">
                          <div class="align-items-xl-center d-block d-xl-flex px-3"><img class="img-fluid me-3 me-md-2 me-lg-3" src={img7} width="50" alt="" />
                            <div class="flex-1 align-items-center pt-2">
                              <h5 class="mb-0 fw-bold text-success">Ed O’Brien</h5>
                              <p class="fw-normal text-black">Herbalist</p>
                            </div>
                          </div>
                          <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;Ui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row px-3 px-sm-6 px-md-0 px-lg-5 px-xl-4">
                <div class="col-12 position-relative"><a class="carousel-control-prev carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class=" cta" style = {{marginTop: `50px`}}>

        <div class="container" style={{marginBottom: `50px`}}>
          <div class="row flex-center">
            <div class="col-12">
              <div class="card shadow h-100 py-5">
                <div class="card-body text-center">
                  <h1 class="fw-semi-bold mb-4">The future of &nbsp;<span class="text-success">Farm Investing</span> &nbsp; is AgriChain</h1><a class="btn btn-lg btn-success px-6" href="#" role="button">Invest Now</a>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </div>

      </section>
      


      
       

    </div>
  )
}

export default Home