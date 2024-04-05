// components/OffcanvasFilter.js
import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Offcanvas } from "react-bootstrap";
import Link from "next/link";
import { Button } from "react-bootstrap";

const OffcanvasFilter = ({ show, handleClose }) => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="bottom"
      className="filter-menu filter-menu-with-tabs"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Filters</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Tab.Container id="left-tabs-example" defaultActiveKey="vendors">
          <div className="pharmacy-filters-mobile">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="vendors">Vendors</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="categories">Categories</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="healthconcern">Health Concern</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="vendors">
                {data.map((details, index) => {
                  return (
                    <>
                      <div className="custom-radio">
                        <input
                          type="radio"
                          name="vendor"
                          id={`/mob-vendors/${details}`}
                          hidden
                        />
                        <label for={`/mob-vendors/${details}`}>
                          Wellness Forever
                        </label>
                      </div>
                    </>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane eventKey="categories">
                {data.map((details, index) => {
                  return (
                    <>
                      <div className="custom-radio">
                        <input
                          type="radio"
                          name="categories"
                          id={`/mob-categories/${details}`}
                          hidden
                        />
                        <label for={`/mob-categories/${details}`}>
                          Baby & Mom Care
                        </label>
                      </div>
                    </>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane eventKey="healthconcern">
                {data.map((details, index) => {
                  return (
                    <>
                      <div className="custom-radio">
                        <input
                          type="radio"
                          name="healthconcern"
                          id={`/mob-healthconcern/${details}`}
                          hidden
                        />
                        <label for={`/mob-healthconcern/${details}`}>
                          Diabetic Care
                        </label>
                      </div>
                    </>
                  );
                })}
              </Tab.Pane>
            </Tab.Content>
          </div>
          <div className="modal-footer">
            <Link href="#" className="btn web-btn2">
              Clear Filters
            </Link>
            <Button className="btn web-btn">Apply Filters</Button>
          </div>
        </Tab.Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasFilter;
