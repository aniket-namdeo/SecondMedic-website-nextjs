import CommonButton from "../button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function ServicesSection() {
  return (
    <>
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
              <CommonButton
                buttonName="Explore More Services"
                buttonIcon={<FaArrowRight />}
                buttonClass="btn web-btn with-icon"
                buttonLink="#"
              />
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
    </>
  );
}
