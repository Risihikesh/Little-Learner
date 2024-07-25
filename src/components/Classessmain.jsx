
import class1 from './image/class-1.jpg'
import class2 from './image/class-2.jpg'
import class3 from './image/class-3.jpg'




import React from 'react'
import './Style.css'
const Classessmain = () => {
  return (
    <div>
          <div className="container-fluid bg-primary mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 400 }}
    >
      <h3 className="display-3 font-weight-bold text-white">Our Classes</h3>
      <div className="d-inline-flex text-white">
        <p className="m-0">
          <a className="text-white" href="">
            Home
          </a>
        </p>
        <p className="m-0 px-2">/</p>
        <p className="m-0">Our Classes</p>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Class Start */}
  <div className="container-fluid pt-5">
    <div className="container">
      <div className="text-center pb-2">
        <p className="section-title px-5">
          <span className="px-2">Popular Classes</span>
        </p>
        <h1 className="mb-4">Classes for Your Kids</h1>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-5">
          <div className="card border-0 bg-light shadow-sm pb-2">
            <img className="card-img-top mb-2" src={class1} alt="" />
            <div className="card-body text-center">
              <h4 className="card-title">Drawing Class</h4>
              <p className="card-text">
              Foster creativity and fine motor skills through engaging drawing activities. Ideal for young artists to explore their imagination.
              </p>
            </div>
            <div className="card-footer bg-transparent py-4 px-5">
              <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Age of Kids</strong>
                </div>
                <div className="col-6 py-1">3 - 6 Years</div>
              </div>
              <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Total Seats</strong>
                </div>
                <div className="col-6 py-1">40 Seats</div>
              </div>
              <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Class Time</strong>
                </div>
                <div className="col-6 py-1">08:00 - 10:00</div>
              </div>
              <div className="row">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Tution Fee</strong>
                </div>
                <div className="col-6 py-1">₹2900 / Month</div>
              </div>
            </div>
            <a href="" className="btn btn-primary px-4 mx-auto mb-4">
              Join Now
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-5">
          <div className="card border-0 bg-light shadow-sm pb-2">
            <img className="card-img-top mb-2" src={class2} alt="" />
            <div className="card-body text-center">
              <h4 className="card-title">Language Learning</h4>
              <p className="card-text">
              Enhance early language skills with interactive sessions designed to build vocabulary and communication abilities in young children.
              </p>
            </div>
            <div className="card-footer bg-transparent py-4 px-5">
              <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Age of Kids</strong>
                </div>
                <div className="col-6 py-1">3 - 6 Years</div>
              </div>
              <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Total Seats</strong>
                </div>
                <div className="col-6 py-1">40 Seats</div>
              </div>
              <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Class Time</strong>
                </div>
                <div className="col-6 py-1">08:00 - 10:00</div>
              </div>
              <div className="row">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Tution Fee</strong>
                </div>
                <div className="col-6 py-1">₹2900 / Month</div>
              </div>
            </div>
            <a href="" className="btn btn-primary px-4 mx-auto mb-4">
              Join Now
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-5">
          <div className="card border-0 bg-light shadow-sm pb-2">
            <img className="card-img-top mb-2" src={class3} alt="" />
            <div className="card-body text-center">
              <h4 className="card-title">Basic Science</h4>
              <p className="card-text">
              Introduce fundamental science concepts through hands-on experiments and activities, sparking curiosity and a love for discovery.
              </p>
            </div>
            <div className="card-footer bg-transparent py-4 px-5">
              <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Age of Kids</strong>
                </div>
                <div className="col-6 py-1">3 - 6 Years</div>
              </div>
              <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Total Seats</strong>
                </div>
                <div className="col-6 py-1">40 Seats</div>
              </div>
              <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Class Time</strong>
                </div>
                <div className="col-6 py-1">08:00 - 10:00</div>
              </div>
              <div className="row">
                <div className="col-6 py-1 text-right border-right">
                  <strong>Tution Fee</strong>
                </div>
                <div className="col-6 py-1">₹2900 / Month</div>
              </div>
            </div>
            <a href="" className="btn btn-primary px-4 mx-auto mb-4">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Class End */}
  {/* Registration Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 mb-5 mb-lg-0">
          <p className="section-title pr-5">
            <span className="pr-2">Book A Seat</span>
          </p>
          <h1 className="mb-4">Book A Seat For Your Kid</h1>
          <p>
          Secure a spot for your child in our nurturing, growth-focused environment. Benefit from personalized learning and dedicated support.
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
          <a href="" className="btn btn-primary mt-4 py-2 px-4">
            Book Now
          </a>
        </div>
        <div className="col-lg-5">
          <div className="card border-0">
            <div className="card-header bg-secondary text-center p-4">
              <h1 className="text-white m-0">Book A Seat</h1>
            </div>
            <div className="card-body rounded-bottom bg-primary p-5">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-0 p-4"
                    placeholder="Your Name"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control border-0 p-4"
                    placeholder="Your Email"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="custom-select border-0 px-4"
                    style={{ height: 47 }}
                  >
                    <option selected="">Select A Class</option>
                    <option value={1}>Class 1</option>
                    <option value={2}>Class 1</option>
                    <option value={3}>Class 1</option>
                  </select>
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
    </div>
  )
}

export default Classessmain