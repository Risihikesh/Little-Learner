import React from 'react';
import { useForm } from 'react-hook-form';
import './Style.css';

const Contactmain = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div>
      <div className="container-fluid bg-primary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 400 }}
        >
          <h3 className="display-3 font-weight-bold text-white">Contact Us</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">Contact Us</p>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Contact Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Get In Touch</span>
            </p>
            <h1 className="mb-4">Contact Us For Any Query</h1>
          </div>
          <div className="row">
            <div className="col-lg-7 mb-5">
              <div className="contact-form">
                <div id="success" />
                <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={handleSubmit(onSubmit)} >
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Your Name"
                      {...register('name', { required: 'Please enter your name' })}
                    />
                    {errors.name && <p className="help-block text-danger">{errors.name.message}</p>}
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="Your Email"
                      {...register('email', { required: 'Please enter your email', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })}
                    />
                    {errors.email && <p className="help-block text-danger">{errors.email.message}</p>}
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Subject"
                      {...register('subject', { required: 'Please enter a subject' })}
                    />
                    {errors.subject && <p className="help-block text-danger">{errors.subject.message}</p>}
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control mb-2"
                      rows={6}
                      placeholder="Message"
                      {...register('message', { required: 'Please enter your message' })}
                    />
                    {errors.message && <p className="help-block text-danger">{errors.message.message}</p>}
                  </div>
                  <div>
                    <button
                      className="btn btn-primary py-2 px-4"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-5 lileft">
              <p>
              Have questions about our programs for little learners? Reach out to us for personalized assistance. 
              We’re here to help with any inquiries and provide support to ensure the best experience for your child.
              </p>
              <div className="d-flex">
                <i
                  className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                  style={{ width: 45, height: 45 }}
                />
                <div className="pl-3">
                  <h5>Address</h5>
                  <p>ABC, Delhi, India</p>
                </div>
              </div>
              <div className="d-flex">
                <i
                  className="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                  style={{ width: 45, height: 45 }}
                />
                <div className="pl-3">
                  <h5>Email</h5>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="d-flex">
                <i
                  className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                  style={{ width: 45, height: 45 }}
                />
                <div className="pl-3">
                  <h5>Phone</h5>
                  <p>+012 345 67890</p>
                </div>
              </div>
              <div className="d-flex">
                <i
                  className="far fa-clock d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                  style={{ width: 45, height: 45 }}
                />
                <div className="pl-3">
                  <h5>Opening Hours</h5>
                  <strong>Sunday - Friday:</strong>
                  <p className="m-0">08:00 AM - 05:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactmain;
