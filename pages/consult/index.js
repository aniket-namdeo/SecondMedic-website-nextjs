import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import CommonButton from "../components/button";
import DoctorSlider from "../components/doctor-slider";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  const bannerslider = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  const BlogSlider = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };

  const bestDoctor = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };

  const trustedDoctor = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Header />
      <section className="pharmacy-banner doctor-consult-banner">
        <Container>
          <Row>
            <Col lg={9} md={6}>
              <Carousel
                responsive={bannerslider}
                arrows={true}
                showDots={true}
                className="banner-slider"
              >
                <div className="slider-item">
                  <Image
                    src="/images/consult-banner.webp"
                    width={1100}
                    height={253}
                    alt="Second Medic"
                    className="d-none d-md-block"
                  />
                  <Image
                    src="/images/consult-banner-mobile.webp"
                    width={660}
                    height={268}
                    alt="Second Medic"
                    className="d-block d-md-none"
                  />
                </div>
                <div className="slider-item">
                  <Image
                    src="/images/consult-banner.webp"
                    width={1100}
                    height={253}
                    alt="Second Medic"
                    className="d-none d-md-block"
                  />
                  <Image
                    src="/images/consult-banner-mobile.webp"
                    width={660}
                    height={268}
                    alt="Second Medic"
                    className="d-block d-md-none"
                  />
                </div>
              </Carousel>
            </Col>
            <Col lg={3} md={6}>
              <div className="right-box">
                <div className="top-badge">@₹149</div>
                <Image
                  src="/images/doctor-consult-banner-icon.webp"
                  width={100}
                  height={100}
                  alt="Second Medic"
                  className="banner-right-icon"
                />
                <h4>
                  <span>24*7</span> Video Consult
                </h4>
                <Link href="" className="btn web-btn w-100">
                  Consult Now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="breadcrumb-section">
        <Container>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Consult Doctors</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Container>
      </section>

      <DoctorSlider />

      <section className="video-consultation-landing-banner section-padding">
        <Container>
          <div className="box py-md-0">
            <Row className="align-items-center">
              <Col md={7} xs={12}>
                <div className="content_img">
                  <div className="my_content">
                    <h2 className="font-weight-bold">
                      SecondMedic 24/7 Video Consultation
                    </h2>
                    <hLink className="font-weight-bold web-clr">
                      Care that Fits Your Life - Anytime, Anywhere
                    </hLink>
                    <Link className="btn web-btn text-white mb-0" href="#">
                      Instant Video Consultation
                    </Link>
                  </div>
                  <Image
                    src="/images/offer-149.webp"
                    alt="Offer Image"
                    width={150}
                    height={150}
                  ></Image>
                </div>
              </Col>
              <Col md={5}>
                <Image
                  src="/images/video-consultation.webp"
                  width={376}
                  height={251}
                  className="float-right"
                  alt="Girl Image"
                ></Image>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="abha-create-now section-padding pt-0">
        <Container>
          <Row>
            <Col xs={12}>
              <Link href="#">
                <div className="box">
                  <Row className="align-items-center">
                    <Col lg={2} md={4} className="text-center">
                      <Image
                        src="/images/nha.svg"
                        className="nha-logo"
                        alt="NHA"
                        width={124}
                        height={55}
                      />
                    </Col>
                    <Col lg={7} md={8}>
                      <div className="text">
                        <h4>Create Your ABHA Health ID</h4>
                        <p>
                          Create ABHA Health ID and build health profiles for
                          you and your family members.
                        </p>
                      </div>
                    </Col>
                    <Col lg={3}>
                      <Image
                        src="/images/healthid.webp"
                        className="right-img d-none d-lg-block"
                        alt="Health ID"
                        width={270}
                        height={200}
                      />
                    </Col>
                  </Row>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="consult-doctor-searchbar d-md-block d-none">
        <Container>
          <form action="https://www.secondmedic.com/app/doctors" method="get">
            <Row>
              <Col lg={3} md={4} xs={6}>
                <select
                  required=""
                  className="form-control form-select"
                  name="searchby"
                  id="searchby"
                >
                  <option value="" selected="" disabled="">
                    Search by
                  </option>
                  <option value="1">City</option>
                  <option value="2">State</option>
                </select>
              </Col>
              <Col lg={3} md={4} xs={6} id="cityshow">
                <select
                  className="form-control form-select"
                  name="city"
                  id="city"
                  required=""
                >
                  <option value="" selected="" disabled="">
                    Select City
                  </option>
                  <option value="Zirakpur"> Zirakpur </option>
                  <option value="Zunheboto"> Zunheboto </option>{" "}
                </select>
              </Col>
              <Col lg={3} md={4} id="stateshow" className="d-none">
                <select
                  className="form-control form-select"
                  name="state"
                  id="state"
                >
                  <option value="" selected="" disabled="">
                    {" "}
                    Select State{" "}
                  </option>
                  <option value="32"> Andaman and Nicobar Islands </option>
                  <option value="12"> Andhra Pradesh </option>
                  <option value="33"> Arunachal Pradesh </option>
                  <option value="18"> Assam </option>
                  <option value="10"> Bihar </option>
                  <option value="19"> Chandigarh </option>
                  <option value="17"> Chhattisgarh </option>
                  <option value="34"> Dadra and Nagar Haveli </option>
                  <option value="2"> Delhi </option>
                  <option value="31"> Goa </option>
                  <option value="4"> Gujarat </option>
                </select>
              </Col>
              <Col lg={4} md={4}>
                <select
                  className="form-control form-select"
                  name="speciality"
                  id="speciality"
                  required=""
                >
                  <option value="" selected="" disabled="">
                    Select Speciality
                  </option>
                  <option value="anaesthesia">Anaesthesia</option>
                  <option value="ayurveda-ayurvedic-medicine">
                    Ayurveda / Ayurvedic Medicine
                  </option>
                </select>
              </Col>
              <Col
                lg={{ span: 2, offset: 0 }}
                md={{ span: 2, offset: 5 }}
                xs={{ span: 4, offset: 4 }}
              >
                <input
                  type="submit"
                  className="btn web-btn w-100"
                  value="Search"
                />
              </Col>
            </Row>
          </form>
        </Container>
      </section>

      <section className="health-blogs section-padding pt-0 doctor-specialties">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">By Specialties</div>
                {/* <p className="sub-heading">
                    We provide only verified and best specialist for your better
                    health
                  </p> */}
                <CommonButton
                  buttonName="View All"
                  buttonIcon={<FaArrowRight />}
                  buttonClass="btn web-btn2 with-icon"
                  buttonLink="#"
                />
              </h2>
              <Carousel responsive={BlogSlider} arrows={true} showDots={true}>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/speciality.webp"
                      width={500}
                      height={312}
                      className="img-box"
                      alt="Second Medic Offers"
                    />
                  </Link>
                  <div className="box-body">
                    <Link href="#">
                      <h3>General Medicine</h3>
                    </Link>
                    <p>Get best General Physician</p>
                  </div>
                </div>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/speciality.webp"
                      width={500}
                      height={312}
                      className="img-box"
                      alt="Second Medic Offers"
                    />
                  </Link>
                  <div className="box-body">
                    <Link href="#">
                      <h3>Cardiology / Heart disease</h3>
                    </Link>
                    <p>Get best Cardiologist</p>
                  </div>
                </div>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/speciality.webp"
                      width={500}
                      height={312}
                      className="img-box"
                      alt="Second Medic Offers"
                    />
                  </Link>
                  <div className="box-body">
                    <Link href="#">
                      <h3>Bariatric / Weight Reduction Surgery</h3>
                    </Link>
                    <p>Get best Gastroenterologist</p>
                  </div>
                </div>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/speciality.webp"
                      width={500}
                      height={312}
                      className="img-box"
                      alt="Second Medic Offers"
                    />
                  </Link>
                  <div className="box-body">
                    <Link href="#">
                      <h3>Cancer / Oncology / Cancer Surgery</h3>
                    </Link>
                    <p>Get best Oncologist</p>
                  </div>
                </div>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/speciality.webp"
                      width={500}
                      height={312}
                      className="img-box"
                      alt="Second Medic Offers"
                    />
                  </Link>
                  <div className="box-body">
                    <Link href="#">
                      <h3>Breast Surgery</h3>
                    </Link>
                    <p>Get best General Surgeon</p>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="consult-best-doctors section-padding pt-0">
        <Container>
          <Row>
            <Col xl={12}>
              <h2 className="section-heading">
                <div>
                  Consult Doctors Online For Any Health Concern
                  <p className="sub-heading">
                    Phone/Video Call or chat privately with verified doctors
                  </p>
                </div>
              </h2>
              <Carousel responsive={bestDoctor} arrows={true} showDots={true}>
                <div className="slider-item">
                  <div className="box">
                    <Image
                      src="/images/best-doc-icon.webp"
                      alt="Diabetes, BP, Fever, Corona Symptom"
                      width={100}
                      height={100}
                    />
                    <p className="box-h">Diabetes, BP, Fever, Corona Symptom</p>
                    <p className="price web-clr">₹ 249</p>
                    <Link href="#" className="btn web-btn w-100">
                      Consult Now
                    </Link>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="box">
                    <Image
                      src="/images/best-doc-icon.webp"
                      alt="Diabetes, BP, Fever, Corona Symptom"
                      width={100}
                      height={100}
                    />
                    <p className="box-h">Diabetes, BP, Fever, Corona Symptom</p>
                    <p className="price web-clr">₹ 249</p>
                    <Link href="#" className="btn web-btn w-100">
                      Consult Now
                    </Link>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="box">
                    <Image
                      src="/images/best-doc-icon.webp"
                      alt="Diabetes, BP, Fever, Corona Symptom"
                      width={100}
                      height={100}
                    />
                    <p className="box-h">Diabetes, BP, Fever, Corona Symptom</p>
                    <p className="price web-clr">₹ 249</p>
                    <Link href="#" className="btn web-btn w-100">
                      Consult Now
                    </Link>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="box">
                    <Image
                      src="/images/best-doc-icon.webp"
                      alt="Diabetes, BP, Fever, Corona Symptom"
                      width={100}
                      height={100}
                    />
                    <p className="box-h">Diabetes, BP, Fever, Corona Symptom</p>
                    <p className="price web-clr">₹ 249</p>
                    <Link href="#" className="btn web-btn w-100">
                      Consult Now
                    </Link>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="box">
                    <Image
                      src="/images/best-doc-icon.webp"
                      alt="Diabetes, BP, Fever, Corona Symptom"
                      width={100}
                      height={100}
                    />
                    <p className="box-h">Diabetes, BP, Fever, Corona Symptom</p>
                    <p className="price web-clr">₹ 249</p>
                    <Link href="#" className="btn web-btn w-100">
                      Consult Now
                    </Link>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="box">
                    <Image
                      src="/images/best-doc-icon.webp"
                      alt="Diabetes, BP, Fever, Corona Symptom"
                      width={100}
                      height={100}
                    />
                    <p className="box-h">Diabetes, BP, Fever, Corona Symptom</p>
                    <p className="price web-clr">₹ 249</p>
                    <Link href="#" className="btn web-btn w-100">
                      Consult Now
                    </Link>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="box">
                    <Image
                      src="/images/best-doc-icon.webp"
                      alt="Diabetes, BP, Fever, Corona Symptom"
                      width={100}
                      height={100}
                    />
                    <p className="box-h">Diabetes, BP, Fever, Corona Symptom</p>
                    <p className="price web-clr">₹ 249</p>
                    <Link href="#" className="btn web-btn w-100">
                      Consult Now
                    </Link>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="consultdoctor-doctors section-padding pt-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">
                  Consultation With Our Most Trusted Doctors
                </div>
                <CommonButton
                  buttonName="View All"
                  buttonIcon={<FaArrowRight />}
                  buttonClass="btn web-btn2 with-icon"
                  buttonLink="#"
                />
              </h2>
              <Carousel
                responsive={trustedDoctor}
                arrows={true}
                showDots={true}
              >
                <div className="slider-item">
                  <div className="box">
                    <div className="box-top">
                      <div className="dr-img">
                        <Image
                          src="/images/trust-doc.webp"
                          alt="Rakesh Rai"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="dr-details">
                        <h5>
                          <span>Rakesh Rai</span>
                          <Image
                            src="/images/doc_verified.webp"
                            className="verified"
                            alt="verified"
                            width={60.66}
                            height={20}
                          />
                        </h5>
                        <p className="dr-info">
                          MBBS . MS (Mumbai), FRCS (Edinburgh),.MD (UK). FRCS
                          (Intercollegiate, UK), CCST (UK), Transplant Surgery,
                          Gastrointestinal Specialist{" "}
                        </p>
                        <ul className="dr-exp">
                          <li>
                            <i
                              className="fas fa-briefcase-medical"
                              aria-hidden="true"
                            ></i>{" "}
                            24 Years
                          </li>
                          <li>
                            <i className="fas fa-globe" aria-hidden="true"></i>{" "}
                            English
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div className="box-bottom">
                      <p>
                        Available at <br />
                        <b>11:00 AM to 06:00 PM</b>
                      </p>
                      <p>
                        Consultation fees <br />
                        <b>₹ 200</b>
                      </p>
                    </div>
                    <Link href="#" className="btn web-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="box">
                    <div className="box-top">
                      <div className="dr-img">
                        <Image
                          src="/images/trust-doc.webp"
                          alt="Rakesh Rai"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="dr-details">
                        <h5>
                          <span>Rakesh Rai</span>
                          <Image
                            src="/images/doc_verified.webp"
                            className="verified"
                            alt="verified"
                            width={60.66}
                            height={20}
                          />
                        </h5>
                        <p className="dr-info">
                          MBBS . MS (Mumbai), FRCS (Edinburgh),.MD (UK). FRCS
                          (Intercollegiate, UK), CCST (UK), Transplant Surgery,
                          Gastrointestinal Specialist{" "}
                        </p>
                        <ul className="dr-exp">
                          <li>
                            <i
                              className="fas fa-briefcase-medical"
                              aria-hidden="true"
                            ></i>{" "}
                            24 Years
                          </li>
                          <li>
                            <i className="fas fa-globe" aria-hidden="true"></i>{" "}
                            English
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div className="box-bottom">
                      <p>
                        Available at <br />
                        <b>11:00 AM to 06:00 PM</b>
                      </p>
                      <p>
                        Consultation fees <br />
                        <b>₹ 200</b>
                      </p>
                    </div>
                    <Link href="#" className="btn web-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="box">
                    <div className="box-top">
                      <div className="dr-img">
                        <Image
                          src="/images/trust-doc.webp"
                          alt="Rakesh Rai"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="dr-details">
                        <h5>
                          <span>Rakesh Rai</span>
                          <Image
                            src="/images/doc_verified.webp"
                            className="verified"
                            alt="verified"
                            width={60.66}
                            height={20}
                          />
                        </h5>
                        <p className="dr-info">
                          MBBS . MS (Mumbai), FRCS (Edinburgh),.MD (UK). FRCS
                          (Intercollegiate, UK), CCST (UK), Transplant Surgery,
                          Gastrointestinal Specialist{" "}
                        </p>
                        <ul className="dr-exp">
                          <li>
                            <i
                              className="fas fa-briefcase-medical"
                              aria-hidden="true"
                            ></i>{" "}
                            24 Years
                          </li>
                          <li>
                            <i className="fas fa-globe" aria-hidden="true"></i>{" "}
                            English
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div className="box-bottom">
                      <p>
                        Available at <br />
                        <b>11:00 AM to 06:00 PM</b>
                      </p>
                      <p>
                        Consultation fees <br />
                        <b>₹ 200</b>
                      </p>
                    </div>
                    <Link href="#" className="btn web-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="box">
                    <div className="box-top">
                      <div className="dr-img">
                        <Image
                          src="/images/trust-doc.webp"
                          alt="Rakesh Rai"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="dr-details">
                        <h5>
                          <span>Rakesh Rai</span>
                          <Image
                            src="/images/doc_verified.webp"
                            className="verified"
                            alt="verified"
                            width={60.66}
                            height={20}
                          />
                        </h5>
                        <p className="dr-info">
                          MBBS . MS (Mumbai), FRCS (Edinburgh),.MD (UK). FRCS
                          (Intercollegiate, UK), CCST (UK), Transplant Surgery,
                          Gastrointestinal Specialist{" "}
                        </p>
                        <ul className="dr-exp">
                          <li>
                            <i
                              className="fas fa-briefcase-medical"
                              aria-hidden="true"
                            ></i>{" "}
                            24 Years
                          </li>
                          <li>
                            <i className="fas fa-globe" aria-hidden="true"></i>{" "}
                            English
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div className="box-bottom">
                      <p>
                        Available at <br />
                        <b>11:00 AM to 06:00 PM</b>
                      </p>
                      <p>
                        Consultation fees <br />
                        <b>₹ 200</b>
                      </p>
                    </div>
                    <Link href="#" className="btn web-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="howitworks section-padding pt-0">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="web-h">
                <h2>How It Works?</h2>
              </div>
            </Col>
            <Col lg={3} md={3} xs={6} className="col-lg-3 col-md-3 col-6">
              <div className="box">
                <div className="icon">
                  <Image
                    src="/images/howitworks/doctor.webp"
                    alt="Select your doctor"
                    width={74.09}
                    height={83}
                  />
                </div>
                <div className="howitworkscontent">
                  <h3>Select your doctor</h3>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} xs={6}>
              <div className="box">
                <div className="icon">
                  <Image
                    src="/images/howitworks/payment.webp"
                    alt="Select your doctor"
                    width={74.09}
                    height={83}
                  />
                </div>
                <div className="howitworkscontent">
                  <h3>Make Payment</h3>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} xs={6}>
              <div className="box">
                <div className="icon">
                  <Image
                    src="/images/howitworks/doctor-consult.webp"
                    alt="Select your doctor"
                    width={74.09}
                    height={83}
                  />
                </div>
                <div className="howitworkscontent">
                  <h3>Doctor Consultation</h3>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} xs={6}>
              <div className="box no-border">
                <div className="icon">
                  <Image
                    src="/images/howitworks/prescription.webp"
                    alt="Select your doctor"
                    width={74.09}
                    height={83}
                  />
                </div>
                <div className="howitworkscontent">
                  <h3>Get Prescription</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="intro-section bg-light section-padding">
        <Container>
          <Row>
            <Col lg={12}>
              <p></p>
              <p>
                In today's fast-paced world, accessing quality healthcare has
                never been easier, thanks to live doctor consultations. Whether
                you're at home, at work, or on the go, you can connect with
                experienced healthcare providers through online doctor
                consultations. This innovative approach to medical care offers
                convenience, efficiency, and comprehensive support, ensuring
                that you receive the attention and treatment you need without
                the hassle of traditional in-person visits.
              </p>
              <p>&nbsp;</p>
              <h3>What is Live Doctor Consultation?&nbsp;&nbsp;</h3>
              <p>
                Live doctor consultation, also known as online doctor
                consultation, is a service that allows patients to interact with
                medical professionals in real-time via digital platforms. Using
                video calls, chat, or phone calls, you can discuss your
                symptoms, receive a diagnosis, and get a treatment plan tailored
                to your needs. This method of doctor consultation online is
                designed to bring healthcare directly to you, eliminating the
                need for travel and long waiting times.
              </p>
              <p>&nbsp;</p>
              <h3>Benefits of Online Doctor Consultation</h3>
              <ul>
                <li>
                  <p>Convenience and Accessibility</p>
                </li>
              </ul>
              <p>
                Online consultations provide the flexibility to schedule
                appointments at your convenience, making it easier to fit
                healthcare into your busy life. You can access medical advice
                from the comfort of your home, reducing the stress and time
                associated with clinic visits.
              </p>
              <ul>
                <li>
                  <p>Timely Medical Attention</p>
                </li>
              </ul>
              <p>
                With live doctor consultations, you can quickly get in touch
                with healthcare professionals for immediate concerns. This
                timely access can prevent minor health issues from escalating
                into serious conditions, ensuring prompt and effective
                treatment.
              </p>
              <ul>
                <li>
                  <p>Cost-Effective</p>
                </li>
              </ul>
              <p>
                Online consultations often reduce the costs related to travel,
                childcare, and taking time off work. Many telehealth services
                offer competitive pricing, making healthcare more affordable and
                accessible to a broader audience.
              </p>
              <ul>
                <li>
                  <p>Privacy and Comfort</p>
                </li>
              </ul>
              <p>
                Consulting with a doctor online offers a private and comfortable
                setting to discuss sensitive health issues. This can lead to
                more open communication and a better understanding of your
                health concerns.
              </p>
              <ul>
                <li>
                  <p>Continuous Care</p>
                </li>
              </ul>
              <p>
                Online doctor consultations support continuous and comprehensive
                healthcare. Follow-up appointments and regular check-ins can be
                managed easily through online platforms, ensuring that you stay
                on track with your treatment plan.
              </p>
              <p>&nbsp;</p>
              <h3>How to Access Online Consultations</h3>
              <p>
                <strong>
                  Accessing online consultations is straightforward:
                </strong>
              </p>
              <ul>
                <li>
                  <p>
                    Schedule an Appointment: Use a healthcare app or website to
                    book a time that suits you.
                  </p>
                </li>
                <li>
                  <p>
                    Connect Online: At the scheduled time, connect with your
                    doctor via video call, chat, or phone.
                  </p>
                </li>
                <li>
                  <p>
                    Receive Care: Discuss your health issues, receive a
                    diagnosis, and get a personalized treatment plan.
                  </p>
                </li>
                <li>
                  <p>
                    Follow Up: Schedule follow-up appointments as needed to
                    monitor your progress and adjust your treatment plan.
                  </p>
                </li>
              </ul>
              <p>&nbsp;</p>
              <h3>Why Choose Live Doctor Consultation?&nbsp;&nbsp;</h3>
              <p>
                Choosing live doctor consultation for your healthcare needs
                provides numerous advantages, particularly in today's digital
                age. It breaks down geographical barriers, making healthcare
                accessible to those in remote or underserved areas.
                Additionally, it supports a proactive approach to health,
                encouraging regular check-ups and preventive care.
              </p>
              <p></p>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
