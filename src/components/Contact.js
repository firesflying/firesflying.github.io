import React from 'react';
import './Contact.css';



export default function Contact() {

  return ( 
   <>
        <div className='my-2 bgcentimg justify-content-center' style={{minHeight: "665px"}}>
          <div className="container ">
          
          <h1 className=' my-4  text-light'>Contact Us</h1>
          <form target="_blank" action="https://formsubmit.co/akashprajapati27@gmail.com" method="POST">
            <div className="form-group my-2">
              <div className="form-row d-flex responsive flex-wrap">
                <div className="col-md-6 my-2 rowStyle">
                  <input type="text" name="name" className="form-control" placeholder="Full Name"  required/>
                </div>
                 <div className="col-md-6 my-2 rowStyle">
                  <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                </div>
              </div>
            </div>
            <div className="form-group my-2 rowStyle responsive form-row d-flex">
              <textarea placeholder="Your Message" className="form-control" name="message" rows="8"  required></textarea>
            </div>
            <button type="submit" className="btn btn-lg  btn-light btn-block mx-3">Submit</button>
          </form>
        </div>

          </div>
          
    </>
  )
}
