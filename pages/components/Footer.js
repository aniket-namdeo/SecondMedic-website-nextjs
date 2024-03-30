import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="new-design-footer">
        <section className="new-footer-top">
          <Container>
            <Row>
              <Col md={5}>
                <Link href="#">
                  <Image
                    src="/images/logo.webp"
                    width={600}
                    height={553}
                    className="logo"
                    alt="Secondmedic Official Logo"
                  />
                </Link>
                <p>
                  SecondMedic is a patient-centric, tech-enabled healthcare
                  ecosystem that provides dedicated health ambassadors and a
                  wide range of customized healthcare services. From booking
                  doctor appointments to delivering prescribed e-pharmacy
                  solutions, we cover all your 360-degree healthcare needs.
                </p>
                <p className="footer-heading mt-4">
                  Subscribe to our Newsletter
                </p>
                <InputGroup className="mt-2">
                  <Form.Control placeholder="Email ID" type="email" />
                  <Button className="btn web-btn" id="button-addon2">
                    Subscribe
                  </Button>
                </InputGroup>
              </Col>
              <Col md={2} xs={6} className="ps-md-4">
                <p className="footer-heading">Useful Links</p>
                <ul>
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="#">Mission</Link>
                  </li>
                  <li>
                    <Link href="#">Vision</Link>
                  </li>
                  <li>
                    <Link href="#">Career With Us</Link>
                  </li>
                </ul>
                <p className="mt-4 footer-heading">For Doctors</p>
                <ul>
                  <li>
                    <Link href="#">Search a Doctor</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Registration</Link>
                  </li>
                </ul>
              </Col>
              <Col md={2} xs={6} className="ps-md-4">
                <p className="footer-heading">Quick Links</p>
                <ul>
                  <li>
                    <Link href="#">Gallery</Link>
                  </li>
                  <li>
                    <Link href="#">Video Gallery</Link>
                  </li>
                  <li>
                    <Link href="#">Web Stories</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Testimonial</Link>
                  </li>
                  <li>
                    <Link href="#">Sample-Report</Link>
                  </li>
                  <li>
                    <Link href="#">Covid-Support</Link>
                  </li>
                  <li>
                    <Link href="#">Brochure</Link>
                  </li>
                  <li>
                    <Link href="#">FAQs / Help</Link>
                  </li>
                </ul>
              </Col>
              <Col md={3}>
                <p className="footer-heading">Contact Us</p>
                <ul className="contact-info">
                  <li>
                    <div className="icon">
                      <HiOutlineMailOpen />
                    </div>
                    <p>
                      <Link href="mailto:customer.support@secondmedic.com">
                        customer.support@secondmedic.com
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <HiOutlinePhone />
                    </div>
                    <p>
                      <Link href="tel:+918447748545">+918447748545</Link>
                    </p>
                  </li>
                </ul>
                <ul className="social-icons">
                  <li>
                    <Link
                      href="https://www.facebook.com/SecondMedicIndia/"
                      className="facebook"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/secondmedic_care/"
                      className="instagram"
                      target="_blank"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/second_medic"
                      className="twitter"
                      target="_blank"
                    >
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/secondmedic/"
                      className="linkedin"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/channel/UCycLT5PF-jl0FYrdFbkIiUQ"
                      className="youtube"
                      target="_blank"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://in.pinterest.com/secondmedic_india/"
                      className="pinterest"
                      target="_blank"
                    >
                      <FaPinterestP />
                    </Link>
                  </li>
                </ul>
                <div className="mt-3">
                  <Link
                    href="#"
                    title="DMCA.com Protection Status"
                    className="dmca-badge"
                  >
                    <Image
                      src="/images/dmca_protected.png"
                      width={121}
                      height={24}
                      alt="DMCA.com Protection Status"
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="new-footer-bottom">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <p className="m-0">
                  © 2024 SecondMedic (Remote Healthcare Technologies Private
                  Limited). All rights reserved.
                </p>
                <p className="m-0">
                  IDRAI Registered Corporate Agent (Composite) License No
                  CA0865. Valid till 20th Aug 2026
                </p>
              </Col>
              <Col lg={6}>
                <ul className="policy-menu">
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Legal Disclaimer</Link>
                  </li>
                  <li>
                    <Link href="#">HIPAA</Link>
                  </li>
                  <li>
                    <Link href="#">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
}
