import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function DownloadSection() {
  return (
    <>
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
    </>
  );
}
