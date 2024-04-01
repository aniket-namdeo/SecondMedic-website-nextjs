import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { FiHeart } from "react-icons/fi";

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
  const categoryslider = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 3,
    },
  };
  const vendorslider = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 3,
    },
  };
  const productslider = {
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
      items: 2,
    },
  };
  return (
    <>
      <Header />
      <section className="pharmacy-banner">
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
                    src="/images/pharmacy-slider.webp"
                    width={1100}
                    height={253}
                    alt="Second Medic"
                    className="d-none d-md-block"
                  />
                  <Image
                    src="/images/pharmacy-slider-mobile.webp"
                    width={660}
                    height={268}
                    alt="Second Medic"
                    className="d-block d-md-none"
                  />
                </div>
                <div className="slider-item">
                  <Image
                    src="/images/pharmacy-slider.webp"
                    width={1100}
                    height={253}
                    alt="Second Medic"
                    className="d-none d-md-block"
                  />
                  <Image
                    src="/images/pharmacy-slider-mobile.webp"
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
                <div className="prescription-box">
                  <h4>Order with prescription</h4>
                  <Link href="#" className="btn web-btn">
                    Upload Prescription
                  </Link>
                </div>
                <hr className="d-none d-md-block" />
                <h4>Difficulty on finding products?</h4>
                <div className="row g-3">
                  <div className="col-6">
                    <Link href="tel:+918447748545" className="contact-boxes">
                      <div className="circle">
                        <HiOutlinePhone />
                      </div>
                      <p>Call Us</p>
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link href="#" className="contact-boxes" target="_blank">
                      <div className="circle">
                        <FaWhatsapp />
                      </div>
                      <p>Whatsapp</p>
                    </Link>
                  </div>
                </div>
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
              <Breadcrumb.Item active>Pharmacy</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Container>
      </section>
      <section className="small-section-padding pharmacy-categories">
        <Container>
          <Row>
            <Col>
              <h1 className="section-heading with-btn">
                <div className="heading">Secondmedic Pharmacy</div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h1>
              <Carousel
                responsive={categoryslider}
                arrows={true}
                showDots={true}
                className="category-slider"
              >
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-section-padding pharmacy-vendors bg-light">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading">Vendors</h2>
              <Carousel
                responsive={vendorslider}
                arrows={true}
                showDots={true}
                className="vendor-slider"
              >
                <div className="slider-item">
                  <Link href="#">
                    <div className="circle">
                      <Image
                        src="/images/rusan.webp"
                        width={130}
                        height={130}
                        alt="Second Medic"
                      />
                    </div>
                    <p>Rusan</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <div className="circle">
                      <Image
                        src="/images/rusan.webp"
                        width={130}
                        height={130}
                        alt="Second Medic"
                      />
                    </div>
                    <p>Rusan</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <div className="circle">
                      <Image
                        src="/images/rusan.webp"
                        width={130}
                        height={130}
                        alt="Second Medic"
                      />
                    </div>
                    <p>Rusan</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <div className="circle">
                      <Image
                        src="/images/rusan.webp"
                        width={130}
                        height={130}
                        alt="Second Medic"
                      />
                    </div>
                    <p>Rusan</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <div className="circle">
                      <Image
                        src="/images/rusan.webp"
                        width={130}
                        height={130}
                        alt="Second Medic"
                      />
                    </div>
                    <p>Rusan</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <div className="circle">
                      <Image
                        src="/images/rusan.webp"
                        width={130}
                        height={130}
                        alt="Second Medic"
                      />
                    </div>
                    <p>Rusan</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <div className="circle">
                      <Image
                        src="/images/rusan.webp"
                        width={130}
                        height={130}
                        alt="Second Medic"
                      />
                    </div>
                    <p>Rusan</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <div className="circle">
                      <Image
                        src="/images/rusan.webp"
                        width={130}
                        height={130}
                        alt="Second Medic"
                      />
                    </div>
                    <p>Rusan</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <div className="circle">
                      <Image
                        src="/images/rusan.webp"
                        width={130}
                        height={130}
                        alt="Second Medic"
                      />
                    </div>
                    <p>Rusan</p>
                  </Link>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-section-padding pharmacy-categories pb-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading">Health Concern</h2>
              <Carousel
                responsive={categoryslider}
                arrows={true}
                showDots={true}
                className="category-slider"
              >
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
                <div className="slider-item">
                  <Link href="#">
                    <Image
                      src="/images/personalcare.webp"
                      width={130}
                      height={130}
                      alt="Second Medic"
                    />
                    <p>Personal Care</p>
                  </Link>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="small-section-padding pharmacy-products pb-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">Popular Products</div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h2>
              <Carousel
                responsive={productslider}
                arrows={true}
                showDots={true}
                className="product-slider"
              >
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-section-padding pharmacy-products pb-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">
                  Top deals of pain relief and cough & cold
                </div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h2>
              <Carousel
                responsive={productslider}
                arrows={true}
                showDots={true}
                className="product-slider"
              >
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-section-padding pharmacy-products pb-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">Medical Equipment</div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h2>
              <Carousel
                responsive={productslider}
                arrows={true}
                showDots={true}
                className="product-slider"
              >
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-section-padding pharmacy-products pb-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">Diabetic</div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h2>
              <Carousel
                responsive={productslider}
                arrows={true}
                showDots={true}
                className="product-slider"
              >
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-section-padding pharmacy-products pb-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">Immunity</div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h2>
              <Carousel
                responsive={productslider}
                arrows={true}
                showDots={true}
                className="product-slider"
              >
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-section-padding pharmacy-products pb-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">Season wise</div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h2>
              <Carousel
                responsive={productslider}
                arrows={true}
                showDots={true}
                className="product-slider"
              >
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-section-padding pharmacy-products pb-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">In the spotlight</div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h2>
              <Carousel
                responsive={productslider}
                arrows={true}
                showDots={true}
                className="product-slider"
              >
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-section-padding pharmacy-products pb-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">Top Ayurvedic</div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h2>
              <Carousel
                responsive={productslider}
                arrows={true}
                showDots={true}
                className="product-slider"
              >
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-section-padding pharmacy-products">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">Super specialty drugs</div>
                <Link href="#" className="btn web-btn2 with-icon">
                  View All <FaArrowRight />
                </Link>
              </h2>
              <Carousel
                responsive={productslider}
                arrows={true}
                showDots={true}
                className="product-slider"
              >
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="pharmacy-product-box">
                    <small className="alert alert-success">
                      <b>5.00% Off</b>
                    </small>
                    <Link href="#" tabindex="-1">
                      <Image
                        src="/images/product.webp"
                        width={200}
                        height={200}
                        alt="Second Medic"
                        className="product-img"
                      />
                      <Image
                        src="/images/brand.webp"
                        width={100}
                        height={34}
                        alt="Second Medic"
                        className="vendor-logo"
                      />
                    </Link>
                    <div className="box-content">
                      <Link href="#" className="wishlist-icon">
                        <FiHeart />
                      </Link>
                      <h3 className="title">
                        <Link href="#">
                          Dexolac 1 Infant Formula Refill Pack 400gm
                        </Link>
                      </h3>
                      <p>
                        Brand: <b>DawaaDost</b>
                      </p>
                      <h4 className="price">
                        <small>
                          <del>₹430.00</del>
                        </small>
                        <span> ₹408.50</span>
                      </h4>
                      <a href="#" className="btn web-btn w-100">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
