import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

export default function HomeBanner() {
  return (
    <>
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
    </>
  );
}
