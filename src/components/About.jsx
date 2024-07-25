import about1 from './image/about-1.jpg'
import about2 from './image/about-2.jpg'
import team1 from './image/team-1.jpg'
import team2 from './image/team-2.jpg'
import team3 from './image/team-3.jpg'
import team4 from './image/team-4.jpg'





import React from 'react'
import './Style.css'
const AboutPage = () => {
  return (
    <div>
      <div className="container-fluid bg-primary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 800 }}
        >
          <h3 className="display-3  font-weight-bold text-white">About Us</h3>
      
          <p className="mt-2 text-white  bold">

            Founded in 2000, our school began with a vision to create a nurturing and innovative learning environment for children. Over the years, we've grown from a small community school into a leading educational institution, dedicated to providing excellence in education.
          </p>

          <h3 className="display-3 mt-5 font-weight-bold text-white">Our Vision</h3>

      <p className="mt-2 text-white  bold">

      To be a leading institution in fostering lifelong learning and personal development, empowering every child to achieve their fullest potential and become confident, compassionate, and successful individuals.      
          </p>
          <h3 className="display-3 mt-5 font-weight-bold text-white">Our Mission</h3>
      <p className="mt-2 text-white bold">

      Our mission is to provide a supportive and stimulating educational environment that encourages curiosity, creativity, and critical thinking. We are committed to personalized learning, academic excellence, and holistic development, ensuring every child is prepared for future success.
          </p>
        </div>
      </div>
      {/* Header End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-5 mb-lg-0"
                src={about1}
                alt=""
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
      {/* Facilities Start */}
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
      {/* Facilities Start */}
      {/* Team Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Our Teachers</span>
            </p>
            <h1 className="mb-4">Meet Our Teachers</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div
                className="position-relative overflow-hidden mb-4"
                style={{ borderRadius: "100%" }}
              >
                <img className="img-fluid w-100" src={team1} alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://x.com/home" target='_blank'
                  >
                    <i className="fab fa-x-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://www.facebook.com/" target='_blank'
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-light text-center px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://www.linkedin.com/in/risihikesh/" target='_blank'
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <h4>Julia Smith</h4>
              <i>Music Teacher</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div
                className="position-relative overflow-hidden mb-4"
                style={{ borderRadius: "100%" }}
              >
                <img className="img-fluid w-100" src={team2} alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://x.com/home" target='_blank'
                  >
                    <i className="fab fa-x-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://www.facebook.com/" target='_blank'
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-light text-center px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://www.linkedin.com/in/risihikesh/" target='_blank'
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <h4>Jhon Doe</h4>
              <i>Language Teacher</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div
                className="position-relative overflow-hidden mb-4"
                style={{ borderRadius: "100%" }}
              >
                <img className="img-fluid w-100" src={team3} alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://x.com/home" target='_blank'
                  >
                    <i className="fab fa-x-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://www.facebook.com/" target='_blank'
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-light text-center px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://www.linkedin.com/in/risihikesh/" target='_blank'
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <h4>Mollie Ross</h4>
              <i>Dance Teacher</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div
                className="position-relative overflow-hidden mb-4"
                style={{ borderRadius: "100%" }}
              >
                <img className="img-fluid w-100" src={team4} alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://x.com/home" target='_blank'
                  >
                    <i className="fab fa-x-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://www.facebook.com/" target='_blank'
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-light text-center px-0"
                    style={{ width: 38, height: 38 }}
                    href="https://www.linkedin.com/in/risihikesh/" target='_blank'
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <h4>Donald John</h4>
              <i>Art Teacher</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage