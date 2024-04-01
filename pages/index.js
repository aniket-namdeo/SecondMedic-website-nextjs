import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";

export default function Home() {
  const doctorslider = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1.5,
    },
  };
  const offerslider = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
  const blogslider = {
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
  return (
    <>
      <Header />
      <section className="banner section-padding">
        <Container>
          <Row>
            <Col>
              <Link href="#">
                <div className="d-none d-md-block">
                  <Image
                    src="/images/home-page-banner-desktop.webp"
                    width={3110}
                    height={307}
                    alt="Second Medic"
                  />
                </div>
                <div className="d-block d-md-none">
                  <Image
                    src="/images/home-page-banner-mobile.webp"
                    width={516}
                    height={209}
                    alt="Second Medic"
                  />
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="secmed-services section-padding pt-0">
        <Container>
          <Row>
            <Col lg="4">
              <h3 className="web-clr mt-5">SecondMedic Services</h3>
              <h1>Healthcare At Your Fingertips</h1>
              <p>
                From advice to recovery, we&apos;re just a touch away. Your
                health, your way, anytime, anywhere.
              </p>
              <Link href="#" className="btn web-btn with-icon">
                Explore More Services <FaArrowRight />
              </Link>
            </Col>
            <Col lg={{ span: 7, offset: 1 }}>
              <Row className="g-lg-4 g-3">
                <Col md="4" xs="6">
                  <Link href="#">
                    <div className="box purple">
                      <div className="box-img">
                        <Image
                          src="/images/video-consult.webp"
                          width={500}
                          height={500}
                          alt="24/7 Video Consult"
                        />
                      </div>
                      <div className="box-body">
                        <h4>Online 24/7 video consultation</h4>
                        <p>Always accessible</p>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col md="4" xs="6">
                  <Link href="#">
                    <div className="box green">
                      <div className="box-img">
                        <Image
                          src="/images/pharmacy.webp"
                          width={500}
                          height={500}
                          alt="Pharmacy"
                        />
                      </div>
                      <div className="box-body">
                        <h4>Pharmacy</h4>
                        <p>Instant meds solutions</p>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col md="4" xs="6">
                  <Link href="#">
                    <div className="box orange">
                      <div className="box-img">
                        <Image
                          src="/images/labtest.webp"
                          width={500}
                          height={500}
                          alt="Lab Test"
                        />
                      </div>
                      <div className="box-body">
                        <h4>Lab test</h4>
                        <p>Rapid lab analysis</p>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col md="4" xs="6">
                  <Link href="#">
                    <div className="box red">
                      <div className="box-img">
                        <Image
                          src="/images/homecare.webp"
                          width={500}
                          height={500}
                          alt="Home Care"
                        />
                      </div>
                      <div className="box-body">
                        <h4>Home care</h4>
                        <p>Your home, our care</p>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col md="4" xs="6">
                  <Link href="#">
                    <div className="box cyan">
                      <div className="box-img">
                        <Image
                          src="/images/corporatewellness.webp"
                          width={500}
                          height={500}
                          alt="Corporate Wellness"
                        />
                      </div>
                      <div className="box-body">
                        <h4>Corporate wellness</h4>
                        <p>Healthy workforce</p>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col md="4" xs="6">
                  <Link href="#">
                    <div className="box blue">
                      <div className="box-img">
                        <Image
                          src="/images/mentalhealth.webp"
                          width={500}
                          height={500}
                          alt="24/7 Video Consult"
                        />
                      </div>
                      <div className="box-body">
                        <h4>Mental health consultation</h4>
                        <p>Cultivating healthy minds</p>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="live-doctor-consultation section-padding bg-light">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">
                  <span className="badge">Live</span> Talk To A Doctor Online
                </div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h2>
              <Carousel responsive={doctorslider} arrows={true} showDots={true}>
                <div className="box slider-item">
                  <Image
                    src="/images/doctor.webp"
                    width={500}
                    height={311}
                    className="doctor-img"
                    alt="Kovid Pandey"
                  />
                  <Image
                    src="/images/live.gif"
                    width={50}
                    height={16}
                    className="live"
                    alt="Live"
                  />
                  <h4 className="price">
                    <small>Fees</small> <span>₹</span>99
                  </h4>
                  <h4 className="designation">
                    <span>General Physician</span>
                  </h4>
                  <div className="box-body">
                    <Image
                      src="/images/doc_verified.webp"
                      width={100}
                      height={33}
                      className="verified"
                      alt="Verfied Doctor"
                    />
                    <h3>
                      <span>Dr. Kovid pandey</span>
                    </h3>
                    <p>MBBS</p>
                    <ul>
                      <li>
                        <MdOutlineMedicalServices /> 5 Years
                      </li>
                      <li>
                        <IoMdGlobe /> English
                      </li>
                    </ul>
                    <div className="availability">
                      <p>Available at 16:00 to 23:59</p>
                    </div>
                    <Link
                      href="javascript:void(0);"
                      className="btn web-btn w-100"
                    >
                      Consult Now
                    </Link>
                  </div>
                </div>
                <div className="box slider-item">
                  <Image
                    src="/images/doctor.webp"
                    width={500}
                    height={311}
                    className="doctor-img"
                    alt="Kovid Pandey"
                  />
                  <Image
                    src="/images/live.gif"
                    width={50}
                    height={16}
                    className="live"
                    alt="Live"
                  />
                  <h4 className="price">
                    <small>Fees</small> <span>₹</span>99
                  </h4>
                  <h4 className="designation">
                    <span>General Physician</span>
                  </h4>
                  <div className="box-body">
                    <Image
                      src="/images/doc_verified.webp"
                      width={100}
                      height={33}
                      className="verified"
                      alt="Verfied Doctor"
                    />
                    <h3>
                      <span>Dr. Kovid pandey</span>
                    </h3>
                    <p>MBBS</p>
                    <ul>
                      <li>
                        <MdOutlineMedicalServices /> 5 Years
                      </li>
                      <li>
                        <IoMdGlobe /> English
                      </li>
                    </ul>
                    <div className="availability">
                      <p>Available at 16:00 to 23:59</p>
                    </div>
                    <Link
                      href="javascript:void(0);"
                      className="btn web-btn w-100"
                    >
                      Consult Now
                    </Link>
                  </div>
                </div>
                <div className="box slider-item">
                  <Image
                    src="/images/doctor.webp"
                    width={500}
                    height={311}
                    className="doctor-img"
                    alt="Kovid Pandey"
                  />
                  <Image
                    src="/images/live.gif"
                    width={50}
                    height={16}
                    className="live"
                    alt="Live"
                  />
                  <h4 className="price">
                    <small>Fees</small> <span>₹</span>99
                  </h4>
                  <h4 className="designation">
                    <span>General Physician</span>
                  </h4>
                  <div className="box-body">
                    <Image
                      src="/images/doc_verified.webp"
                      width={100}
                      height={33}
                      className="verified"
                      alt="Verfied Doctor"
                    />
                    <h3>
                      <span>Dr. Kovid pandey</span>
                    </h3>
                    <p>MBBS</p>
                    <ul>
                      <li>
                        <MdOutlineMedicalServices /> 5 Years
                      </li>
                      <li>
                        <IoMdGlobe /> English
                      </li>
                    </ul>
                    <div className="availability">
                      <p>Available at 16:00 to 23:59</p>
                    </div>
                    <Link
                      href="javascript:void(0);"
                      className="btn web-btn w-100"
                    >
                      Consult Now
                    </Link>
                  </div>
                </div>
                <div className="box slider-item">
                  <Image
                    src="/images/doctor.webp"
                    width={500}
                    height={311}
                    className="doctor-img"
                    alt="Kovid Pandey"
                  />
                  <Image
                    src="/images/live.gif"
                    width={50}
                    height={16}
                    className="live"
                    alt="Live"
                  />
                  <h4 className="price">
                    <small>Fees</small> <span>₹</span>99
                  </h4>
                  <h4 className="designation">
                    <span>General Physician</span>
                  </h4>
                  <div className="box-body">
                    <Image
                      src="/images/doc_verified.webp"
                      width={100}
                      height={33}
                      className="verified"
                      alt="Verfied Doctor"
                    />
                    <h3>
                      <span>Dr. Kovid pandey</span>
                    </h3>
                    <p>MBBS</p>
                    <ul>
                      <li>
                        <MdOutlineMedicalServices /> 5 Years
                      </li>
                      <li>
                        <IoMdGlobe /> English
                      </li>
                    </ul>
                    <div className="availability">
                      <p>Available at 16:00 to 23:59</p>
                    </div>
                    <Link
                      href="javascript:void(0);"
                      className="btn web-btn w-100"
                    >
                      Consult Now
                    </Link>
                  </div>
                </div>
                <div className="box slider-item">
                  <Image
                    src="/images/doctor.webp"
                    width={500}
                    height={311}
                    className="doctor-img"
                    alt="Kovid Pandey"
                  />
                  <Image
                    src="/images/live.gif"
                    width={50}
                    height={16}
                    className="live"
                    alt="Live"
                  />
                  <h4 className="price">
                    <small>Fees</small> <span>₹</span>99
                  </h4>
                  <h4 className="designation">
                    <span>General Physician</span>
                  </h4>
                  <div className="box-body">
                    <Image
                      src="/images/doc_verified.webp"
                      width={100}
                      height={33}
                      className="verified"
                      alt="Verfied Doctor"
                    />
                    <h3>
                      <span>Dr. Kovid pandey</span>
                    </h3>
                    <p>MBBS</p>
                    <ul>
                      <li>
                        <MdOutlineMedicalServices /> 5 Years
                      </li>
                      <li>
                        <IoMdGlobe /> English
                      </li>
                    </ul>
                    <div className="availability">
                      <p>Available at 16:00 to 23:59</p>
                    </div>
                    <Link
                      href="javascript:void(0);"
                      className="btn web-btn w-100"
                    >
                      Consult Now
                    </Link>
                  </div>
                </div>
                <div className="box slider-item">
                  <Image
                    src="/images/doctor.webp"
                    width={500}
                    height={311}
                    className="doctor-img"
                    alt="Kovid Pandey"
                  />
                  <Image
                    src="/images/live.gif"
                    width={50}
                    height={16}
                    className="live"
                    alt="Live"
                  />
                  <h4 className="price">
                    <small>Fees</small> <span>₹</span>99
                  </h4>
                  <h4 className="designation">
                    <span>General Physician</span>
                  </h4>
                  <div className="box-body">
                    <Image
                      src="/images/doc_verified.webp"
                      width={100}
                      height={33}
                      className="verified"
                      alt="Verfied Doctor"
                    />
                    <h3>
                      <span>Dr. Kovid pandey</span>
                    </h3>
                    <p>MBBS</p>
                    <ul>
                      <li>
                        <MdOutlineMedicalServices /> 5 Years
                      </li>
                      <li>
                        <IoMdGlobe /> English
                      </li>
                    </ul>
                    <div className="availability">
                      <p>Available at 16:00 to 23:59</p>
                    </div>
                    <Link
                      href="javascript:void(0);"
                      className="btn web-btn w-100"
                    >
                      Consult Now
                    </Link>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="offers section-padding">
        <Container>
          <Row>
            <Col>
              <Carousel responsive={offerslider} arrows={true} showDots={true}>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/offer1.webp"
                      width={700}
                      height={386}
                      alt="Second Medic Offers"
                    />
                  </Link>
                </div>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/offer2.webp"
                      width={700}
                      height={386}
                      alt="Second Medic Offers"
                    />
                  </Link>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="health-blogs section-padding pt-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">Health Blogs</div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h2>
              <Carousel responsive={blogslider} arrows={true} showDots={true}>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/blog.webp"
                      width={500}
                      height={312}
                      className="img-box"
                      alt="Second Medic Offers"
                    />
                  </Link>
                  <div className="box-body">
                    <Link href="#">
                      <h3>How to set health and wellness goals</h3>
                    </Link>
                    <p>
                      Would you like to have more energy but feel sleepy? Do you
                      wish you had more energy for everyday living? If
                      you&apos;ve been thinking about changing for the better
                      but don&apos;t know where to begin, you&apos;re not
                    </p>
                  </div>
                </div>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/blog.webp"
                      width={500}
                      height={312}
                      className="img-box"
                      alt="Second Medic Offers"
                    />
                  </Link>
                  <div className="box-body">
                    <Link href="#">
                      <h3>How to set health and wellness goals</h3>
                    </Link>
                    <p>
                      Would you like to have more energy but feel sleepy? Do you
                      wish you had more energy for everyday living? If
                      you&apos;ve been thinking about changing for the better
                      but don&apos;t know where to begin, you&apos;re not
                    </p>
                  </div>
                </div>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/blog.webp"
                      width={500}
                      height={312}
                      className="img-box"
                      alt="Second Medic Offers"
                    />
                  </Link>
                  <div className="box-body">
                    <Link href="#">
                      <h3>How to set health and wellness goals</h3>
                    </Link>
                    <p>
                      Would you like to have more energy but feel sleepy? Do you
                      wish you had more energy for everyday living? If
                      you&apos;ve been thinking about changing for the better
                      but don&apos;t know where to begin, you&apos;re not
                    </p>
                  </div>
                </div>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/blog.webp"
                      width={500}
                      height={312}
                      className="img-box"
                      alt="Second Medic Offers"
                    />
                  </Link>
                  <div className="box-body">
                    <Link href="#">
                      <h3>How to set health and wellness goals</h3>
                    </Link>
                    <p>
                      Would you like to have more energy but feel sleepy? Do you
                      wish you had more energy for everyday living? If
                      you&apos;ve been thinking about changing for the better
                      but don&apos;t know where to begin, you&apos;re not
                    </p>
                  </div>
                </div>
                <div className="box slider-item">
                  <Link href="#">
                    <Image
                      src="/images/blog.webp"
                      width={500}
                      height={312}
                      className="img-box"
                      alt="Second Medic Offers"
                    />
                  </Link>
                  <div className="box-body">
                    <Link href="#">
                      <h3>How to set health and wellness goals</h3>
                    </Link>
                    <p>
                      Would you like to have more energy but feel sleepy? Do you
                      wish you had more energy for everyday living? If
                      you&apos;ve been thinking about changing for the better
                      but don&apos;t know where to begin, you&apos;re not
                    </p>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="download-our-app-new section-padding">
        <Container>
          <Row>
            <Col>
              <div className="box">
                <Row>
                  <Col md={6}>
                    <h3>
                      Download Our App &amp; Get Consultation from anywhere.
                    </h3>
                    <ul className="download-links">
                      <li className="d-none d-md-inline-block">
                        <Image
                          src="/images/playstore-qr.webp"
                          width={200}
                          height={200}
                          className="qr"
                          alt="playstore qr"
                        />
                      </li>
                      <li className="d-none d-md-inline-block">
                        <Image
                          src="/images/appstore-qr.webp"
                          width={200}
                          height={200}
                          className="qr"
                          alt="appstore qr"
                        />
                      </li>
                      <li>
                        <Link
                          href="#"
                          target="_blank"
                          className="d-md-block d-inline-block mb-md-2 mb-0 me-md-0 me-2"
                        >
                          <Image
                            src="/images/playstore.webp"
                            width={400}
                            height={120}
                            alt="Playstore"
                          />
                        </Link>
                        <Link href="#" target="_blank">
                          <Image
                            src="/images/appstore.webp"
                            width={400}
                            height={120}
                            alt="Appstore"
                          />
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <Image
                      src="/images/mobile.webp"
                      width={600}
                      height={553}
                      className="download-img"
                      alt="App Download"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
