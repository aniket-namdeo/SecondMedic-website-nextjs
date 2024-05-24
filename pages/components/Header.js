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
import { FiHeart } from "react-icons/fi";

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
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/logo.webp"
                  width={158}
                  height={45}
                  alt="Second Medic"
                />
              </Link>
              <div className="mobile-header-icons d-flex d-lg-none">
                <Link href="#">
                  <FiHeart />
                </Link>
                <Link href="#">
                  <FiShoppingCart />
                  <span className="badge">2</span>
                </Link>
                <Link href="" onClick={menuShow}>
                  <FiMenu />
                </Link>
              </div>
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                  <NavDropdown
                    title="Consult Doctors"
                    id="navbarScrollingDropdown"
                  >
                    <Link className="dropdown-item" href="/consult">
                      Consult Doctors
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Doctor Enquiry
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Doctor Listing
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Doctor Registration
                    </Link>
                  </NavDropdown>

                  <NavDropdown title="Lab Test" id="navbarScrollingDropdown2">
                    <Link className="dropdown-item" href="#">
                      Lab Test
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Radiology
                    </Link>
                    <Link className="dropdown-item" href="#">
                      PET-CT
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Genetic Testing
                    </Link>
                  </NavDropdown>

                  <Link href="/pharmacy" className="nav-link">
                    Pharmacy
                  </Link>

                  <Link className="nav-link" href="#">
                    Ask A Doctor
                  </Link>

                  <NavDropdown title="Home Care" id="navbarScrollingDropdown3">
                    <Link className="dropdown-item" href="#">
                      Apollo Home Care
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Home Care
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Remote Health Monitoring
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Home Health Network
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Elder Care
                    </Link>
                  </NavDropdown>

                  <NavDropdown title="Corporate" id="navbarScrollingDropdown4">
                    <Link className="dropdown-item" href="#">
                      Corporate
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Employee Assistance Program (EAP)
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Financial Wellness
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Disease Management
                    </Link>
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
                    <Link className="dropdown-item" href="#">
                      My Account
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Logout
                    </Link>
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
                      <FiHeart />
                    </Link>
                  </li>
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
                    <Link className="dropdown-item" href="#">
                      Second Opinion
                    </Link>
                    <Link className="dropdown-item" href="#">
                      International Second Opinion
                    </Link>
                  </NavDropdown>
                  <Link className="nav-link" href="#">
                    Fitness Diet & Nutrition
                  </Link>
                  <NavDropdown title="Hospitals" id="basic-nav-dropdown2">
                    <Link className="dropdown-item" href="#">
                      Hospitals
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Ambulance Services
                    </Link>
                  </NavDropdown>
                  <NavDropdown title="Health Plans" id="basic-nav-dropdown3">
                    <Link className="dropdown-item" href="#">
                      Health Plans
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Maternity
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Mental Health
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Health Insurance
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title="Surgery Appointment"
                    id="basic-nav-dropdown4"
                  >
                    <Link className="dropdown-item" href="#">
                      Surgery Appointment
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Get A Quote Medical Treatment
                    </Link>
                  </NavDropdown>
                  <Link className="nav-link" href="#">
                    Crowd Funding
                  </Link>
                  <Link className="nav-link" href="#">
                    Web Stories
                  </Link>
                  <Link className="nav-link" href="#">
                    Blog
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </section>
      </header>

      {/* Mobile Menu */}
      <Offcanvas show={show} onHide={handleClose} className="mobile-menu">
        <Offcanvas.Header closeButton>
          <Link href="/" className="logo">
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
            <Link className="nav-link active" href="/">
              Home
            </Link>

            <NavDropdown title="Consult Doctors" id="navbarScrollingDropdown">
              <Link className="dropdown-item" href="#">
                Consult Doctors
              </Link>
              <Link className="dropdown-item" href="#">
                Doctor Enquiry
              </Link>
              <Link className="dropdown-item" href="#">
                Doctor Listing
              </Link>
              <Link className="dropdown-item" href="#">
                Doctor Registration
              </Link>
            </NavDropdown>

            <NavDropdown title="Lab Test" id="navbarScrollingDropdown2">
              <Link className="dropdown-item" href="#">
                Lab Test
              </Link>
              <Link className="dropdown-item" href="#">
                Radiology
              </Link>
              <Link className="dropdown-item" href="#">
                PET-CT
              </Link>
              <Link className="dropdown-item" href="#">
                Genetic Testing
              </Link>
            </NavDropdown>

            <Link className="nav-link" href="/pharmacy">
              Pharmacy
            </Link>

            <Link className="nav-link" href="#">
              Ask A Doctor
            </Link>

            <NavDropdown title="Home Care" id="navbarScrollingDropdown3">
              <Link className="dropdown-item" href="#">
                Apollo Home Care
              </Link>
              <Link className="dropdown-item" href="#">
                Home Care
              </Link>
              <Link className="dropdown-item" href="#">
                Remote Health Monitoring
              </Link>
              <Link className="dropdown-item" href="#">
                Home Health Network
              </Link>
              <Link className="dropdown-item" href="#">
                Elder Care
              </Link>
            </NavDropdown>

            <NavDropdown title="Corporate" id="navbarScrollingDropdown4">
              <Link className="dropdown-item" href="#">
                Corporate
              </Link>
              <Link className="dropdown-item" href="#">
                Employee Assistance Program (EAP)
              </Link>
              <Link className="dropdown-item" href="#">
                Financial Wellness
              </Link>
              <Link className="dropdown-item" href="#">
                Disease Management
              </Link>
            </NavDropdown>
            <NavDropdown title="Second Opinion" id="basic-nav-dropdown">
              <Link className="dropdown-item" href="#">
                Second Opinion
              </Link>
              <Link className="dropdown-item" href="#">
                International Second Opinion
              </Link>
            </NavDropdown>
            <Link className="nav-link" href="#">
              Fitness Diet & Nutrition
            </Link>
            <NavDropdown title="Hospitals" id="basic-nav-dropdown2">
              <Link className="dropdown-item" href="#">
                Hospitals
              </Link>
              <Link className="dropdown-item" href="#">
                Ambulance Services
              </Link>
            </NavDropdown>
            <NavDropdown title="Health Plans" id="basic-nav-dropdown3">
              <Link className="dropdown-item" href="#">
                Health Plans
              </Link>
              <Link className="dropdown-item" href="#">
                Maternity
              </Link>
              <Link className="dropdown-item" href="#">
                Mental Health
              </Link>
              <Link className="dropdown-item" href="#">
                Health Insurance
              </Link>
            </NavDropdown>
            <NavDropdown title="Surgery Appointment" id="basic-nav-dropdown4">
              <Link className="dropdown-item" href="#">
                Surgery Appointment
              </Link>
              <Link className="dropdown-item" href="#">
                Get A Quote Medical Treatment
              </Link>
            </NavDropdown>
            <Link className="nav-link" href="#">
              Crowd Funding
            </Link>
            <Link className="nav-link" href="#">
              Web Stories
            </Link>
            <Link className="nav-link" href="#">
              Blog
            </Link>

            <NavDropdown title="My Account" id="navbarScrollingDropdown5">
              <Link className="dropdown-item" href="#">
                My Account
              </Link>
              <Link className="dropdown-item" href="#">
                Logout
              </Link>
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
