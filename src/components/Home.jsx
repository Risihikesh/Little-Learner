import { useForm } from "react-hook-form";
import about1 from "./image/about-1.jpg";
import about2 from "./image/about-2.jpg";
import blog1 from "./image/blog-1.jpg";
import blog2 from "./image/blog-2.jpg";
import blog3 from "./image/blog-3.jpg";
import header from "./image/header.png";



import React, { useState, useEffect } from "react";
// import axios from "axios";



function Homepage (){
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
    reset();
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [classes, setClasses] = useState("");
  

  const [dataclass, setDataclass] = useState([]);
  const [error1, setError1] = useState(null);
  

  // teacher

  const [datateacher, setDatateacher] = useState([]);
  const [error2, setError2] = useState(null);
  


  return (
    <div className="mt-5">
      <div className="container-fluid bg-primary px-0  px-md-5 mb-5">
        <div className="row align-items-center px-3">
          <div className="col-lg-6 text-center text-lg-left">
            <h4 className="text-white mb-4 mt-5 mt-lg-0">
              Kids Learning School
            </h4>
            <h1 className="display-3 font-weight-bold text-white">
              New Approach to Kids Education
            </h1>
            <p className="text-white mb-4">
              Little Learner Learning Center is dedicated to empowering young minds with the knowledge and skills they need to succeed. 
              Our comprehensive curriculum combines traditional learning with innovative methods, ensuring that each child receives a well-rounded education. 
              We are committed to helping students achieve academic excellence while developing essential life skills.
            </p>
            <a href className="btn btn-secondary mt-1 py-3 px-5">
              Learn More
            </a>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <img className="img-fluid mt-5" src={header} alt />
          </div>
        </div>
      </div>


   

      <div className="container-fluid pt-5">
        <div className="container pb-3">
          <div className="row">
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Play Ground</h4>
                  <p className="m-0">
                  Safe, fun play area for physical development, social interaction, and teamwork among kids.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-022-drum h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Music and Dance</h4>
                  <p className="m-0">
                  Promoting self-expression,  rhythm, and confidence through music and dance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-030-crayons h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Arts and Crafts</h4>
                  <p className="m-0">
                  Enhancing creativity, fine motor skills, and art appreciation with engaging hands-on projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-017-toy-car h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Safe Transportation</h4>
                  <p className="m-0">
                  Secure, comfortable transport with well-maintained buses and trained drivers for safe school travel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-025-sandwich h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Healthy food</h4>
                  <p className="m-0">
                  Nutritious, balanced meals supporting student health, fueling growing minds and bodies effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-047-backpack h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Educational Tour</h4>
                  <p className="m-0">
                  Hands-on learning excursions enriching knowledge and making education an exciting adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-5 mb-lg-0"
                src={about1}
                alt
              />
            </div>
            <div className="col-lg-7">
              <p className="section-title pr-5">
                <span className="pr-2">Learn About Us</span>
              </p>
              <h1 className="mb-4">Best School For Your Kids</h1>
              <p>
              Discover an exceptional educational environment where every child thrives. We prioritize individualized learning, growth, and excellence. Our dedicated staff nurtures a supportive atmosphere, cultivating a love for learning and helping each student achieve their full potential.
              </p>
              <div className="row pt-2 pb-4">
                <div className="col-6 col-md-4">
                  <img className="img-fluid rounded" src={about2} alt />
                </div>
                <div className="col-6 col-md-8">
                  <ul className="list-inline m-0">
                    <li className="py-2 border-top border-bottom lileft">
                      <i className="fa fa-check text-primary mr-3" />
                      Exceptional environment for thriving children.
                    </li>
                    <li className="py-2 border-bottom lileft">
                      <i className="fa fa-check text-primary mr-3" />
                      Individualized learning fostering growth and curiosity.
                    </li>
                    <li className="py-2 border-bottom lileft">
                      <i className="fa fa-check text-primary mr-3" />
                      Dedicated staff nurturing a supportive atmosphere.
                    </li>
                  </ul>
                </div>
              </div>
              <a href className="btn btn-primary mt-2 py-2 px-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About End */}
      {/* Class Start */}

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Popular Classes</span>
            </p>
            <h1 className="mb-4">Classes for Your Kids</h1>
          </div>

        </div>
      </div>


      <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <p className="section-title pr-5">
              <span className="pr-2">Book A Seat</span>
            </p>
            <h1 className="mb-4">Book A Seat For Your Kid</h1>
            <p>
              Secure a spot for your child in our nurturing, growth-focused environment. 
              Benefit from personalized learning and dedicated support.
            </p>
            <ul className="list-inline m-0">
              <li className="py-2 lileft">
                <i className="fa fa-check text-success mr-3" />
                Nurturing environment for personalized growth.
              </li>
              <li className="py-2 lileft">
                <i className="fa fa-check text-success mr-3" />
                Dedicated support for each student’s success.
              </li>
              <li className="py-2 lileft">
                <i className="fa fa-check text-success mr-3" />
                Exceptional education with focused attention.
              </li>
            </ul>
            <a href="#" className="btn btn-primary mt-4 py-2 px-4">
              Book Now
            </a>
          </div>
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-header bg-secondary text-center p-4">
                <h1 className="text-white m-0">Book A Seat</h1>
              </div>
              <div className="card-body rounded-bottom bg-primary p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Your Name"
                      {...register('name', { required: 'Please enter your name' })}
                    />
                    {errors.name && <p className="help-block text-danger">{errors.name.message}</p>}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 p-4"
                      placeholder="Your Email"
                      {...register('email', { 
                        required: 'Please enter your email', 
                        pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' }
                      })}
                    />
                    {errors.email && <p className="help-block text-danger">{errors.email.message}</p>}
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select border-0 px-4"
                      style={{ height: 47 }}
                      {...register('class', { required: 'Please select a class' })}
                    >
                      <option value="">Select A Class</option>
                      <option value="playschool">Play School</option>
                      <option value="Nursery">Nursery</option>
                      <option value="UKG">UKG</option>
                      <option value="LKG">LKG</option>
                      <option value="class1">Class 1</option>
                      <option value="class2">Class 2</option>
                      <option value="class3">Class 3</option>
                    </select>
                    {errors.class && <p className="help-block text-danger">{errors.class.message}</p>}
                  </div>
                  <div>
                    <button
                      className="btn btn-secondary btn-block border-0 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Latest Blog</span>
            </p>
            <h1 className="mb-4">Latest Articles From Blog</h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img className="card-img-top mb-2" src={blog1} alt />
                <div className="card-body bg-light text-center p-4">
                  <h4 className>Boosting Early Learning</h4>
                  <div className="d-flex justify-content-center mb-3">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary" /> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary" /> Early Development
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary" /> 15
                    </small>
                  </div>
                  <p>
                  Discover innovative activities that enhance young learners' development and make education enjoyable.
                  </p>
                  <a href className="btn btn-primary px-4 mx-auto my-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img className="card-img-top mb-2" src={blog2} alt />
                <div className="card-body bg-light text-center p-4">
                  <h4 className>Supportive Learning...</h4>
                  <div className="d-flex justify-content-center mb-3">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary" /> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary" /> Early Development
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary" /> 15
                    </small>
                  </div>
                  <p>
                  Learn how to foster a nurturing space that encourages curiosity and growth in young students.
                  </p>
                  <a href className="btn btn-primary px-4 mx-auto my-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img className="card-img-top mb-2" src={blog3} alt />
                <div className="card-body bg-light text-center p-4">
                  <h4 className>Personalized Education...</h4>
                  <div className="d-flex justify-content-center mb-3">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary" /> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary" /> Early Development
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary" /> 15
                    </small>
                  </div>
                  <p>
                  Explore how tailored educational approaches benefit early learners and support their individual needs.
                  </p>
                  <a href className="btn btn-primary px-4 mx-auto my-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  
    </div>
  );
};

export default Homepage;
