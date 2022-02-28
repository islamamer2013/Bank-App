import React from "react";
import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
class Navbar extends React.Component {
  // constructor(props){
  //   super(props)
  // }
    render() {
      return (

<div >
<nav className="navbar navbar-expand-lg bg-transparent text-uppercase fixed-top">
  <div className="container-fluid">
      <div>
    <Link className="navbar-brand js-scroll-trigger text-dark fw-bolder fs-3" to="home">Spark Bank</Link>
    </div>
    <div>
    <button className="navbar-toggler  navbar-toggler-right text-uppercase font-weight-bold  text-dark rounded collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars"></i>
          </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-0 mx-lg-1">
          <Link className="navbar-brand js-scroll-trigger text-dark fw-bolder fs-5" aria-current="page" to="customers">Customer</Link>
        </li>
        <li className="nav-item mx-0 mx-lg-1">
          <Link className="navbar-brand js-scroll-trigger text-dark fw-bolder fs-5" to="transaction">Transaction</Link>
        </li>
        <li className="nav-item mx-0 mx-lg-1">
        <Link className="navbar-brand js-scroll-trigger text-dark fw-bolder fs-5" to="about">About</Link>
        </li>
      </ul>

    </div>
    </div>
  </div>
</nav>

 </div>
      ) ;
    }
  }
  
  export default Navbar;
//   <nav className="navbar navbar-expand-lg bg-light text-uppercase fixed-top" id="mainNav" >
//   <div className="container">
//       <img src="../Img/logo.png" className=""/>
//       <Link className="navbar-brand js-scroll-trigger text-dark fw-bolder fs-3" href="#page-top">Spark Bank</Link>
//       <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-dark rounded collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//           Menu
//           <li className="svg-inline--fa fa-bars fa-w-14" ></li>
//       </button>
//       <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
//           <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0">
//               <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-dark fw-bolder fs-5" href="#portfolio">Customers</Link></li>
//               <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-dark fw-bolder fs-5" href="#about">Transfer Money</Link></li>
//               <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-dark fw-bolder fs-5" href="#contact">Contact</Link></li>
//           </ul>
//       </div>
//   </div>
// </nav>