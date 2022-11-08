import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ImageLoader from '../ImageLoader';
import StickyNavbar from '../StickyNavbar';
import StarRating from '../StarRating';
import SocialButton from '../SocialButton';
import MarketButton from '../MarketButton';
import SignInModalLight from '../partials/SignInModalLight';
import SignUpModalLight from '../partials/SignUpModalLight';

import FormGroup from '../FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const RealEstatePageLayout = (props) => {
  // Sign in modal
  const [signinShow, setSigninShow] = useState(false);
  const handleSigninClose = () => setSigninShow(false);
  const handleSigninShow = () => setSigninShow(true);

  // Sign up modal
  const [signupShow, setSignupShow] = useState(false);
  const handleSignupClose = () => setSignupShow(false);
  const handleSignupShow = () => setSignupShow(true);

  // Swap modals
  const handleSignInToUp = (e) => {
    e.preventDefault();
    setSigninShow(false);
    setSignupShow(true);
  };
  const handleSignUpToIn = (e) => {
    e.preventDefault();
    setSigninShow(true);
    setSignupShow(false);
  };

  // Footer recent blog posts array
  const footerPosts = [
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/th01.jpg',
      category: 'Home Improvement',
      title: 'Your Guide to a Smart Apartment Searching',
      text: 'Mi justo, varius vitae cursus ipsum sem massa amet pellentesque. Ipsum enim sit nulla ridiculus semper nam...',
      date: 'Dec 4',
      comments: '2',
    },
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/th02.jpg',
      category: 'Tips & Advice',
      title: 'Top 10 Ways to Refresh Your Space',
      text: 'Volutpat, orci, vitae arcu feugiat vestibulum ultricies nisi, aenean eget. Vitae enim, tellus tempor consequat mi vitae...',
      date: 'Nov 23',
      comments: 'No',
    },
  ];

  return (
    <>
      <Head>
        <title>Papperboy | Invest in Africa | {props.pageTitle}</title>
      </Head>

      {/* Sign in modal */}
      {!props.userLoggedIn && (
        <SignInModalLight
          centered
          size="lg"
          pillButtons
          show={signinShow}
          onHide={handleSigninClose}
          onSwap={handleSignInToUp}
        />
      )}

      {/* Sign up modal */}
      {!props.userLoggedIn && (
        <SignUpModalLight
          centered
          size="lg"
          pillButtons
          show={signupShow}
          onHide={handleSignupClose}
          onSwap={handleSignUpToIn}
        />
      )}

      {/* Page wrapper for sticky footer
      Wraps everything except footer to push footer to the bottom of the page if there is little content */}
      <main className="page-wrapper">
        {/* Navbar (main site header with branding and navigation) */}
        <Navbar
          as={StickyNavbar}
          expand="lg"
          className={`fixed-top${
            props.navbarExtraClass ? ` ${props.navbarExtraClass}` : ''
          }`}
        >
          <Container>
            <Link href="/papperboy" passHref>
              <Navbar.Brand className="me-3 me-xl-4">Papperboy</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarNav" className="ms-auto" />

            {/* Display content depending on user auth satus  */}
            {props.userLoggedIn ? (
              <Dropdown className="d-none d-lg-block order-lg-3 my-n2 me-3">
                <Link href="/papperboy/account-info" passHref>
                  <Dropdown.Toggle
                    as={Nav.Link}
                    className="dropdown-toggle-flush d-flex py-1 px-0"
                    style={{ width: '40px' }}
                  >
                    <ImageLoader
                      src="/images/avatars/36.png"
                      width={80}
                      height={80}
                      placeholder={false}
                      className="rounded-circle"
                      alt="Annette Black"
                    />
                  </Dropdown.Toggle>
                </Link>
                <Dropdown.Menu renderOnMount align="end">
                  <div
                    className="d-flex align-items-start border-bottom px-3 py-1 mb-2"
                    style={{ width: '16rem' }}
                  >
                    <ImageLoader
                      src="/images/avatars/24.png"
                      width={48}
                      height={48}
                      placeholder={false}
                      className="rounded-circle"
                      alt="Annette Black"
                    />
                    <div className="ps-2">
                      <h6 className="fs-base mb-0">Annette Black</h6>
                      <StarRating size="sm" rating={5} />
                      <div className="fs-xs py-2">
                        (302) 555-0107
                        <br />
                        annette_black@email.com
                      </div>
                    </div>
                  </div>
                  <Link href="/papperboy/account-info" passHref>
                    <Dropdown.Item>
                      <i className="fi-user opacity-60 me-2"></i>
                      Personal Info
                    </Dropdown.Item>
                  </Link>
                  <Link href="/papperboy/account-favorites" passHref>
                    <Dropdown.Item>
                      <i className="fi-heart opacity-60 me-2"></i>
                      Favorites
                    </Dropdown.Item>
                  </Link>
                  <Link href="/papperboy/vendor-businesses" passHref>
                    <Dropdown.Item>
                      <i className="fi-home opacity-60 me-2"></i>
                      My Businesses
                    </Dropdown.Item>
                  </Link>
                  <Link href="/papperboy/account-reviews" passHref>
                    <Dropdown.Item>
                      <i className="fi-star opacity-60 me-2"></i>
                      Reviews
                    </Dropdown.Item>
                  </Link>
                  <Link href="/papperboy/account-notifications" passHref>
                    <Dropdown.Item>
                      <i className="fi-bell opacity-60 me-2"></i>
                      Notifications
                    </Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Link href="/papperboy/help-center" passHref>
                    <Dropdown.Item>Help</Dropdown.Item>
                  </Link>
                  <Link href="/signin-light" passHref>
                    <Dropdown.Item>Sign Out</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button
                variant="sm text-primary d-none d-lg-block order-lg-3"
                onClick={handleSigninShow}
              >
                <i className="fi-user me-2"></i>
                Sign in
              </Button>
            )}

            <Link href="#" passHref>
              <Button
                size="sm"
                className="rounded-pill order-lg-3 ms-2"
                onClick={handleSignupShow}
              >
                Sign Up
              </Button>
            </Link>

            <Navbar.Collapse id="navbarNav" className="order-md-2">
              <Nav navbarScroll style={{ maxHeight: '35rem' }}>
                <Nav.Item as={Dropdown} className="me-lg-2">
                  <Dropdown.Toggle
                    as={Nav.Link}
                    className="align-items-center pe-lg-4"
                  >
                    <i className="fi-layers me-2"></i>
                    Investors
                    <span
                      className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end"
                      style={{ width: '1px', height: '30px' }}
                    ></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Link href="/papperboy/catalog" passHref>
                      <Dropdown.Item>
                        <i className="fi-briefcase fs-base opacity-50 me-2"></i>
                        Personal Investor
                      </Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                    <Link href="/papperboy/404-not-found" passHref>
                      <Dropdown.Item>
                        <i className="fi-building fs-base opacity-50 me-2"></i>
                        Corporation
                      </Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/papperboy" passHref>
                    <Nav.Link active={props.activeNav === 'Home'}>
                      Home
                    </Nav.Link>
                  </Link>
                </Nav.Item>

                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle
                    as={Nav.Link}
                    active={props.activeNav === 'Account'}
                  >
                    Businesses
                  </Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Link href="/papperboy/add-business" passHref>
                      <Dropdown.Item>List your project</Dropdown.Item>
                    </Link>

                    <Dropdown.Item onClick={handleSigninShow}>
                      Login to dashboard
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>

                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle
                    as={Nav.Link}
                    active={props.activeNav === 'Pages'}
                  >
                    About
                  </Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Link href="/papperboy/about" passHref>
                      <Dropdown.Item>About</Dropdown.Item>
                    </Link>

                    <Link href="/papperboy/contacts" passHref>
                      <Dropdown.Item>Contacts</Dropdown.Item>
                    </Link>
                    <Link href="/papperboy/help-center" passHref>
                      <Dropdown.Item>Help Center</Dropdown.Item>
                    </Link>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/papperboy/catalog" passHref>
                    <Nav.Link>Browse Projects</Nav.Link>
                  </Link>
                </Nav.Item>

                {/* Display content depending on user auth satus  */}
                {props.userLoggedIn ? (
                  <Nav.Item as={Dropdown} className="d-lg-none">
                    <Dropdown.Toggle
                      as={Nav.Link}
                      className="d-flex align-items-center"
                    >
                      <ImageLoader
                        src="/images/avatars/36.png"
                        width={30}
                        height={30}
                        placeholder={false}
                        className="rounded-circle"
                        alt="Annette Black"
                      />
                      <span className="ms-2">Annette Black</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <div className="ps-3">
                        <StarRating size="sm" rating={5} />
                        <div className="fs-xs py-2">
                          (302) 555-0107
                          <br />
                          annette_black@email.com
                        </div>
                      </div>
                      <Link href="/papperboy/account-info" passHref>
                        <Dropdown.Item>
                          <i className="fi-user opacity-60 me-2"></i>
                          Personal Info
                        </Dropdown.Item>
                      </Link>
                      <Link href="/papperboy/account-favorites" passHref>
                        <Dropdown.Item>
                          <i className="fi-heart opacity-60 me-2"></i>
                          Favorites
                        </Dropdown.Item>
                      </Link>
                      <Link href="/papperboy/vendor-businesses" passHref>
                        <Dropdown.Item>
                          <i className="fi-home opacity-60 me-2"></i>
                          My Businesses
                        </Dropdown.Item>
                      </Link>
                      <Link href="/papperboy/account-reviews" passHref>
                        <Dropdown.Item>
                          <i className="fi-star opacity-60 me-2"></i>
                          Reviews
                        </Dropdown.Item>
                      </Link>
                      <Link href="/papperboy/account-notifications" passHref>
                        <Dropdown.Item>
                          <i className="fi-bell opacity-60 me-2"></i>
                          Notifications
                        </Dropdown.Item>
                      </Link>
                      <Dropdown.Divider />
                      <Link href="/papperboy/help-center" passHref>
                        <Dropdown.Item>Help</Dropdown.Item>
                      </Link>
                      <Link href="/signin-light" passHref>
                        <Dropdown.Item>Sign Out</Dropdown.Item>
                      </Link>
                    </Dropdown.Menu>
                  </Nav.Item>
                ) : (
                  <Nav.Item className="d-lg-none">
                    <Nav.Link onClick={handleSigninShow}>
                      <i className="fi-user me-2"></i>
                      Sign in
                    </Nav.Link>
                  </Nav.Item>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Page content */}
        {props.children}
      </main>

      {/* Footer */}
      <footer className="footer pt-lg-5 pt-4 bg-dark text-light">
        <Container className="mb-4 py-4 pb-lg-5">
          <Row className="gy-4">
            {/* Logo + contacts */}
            <Col lg={3} md={6} sm={4}>
              <div className="mb-4 pb-sm-2">
                <Link href="/papperboy">
                  <a className="d-inline-flex">
                    <ImageLoader
                      priority
                      src="/images/logo/logo-light.svg"
                      width={116}
                      height={32}
                      placeholder={false}
                      alt="Finder"
                    />
                  </a>
                </Link>
              </div>
              <Nav as="ul" className="nav-light flex-column">
                <Nav.Item as="li" className="mb-2">
                  <Nav.Link
                    href="mailto:example@gmail.com"
                    className="fw-normal text-light text-nowrap p-0"
                  >
                    <i className="fi-mail mt-n1 me-1 align-middle text-primary"></i>
                    example@gmail.com
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="mb-2">
                  <Nav.Link
                    href="tel:4065550120"
                    className="fw-normal text-light text-nowrap p-0"
                  >
                    <i className="fi-device-mobile mt-n1 me-1 align-middle text-primary"></i>
                    (406) 555-0120
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            {/* Quick links */}
            <Col lg={2} md={3} sm={4}>
              <h3 className="fs-base text-light">Quick links</h3>
              <ul className="list-unstyled fs-sm">
                <li>
                  <Link href="#">
                    <a className="nav-link-light">Top cities</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="nav-link-light">Accommodation</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="nav-link-light">Cafes &amp; restaurants</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="nav-link-light">Events</a>
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Profile links */}
            <Col lg={2} md={3} sm={4}>
              <h3 className="fs-base text-light">Profile</h3>
              <ul className="list-unstyled fs-sm">
                <li>
                  <Link href="#">
                    <a className="nav-link-light">My account</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="nav-link-light">Favorites</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="nav-link-light">My listings</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="nav-link-light">Add listing</a>
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Subscription form */}
            <Col lg={{ span: 4, offset: 1 }}>
              <h3 className="h4 text-light">Subscribe to our newsletter</h3>
              <p className="fs-sm mb-4 opacity-60">
                Don&apos;t miss any relevant vacancies!
              </p>
              <FormGroup light className="rounded-pill">
                <InputGroup size="sm">
                  <InputGroup.Text className="text-muted">
                    <i className="fi-mail"></i>
                  </InputGroup.Text>
                  <FormControl placeholder="Your email" />
                </InputGroup>
                <Button variant="primary rounded-pill" size="sm">
                  Subscribe
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Container>
        <div className="py-4 border-top border-light">
          <Container className="d-flex flex-column flex-lg-row align-items-center justify-content-between py-2">
            {/* Copyright */}
            <p className="order-lg-1 order-2 fs-sm mb-2 mb-lg-0">
              <span className="text-light opacity-60">
                &copy; All rights reserved. Made by{' '}
              </span>
              <a
                href="https://createx.studio/"
                className="nav-link-light fw-bold"
                target="_blank"
                rel="noreferrer"
              >
                Createx Studio
              </a>
            </p>

            <div className="d-flex flex-lg-row flex-column align-items-center lg-2 order-1 ms-lg-4 mb-lg-0 mb-4">
              {/* Links */}
              <div className="d-flex flex-wrap fs-sm mb-lg-0 mb-4 pe-lg-4">
                <Link href="#">
                  <a className="nav-link-light px-2 mx-1">About</a>
                </Link>
                <Link href="#">
                  <a className="nav-link-light px-2 mx-1">Blog</a>
                </Link>
                <Link href="#">
                  <a className="nav-link-light px-2 mx-1">Support</a>
                </Link>
                <Link href="#">
                  <a className="nav-link-light px-2 mx-1">Contacts</a>
                </Link>
              </div>

              <div className="d-flex align-items-center">
                {/* Language switcher */}
                <Dropdown>
                  <Dropdown.Toggle className="nav-link nav-link-light fs-sm align-items-center p-0 fw-normal bg-transparent border-0 shadow-none">
                    <i className="fi-globe mt-n1 me-2 align-middle"></i>
                    Eng
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark" className="my-1">
                    <Dropdown.Item
                      eventKey="deutsch"
                      className="d-flex align-items-center"
                    >
                      <ImageLoader
                        priority
                        src="/images/flags/de.png"
                        width={20}
                        height={20}
                        alt="Deutsch"
                      />
                      <span className="ms-2">Deutsch</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="français"
                      className="d-flex align-items-center"
                    >
                      <ImageLoader
                        priority
                        src="/images/flags/fr.png"
                        width={20}
                        height={20}
                        alt="Français"
                      />
                      <span className="ms-2">Français</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="español"
                      className="d-flex align-items-center"
                    >
                      <ImageLoader
                        priority
                        src="/images/flags/es.png"
                        width={20}
                        height={20}
                        alt="Español"
                      />
                      <span className="ms-2">Español</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Socials */}
                <div className="ms-4 ps-lg-2 text-nowrap">
                  <SocialButton
                    href="#"
                    brand="facebook"
                    variant="translucent"
                    roundedCircle
                    light
                    className="ms-2"
                  />
                  <SocialButton
                    href="#"
                    brand="twitter"
                    variant="translucent"
                    roundedCircle
                    light
                    className="ms-2"
                  />
                  <SocialButton
                    href="#"
                    brand="telegram"
                    variant="translucent"
                    roundedCircle
                    light
                    className="ms-2"
                  />
                  <SocialButton
                    href="#"
                    brand="messenger"
                    variant="translucent"
                    roundedCircle
                    light
                    className="ms-2"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default RealEstatePageLayout;
