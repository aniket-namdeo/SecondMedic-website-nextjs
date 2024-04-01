import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function OffersSlider() {
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
  return (
    <>
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
    </>
  );
}
