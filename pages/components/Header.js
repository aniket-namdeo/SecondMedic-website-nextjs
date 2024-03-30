import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart, FiPhoneCall, FiMenu } from "react-icons/fi";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const menuShow = () => setShow(true);
  return (
    <>
      <header>
        <section className="header-top">
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#">
                <Image
                  src="/images/logo.webp"
                  width={158}
                  height={45}
                  alt="Second Medic"
                />
              </Navbar.Brand>
              <div className="mobile-header-icons d-flex d-lg-none">
                <Link href="#">
                  <FiShoppingCart />
                  <span className="badge">2</span>
                </Link>
                <Link href="#" onClick={menuShow}>
                  <FiMenu />
                </Link>
              </div>
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                  <NavDropdown
                    title="Consult Doctors"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#">
                      Consult Doctors
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Doctor Enquiry</NavDropdown.Item>
                    <NavDropdown.Item href="#">Doctor Listing</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Doctor Registration
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Lab Test" id="navbarScrollingDropdown2">
                    <NavDropdown.Item href="#">Lab Test</NavDropdown.Item>
                    <NavDropdown.Item href="#">Radiology</NavDropdown.Item>
                    <NavDropdown.Item href="#">PET-CT</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Genetic Testing
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="#">Pharmacy</Nav.Link>

                  <Nav.Link href="#">Ask A Doctor</Nav.Link>

                  <NavDropdown title="Home Care" id="navbarScrollingDropdown3">
                    <NavDropdown.Item href="#">
                      Apollo Home Care
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Home Care</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Remote Health Monitoring
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Home Health Network
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Elder Care</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Corporate" id="navbarScrollingDropdown4">
                    <NavDropdown.Item href="#">Corporate</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Employee Assistance Program (EAP)
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Financial Wellness
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Disease Management
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="primary"
                    id="dropdown-basic"
                    className="web-btn"
                  >
                    My Account
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">My Account</Dropdown.Item>
                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </section>
        <section className="header-middle">
          <Container>
            <Row>
              <Col lg={6}>
                <InputGroup>
                  <Form.Control
                    placeholder="Search for Doctors, Clinic, Disease and Medicines"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <IoSearch />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
              <Col lg={6}>
                <ul className="header-icons d-none d-lg-flex">
                  <li>
                    <Link href="#">
                      <FiShoppingCart />
                      <span className="badge">2</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FiPhoneCall />
                      <span className="content">
                        <small>Call / Whatsapp</small>
                        <br />
                        +918447748545
                      </span>
                    </Link>
                  </li>
                  <li className="download-icons">
                    <Link href="#">
                      <Image
                        src="/images/playstore.png"
                        width={30}
                        height={30}
                        alt="Second Medic"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src="/images/appstore.png"
                        width={30}
                        height={30}
                        alt="Second Medic"
                      />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="header-bottom d-none d-lg-block">
          <Navbar expand="lg">
            <Container>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="web-overflow">
                  <NavDropdown title="Second Opinion" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Second Opinion</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      International Second Opinion
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">Fitness Diet & Nutrition</Nav.Link>
                  <NavDropdown title="Hospitals" id="basic-nav-dropdown2">
                    <NavDropdown.Item href="#">Hospitals</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Ambulance Services
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Health Plans" id="basic-nav-dropdown3">
                    <NavDropdown.Item href="#">Health Plans</NavDropdown.Item>
                    <NavDropdown.Item href="#">Maternity</NavDropdown.Item>
                    <NavDropdown.Item href="#">Mental Health</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Health Insurance
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Surgery Appointment"
                    id="basic-nav-dropdown4"
                  >
                    <NavDropdown.Item href="#">
                      Surgery Appointment
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Get A Quote Medical Treatment
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">Crowd Funding</Nav.Link>
                  <Nav.Link href="#">Web Stories</Nav.Link>
                  <Nav.Link href="#">Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </section>
      </header>

      {/* Mobile Menu */}
      <Offcanvas show={show} onHide={handleClose} className="mobile-menu">
        <Offcanvas.Header closeButton>
          <Link href="#" className="logo">
            <Image
              src="/images/logo.webp"
              width={158}
              height={45}
              alt="Second Medic"
            />
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <Nav.Link href="#" className="active">
              Home
            </Nav.Link>

            <NavDropdown title="Consult Doctors" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Consult Doctors</NavDropdown.Item>
              <NavDropdown.Item href="#">Doctor Enquiry</NavDropdown.Item>
              <NavDropdown.Item href="#">Doctor Listing</NavDropdown.Item>
              <NavDropdown.Item href="#">Doctor Registration</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Lab Test" id="navbarScrollingDropdown2">
              <NavDropdown.Item href="#">Lab Test</NavDropdown.Item>
              <NavDropdown.Item href="#">Radiology</NavDropdown.Item>
              <NavDropdown.Item href="#">PET-CT</NavDropdown.Item>
              <NavDropdown.Item href="#">Genetic Testing</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Pharmacy</Nav.Link>

            <Nav.Link href="#">Ask A Doctor</Nav.Link>

            <NavDropdown title="Home Care" id="navbarScrollingDropdown3">
              <NavDropdown.Item href="#">Apollo Home Care</NavDropdown.Item>
              <NavDropdown.Item href="#">Home Care</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Remote Health Monitoring
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Home Health Network</NavDropdown.Item>
              <NavDropdown.Item href="#">Elder Care</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Corporate" id="navbarScrollingDropdown4">
              <NavDropdown.Item href="#">Corporate</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Employee Assistance Program (EAP)
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Financial Wellness</NavDropdown.Item>
              <NavDropdown.Item href="#">Disease Management</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Second Opinion" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Second Opinion</NavDropdown.Item>
              <NavDropdown.Item href="#">
                International Second Opinion
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Fitness Diet & Nutrition</Nav.Link>
            <NavDropdown title="Hospitals" id="basic-nav-dropdown2">
              <NavDropdown.Item href="#">Hospitals</NavDropdown.Item>
              <NavDropdown.Item href="#">Ambulance Services</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Health Plans" id="basic-nav-dropdown3">
              <NavDropdown.Item href="#">Health Plans</NavDropdown.Item>
              <NavDropdown.Item href="#">Maternity</NavDropdown.Item>
              <NavDropdown.Item href="#">Mental Health</NavDropdown.Item>
              <NavDropdown.Item href="#">Health Insurance</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Surgery Appointment" id="basic-nav-dropdown4">
              <NavDropdown.Item href="#">Surgery Appointment</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Get A Quote Medical Treatment
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Crowd Funding</Nav.Link>
            <Nav.Link href="#">Web Stories</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>

            <NavDropdown title="My Account" id="navbarScrollingDropdown5">
              <NavDropdown.Item href="#">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ul className="menu-footer-links">
            <li>
              <Link href="#">
                <HiOutlineMailOpen />
                <span className="content">
                  <small>Email</small>
                  <br />
                  customer.support@secondmedic.com
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <FiPhoneCall />
                <span className="content">
                  <small>Call / Whatsapp</small>
                  <br />
                  +918447748545
                </span>
              </Link>
            </li>
            <li className="download-icons">
              <Link href="#">
                <Image
                  src="/images/playstore.png"
                  width={30}
                  height={30}
                  alt="Second Medic"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/appstore.png"
                  width={30}
                  height={30}
                  alt="Second Medic"
                />
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
