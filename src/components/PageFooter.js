import { Divider } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom'
// import '@fortawesome/fontawesome-free/css/all.min.css';



export default function PageFooter() {
  return (
    <>
        <div className="my-2">

<footer className="bg-dark text-center text-white">

<div className="container p-4 pb-0">

  {/* <section className="mb-4">

    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-facebook-f"></i
    ></a>

 
    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-twitter"></i
    ></a>


    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-google"></i
    ></a>

 
    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-instagram"></i
    ></a>

  
    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-linkedin-in"></i
    ></a>

 
    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-github"></i
    ></a>
  </section> */}

</div>
<div>
  <Link to="/term-and-condition">Term & Condition</Link>
  <Divider type='vertical'/>
  <Link  to="/privacy-policy">Privacy Policy</Link>
  <Divider type='vertical'/>
  <Link to="/disclaimer-details">Disclaimer</Link>

</div>


<div className="text-center p-3" >
  © 2022 Copyright:
  <a className="text-white" href="https://FiresFlying.Shop/"> FiresFlying.shop </a>
</div>

</footer>

</div>

    </>
  )
}
