import React from 'react';
import './Style.css';
import Navbar from 'react-bootstrap/Navbar';



function Footer (){
  return (
    <div>
      <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <Navbar.Brand href="#" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: 40, }}>
              <i className="flaticon-047-backpack  kidText" />
              <span className="text-white ">LittleLearner</span>
            </Navbar.Brand>
            <p>
            Little Learner Learning Center is dedicated to empowering young minds with the knowledge and skills they need to succeed.
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="https://x.com/home" target='_blank'>
                <i className="fab fa-x-twitter" />
              </a>
              <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="https://www.facebook.com/" target='_blank'>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="https://www.linkedin.com/in/risihikesh/" target='_blank'>
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="https://www.instagram.com/" target='_blank'>
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Get In Touch</h3>
            <div className="d-flex">
              <h4 className="fa fa-map-marker-alt text-primary" />
              <div className="pl-3">
                <h5 className="text-white">Address</h5>
                <p>ABC, Delhi, India</p>
              </div>
            </div>
            <div className="d-flex">
              <h4 className="fa fa-envelope text-primary" />
              <div className="pl-3">
                <h5 className="text-white">Email</h5>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="d-flex">
              <h4 className="fa fa-phone-alt text-primary" />
              <div className="pl-3">
                <h5 className="text-white">Phone</h5>
                <p>+012 345 67890</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Quick Links</h3>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Home
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                About Us
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Our Classes
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Our Teachers
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Our Blog
              </a>
              <a className="text-white" href="#">
                <i className="fa fa-angle-right mr-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Newsletter</h3>
            <form action="">
              <div className="form-group">
                <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control border-0 py-4" placeholder="Your Email" required="required" />
              </div>
              <div>
                <button className="btn btn-primary btn-block border-0 py-3" type="submit">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    
    </div>
  );
};

export default Footer;
