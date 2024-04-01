import CommonButton from "../button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight } from "react-icons/fa6";

export default function BlogSlider() {
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
      <section className="health-blogs section-padding pt-0">
        <Container>
          <Row>
            <Col>
              <h2 className="section-heading with-btn">
                <div className="heading">Health Blogs</div>
                <CommonButton
                  buttonName="View All"
                  buttonIcon={<FaArrowRight />}
                  buttonClass="btn web-btn2 with-icon"
                  buttonLink="#"
                />
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
    </>
  );
}
