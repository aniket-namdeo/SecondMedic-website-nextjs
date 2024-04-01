import CommonButton from "../button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";

export default function DoctorSlider() {
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
  return (
    <>
      <section className="live-doctor-consultation section-padding bg-light">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">
                  <span className="badge">Live</span> Talk To A Doctor Online
                </div>
                <CommonButton
                  buttonName="View All"
                  buttonIcon={<FaArrowRight />}
                  buttonClass="btn web-btn2 with-icon"
                  buttonLink="#"
                />
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
                    <CommonButton
                      buttonName="Consult Now"
                      buttonClass="btn web-btn w-100"
                      buttonLink="javascript:void(0);"
                    />
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
                    <CommonButton
                      buttonName="Consult Now"
                      buttonClass="btn web-btn w-100"
                      buttonLink="javascript:void(0);"
                    />
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
                    <CommonButton
                      buttonName="Consult Now"
                      buttonClass="btn web-btn w-100"
                      buttonLink="javascript:void(0);"
                    />
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
                    <CommonButton
                      buttonName="Consult Now"
                      buttonClass="btn web-btn w-100"
                      buttonLink="javascript:void(0);"
                    />
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
                    <CommonButton
                      buttonName="Consult Now"
                      buttonClass="btn web-btn w-100"
                      buttonLink="javascript:void(0);"
                    />
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
                    <CommonButton
                      buttonName="Consult Now"
                      buttonClass="btn web-btn w-100"
                      buttonLink="javascript:void(0);"
                    />
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
