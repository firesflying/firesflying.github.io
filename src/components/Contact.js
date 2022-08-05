import React from 'react';
import './Contact.css';



export default function Contact() {

  return ( 
   <>
        <div className='my-2 bgcentimg justify-content-center' style={{minHeight: "665px"}}>
          <div className="container ">
          
          <h1 className=' my-4 mx-3 text-light'>Contact Us</h1>
          <form target="_blank" action="https://formsubmit.co/akashprajapati27@gmail.com" method="POST">
            <div className="form-group my-2">
              <div className="form-row d-flex responsive">
                <div className="col my-2 mx-3">
                  <input type="text" name="name" className="form-control" placeholder="Full Name"  required/>
                </div>
                <div className="col my-2 mx-3">
                  <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                </div>
              </div>
            </div>
            <div className="form-group my-2 mx-3">
              <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
            </div>
            <button type="submit" className="btn btn-lg  btn-light btn-block mx-3">Submit</button>
          </form>
        </div>

          </div>
          
    </>
  )
}
