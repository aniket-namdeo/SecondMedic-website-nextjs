import { useState } from "react";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import CommonButton from "@/pages/components/button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import Image from "next/image";
import { FaFilter } from "react-icons/fa6";
import { FaSortAmountUp } from "react-icons/fa";
import { Button } from "react-bootstrap";
import OffcanvasSort from "./OffcanvasSort";
import OffcanvasFilter from "./OffcanvasFilter";

export default function PharmacyListing() {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [showOffcanvasSort, setShowOffcanvasSort] = useState(false);
  const [showOffcanvasFilter, setShowOffcanvasFilter] = useState(false);

  const handleCloseOffcanvasSort = () => setShowOffcanvasSort(false);
  const handleShowOffcanvasSort = () => setShowOffcanvasSort(true);

  const handleCloseOffcanvasFilter = () => setShowOffcanvasFilter(false);
  const handleShowOffcanvasFilter = () => setShowOffcanvasFilter(true);

  return (
    <>
      <Header />
      <section className="breadcrumb-section">
        <Container>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Pharmacy</Breadcrumb.Item>
              <Breadcrumb.Item active>Listing</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Container>
      </section>
      <section className="pharmacy-listing small-section-padding">
        <Container>
          <Row>
            <Col lg={3} md={4}>
              <div className="card filters d-none d-md-block">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h1 className="heading web-clr">Filters</h1>
                  <Link href="#">Clear Filters</Link>
                </div>
                <div className="card-body">
                  <h2 className="filter-h mt-0">Vendors</h2>
                  <ul className="filter-list web-overflow">
                    {data.map((details, index) => {
                      return (
                        <>
                          <li>
                            <div className="custom-radio">
                              <input
                                type="radio"
                                name="vendor"
                                id={`/vendors/${details}`}
                                hidden
                              />
                              <label for={`/vendors/${details}`}>
                                Wellness Forever
                              </label>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                  <h2 className="filter-h">Categories</h2>
                  <ul className="filter-list web-overflow">
                    {data.map((details, index) => {
                      return (
                        <>
                          <li>
                            <div className="custom-radio">
                              <input
                                type="radio"
                                name="categories"
                                id={`/categories/${details}`}
                                hidden
                              />
                              <label for={`/categories/${details}`}>
                                Baby & Mom Care
                              </label>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                  <h2 className="filter-h">Health Concern</h2>
                  <ul className="filter-list web-overflow">
                    {data.map((details, index) => {
                      return (
                        <>
                          <li>
                            <div className="custom-radio">
                              <input
                                type="radio"
                                name="healthconcern"
                                id={`/healthconcern/${details}`}
                                hidden
                              />
                              <label for={`/healthconcern/${details}`}>
                                Diabetic Care
                              </label>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={9} md={8}>
              <Row className="d-none d-md-flex">
                <Col lg={8} md={6}>
                  <h2 className="section-heading">SecondMedic</h2>
                </Col>
                <Col lg={4} md={6}>
                  <div className="sortby d-flex align-items-center gap-3">
                    <label for="sortby">Sort By</label>
                    <Form.Select id="sortby">
                      <option>Relevances</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </Form.Select>
                  </div>
                </Col>
              </Row>
              <div className="mobile-sort-and-filter d-flex d-md-none">
                <Button onClick={handleShowOffcanvasSort}>
                  <FaSortAmountUp />
                  Sort by: Relevances
                </Button>
                <Button onClick={handleShowOffcanvasFilter}>
                  <FaFilter />
                  Filters
                </Button>
              </div>

              <OffcanvasSort
                show={showOffcanvasSort}
                handleClose={handleCloseOffcanvasSort}
              />
              <OffcanvasFilter
                show={showOffcanvasFilter}
                handleClose={handleCloseOffcanvasFilter}
              />

              <Row className="g-3">
                {data.map((details, index) => {
                  return (
                    <>
                      <Col lg={3} md={6} xs={6} key={index}>
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
                            <CommonButton
                              buttonName="View Details"
                              buttonClass="btn web-btn w-100"
                              buttonLink="#"
                            />
                          </div>
                        </div>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
