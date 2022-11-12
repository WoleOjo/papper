import { useState } from 'react';
import CityGuidePageLayout from '../components/partials/CityGuidePageLayout';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ImageLoader from '../components/ImageLoader';
import FormGroup from '../components/FormGroup';
import DropdownSelect from '../components/DropdownSelect';
import IconBox from '../components/IconBox';
import VenueCard from '../components/VenueCard';
import MarketButton from '../components/MarketButton';
import VenueCardOverlay from '../components/VenueCardOverlay';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DatePicker from 'react-datepicker';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-datepicker/dist/react-datepicker.css';

import PropertyCard from '../components/PropertyCard';
import Card from 'react-bootstrap/Card';
import Blockquote from '../components/Blockquote';
import Nav from 'react-bootstrap/Nav';
import PropertyCardOverlay from '../components/PropertyCardOverlay';

const IndexPage = () => {
  // Categories array
  const categories = [
    [
      {
        href: '/papperboy/catalog',
        media: 'fi-plant',
        color: 'success',
        title: 'Agriculture',
      },
      {
        href: '/papperboy/catalog',
        media: 'fi-real-estate-house',
        color: 'accent',
        title: 'Real Estate',
      },
      {
        href: '/papperboy/catalog',
        media: 'fi-device-desktop',
        color: 'warning',
        title: 'Technology',
      },
      {
        href: '/papperboy/catalog',
        media: 'fi-car',
        color: 'danger',
        title: 'Logistics',
      },
      {
        href: '/papperboy/catalog',
        media: 'fi-shopping-bag',
        color: 'dark',
        title: 'Retail & Consumer',
      },
    ],
    [
      {
        href: '/papperboy/catalog',
        media: 'fi-museum',
        title: 'Education',
      },
      {
        href: '/papperboy/catalog',
        media: 'fi-meds',
        title: 'Medicine',
      },
      {
        href: '/papperboy/catalog',
        media: 'fi-entertainment',
        title: 'Entertainment',
      },
    ],
  ];

  // Properties (Top offers) array
  const properties = [
    {
      href: '/papperboy/catalog',
      images: [['/images/real-estate/catalog/01.jpeg', 467, 305, 'Image']],
      title: 'Greenpoint  | Target:$15,000',
      category: '',
      location: 'Helping farmers sell their produce',
      price: 'Raised: $11,629',
      badges: [
        ['success', 'Verified'],
        ['info', 'New'],
      ],
      footer: [3, 2, 2],
    },
    {
      href: '/papperboy/catalog',
      images: [['/images/real-estate/catalog/02.jpeg', 467, 305, 'Image']],
      title: 'Free & Free| Target:$12,000',
      category: '',
      location: 'Making mental health for wo digitally assecible ',
      price: 'Raised: $9,500',
      badges: [
        ['success', 'Verified'],
        ['danger', 'Featured'],
      ],
      footer: [4, 2, 2],
    },
    {
      href: '/papperboy/catalog',
      images: [['/images/real-estate/catalog/03.jpeg', 467, 305, 'Image']],
      title: 'MeFinance | Target:$25,000',
      category: '',
      location: 'Teaching teen girls personal finance ',
      price: '$11,330',
      badges: [['success', 'Verified']],
      footer: [1, 1, 1],
    },
    {
      href: '/papperboy/catalog',
      images: [['/images/real-estate/catalog/24.jpeg', 467, 305, 'Image']],
      title: 'CVS  | Target:$10,000',
      category: '',
      location: 'Helping schools create digital learning products',
      price: '$5,500',
      badges: [
        ['success', 'Verified'],
        ['info', 'New'],
      ],
      footer: [1, 1, 2],
    },
    {
      href: '/papperboy/catalog',
      images: [['/images/real-estate/catalog/05.jpeg', 467, 305, 'Image']],
      title: 'FitNext | Target:$17,000',
      category: '',
      location: 'Organic weight loss product',
      price: '$4,000',
      badges: [['success', 'Verified']],
      footer: [4, 2, 1],
    },
  ];

  // Recent Offers
  const recent = [
    {
      href: '/papperboy/catalog',
      images: [['/images/real-estate/catalog/23.jpeg', 467, 305, 'Image']],
      title: 'Homly Home | Target:$45,000',
      category: '',
      location: 'Smart house product design and installation',
      price: '$29,629',
      badges: [
        ['success', 'Verified'],
        ['info', 'New'],
      ],
      footer: [3, 2, 2],
    },
    {
      href: '/papperboy/catalog',
      images: [['/images/real-estate/catalog/04.jpeg', 467, 305, 'Image']],
      title: 'BV Law| Target: 10,000',
      category: '',
      location: 'Affordable on-line legal service ',
      price: 'Raised:$7,000',
      badges: [
        ['success', 'Verified'],
        ['info', 'New'],
      ],
      footer: [4, 2, 2],
    },
    {
      href: '/papperboy/catalog',
      images: [['/images/real-estate/catalog/36.jpeg', 467, 305, 'Image']],
      title: 'Gabriel Timi | Target:$15,000',
      category: '',
      location: 'High capacity modern bakery',
      price: '$11,330',
      badges: [
        ['success', 'Verified'],
        ['info', 'New'],
      ],

      footer: [1, 1, 1],
    },
    {
      href: '/papperboy/catalog',
      images: [['/images/real-estate/catalog/38.jpeg', 467, 305, 'Image']],
      title: 'Spreengs | Target:$45,000',
      category: '',
      location: 'An innovative tap water solution product',
      price: 'Raised:$15,000',
      badges: [
        ['success', 'Verified'],
        ['info', 'New'],
      ],
      footer: [1, 1, 2],
    },
    {
      href: '/papperboy/catalog',
      images: [['/images/real-estate/catalog/05.jpeg', 467, 305, 'Image']],
      title: 'FitNext | Target:$7,000',
      category: '',
      location: 'Organic weight loss product',
      price: 'Raised: $4,000',
      badges: [['success', 'Verified']],
      footer: [4, 2, 1],
    },
  ];

  // Datepicker state
  const [startDate, setStartDate] = useState(null);

  return (
    <CityGuidePageLayout pageTitle="Home v.1">
      {/* Hero */}
      <Container as="section" className="container py-5 mt-5 mb-lg-3">
        <Row className="align-items-center mt-md-2">
          <Col lg={7} className="order-lg-2 mb-lg-0 mb-4 pb-2 pb-lg-0">
            <div className="d-flex justify-content-center">
              <ImageLoader
                src="/images/papperboy/home/hero-img.png"
                width={1492}
                height={972}
                alt="Hero image"
              />
            </div>
          </Col>
          <Col lg={5} className="order-lg-1 pe-lg-0">
            <h1 className="display-5 me-lg-n5 d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
              <span className="me-2">Start exploring</span>
              <Dropdown as="span" className="d-inline-block">
                <Dropdown.Toggle
                  className="bg-transparent text-primary border-0 shadow-none text-decoration-none py-1 px-0"
                  style={{ fontSize: 'inherit' }}
                >
                  Nigeria
                  <Dropdown.Menu align="end">
                    <Dropdown.Item className="fs-base fw-bold">
                      Ghana
                    </Dropdown.Item>
                    <Dropdown.Item className="fs-base fw-bold">
                      Cameroon
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Toggle>
              </Dropdown>
            </h1>
            <p className="text-lg-start text-center mb-4 mb-lg-5 fs-lg">
              Papperboy is your access to premium investments in Africa. We
              select and invest in the most daring and impactful projects in
              Africa. Helping businesses thrive and supporting Africa's growth.
            </p>

            {/* Search form */}
            <div className="position-relative zindex-5 me-lg-n5">
              <FormGroup className="d-block d-md-flex rounded-md-pill me-lg-n5">
                <InputGroup size="lg" className="border-end-md">
                  <InputGroup.Text className="text-muted ps-3">
                    <i className="fi-search"></i>
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Search field"
                    placeholder="What are you looking for?"
                  />
                </InputGroup>
                <hr className="d-md-none my-2" />
                <div className="d-sm-flex">
                  <DropdownSelect
                    defaultValue="All categories"
                    icon="fi-list"
                    options={[
                      ['fi-plant', 'Agriculture'],
                      ['fi-real-estate-house', 'Real Estate'],
                      ['fi-device-desktop', 'Technology'],
                      ['fi-museum', 'Education'],
                      ['fi-car', 'Logistics'],
                      ['fi-meds', 'Medicine'],
                      ['fi-shopping-bag', 'Retail & Consumer'],
                      ['fi-entertainment', 'Entertainment'],
                    ]}
                    variant="link btn-lg ps-2 ps-sm-3"
                    className="w-100 mb-sm-0 mb-3"
                  />
                  <Button
                    size="lg"
                    className="rounded-pill w-100 w-md-auto ms-sm-3"
                  >
                    Search
                  </Button>
                </div>
              </FormGroup>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Categories */}
      <Container
        as="section"
        className="d-flex flex-wrap flex-column flex-sm-row pb-5 mb-md-3"
      >
        {categories[0].map((category, indx) => (
          <IconBox
            key={indx}
            href={category.href}
            type="pill-shadow"
            media={category.media}
            mediaColor={category.color}
            title={category.title}
            className="mb-2 mb-sm-3 me-sm-3 me-xxl-4"
          />
        ))}
        <Dropdown className="mb-2 mb-sm-3">
          <Dropdown.Toggle
            as="div"
            className="dropdown-toggle-flush bg-transparent border-0 shadow-none p-0"
          >
            <IconBox
              type="pill-shadow"
              media="fi-dots-horisontal"
              mediaColor="info"
              title="More"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu align={{ sm: 'end' }} className="my-2">
            {categories[1].map((category, indx) => (
              <Link key={indx} href={category.href} passHref>
                <Dropdown.Item className="fw-bold">
                  <i
                    className={`${category.media} fs-base opacity-60 me-2`}
                  ></i>
                  {category.title}
                </Dropdown.Item>
              </Link>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>

      {/* Top property offers (carousel) */}
      <Container as="section" className="mb-5 pb-md-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="h3 mb-0">Top Offers</h2>
          <Link href="/papperboy/catalog" passHref>
            <Button variant="link fw-normal ms-sm-3 p-0">
              View all
              <i className="fi-arrow-long-right ms-2"></i>
            </Button>
          </Link>
        </div>

        {/* Swiper slider */}
        <div className="position-relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#prevProperties',
              nextEl: '#nextProperties',
            }}
            pagination={{
              el: '#paginationProperties',
              clickable: true,
            }}
            loop
            spaceBetween={8}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            className="pt-3 pb-4 mx-n2"
          >
            {properties.map((property, indx) => (
              <SwiperSlide key={indx} className="h-auto">
                <PropertyCard
                  href={property.href}
                  images={property.images}
                  title={property.title}
                  category={property.category}
                  location={property.location}
                  price={property.price}
                  badges={property.badges}
                  wishlistButton={{
                    tooltip: 'Add to Wishlist',
                    props: {
                      onClick: () =>
                        console.log('Property added to your Wishlist!'),
                    },
                  }}
                  className="h-100 mx-2"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button
            id="prevProperties"
            variant="prev"
            className="d-none d-xxl-block mt-n5 ms-n5"
          />
          <Button
            id="nextProperties"
            variant="next"
            className="d-none d-xxl-block mt-n5 me-n5"
          />
        </div>

        {/* External pagination (bullets) buttons */}
        <div
          id="paginationProperties"
          className="swiper-pagination position-relative bottom-0 py-2 mt-1"
        ></div>
      </Container>

      {/* Recently added properties */}
      <Container as="section" className="pb-4 mb-5">
        <div className="d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2">
          <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
            <h2 className="h3 mb-0 me-md-4">Closed Rounds</h2>

            {/* Dropdown displays on screens < 768px */}
            <DropdownSelect
              defaultValue="Houses"
              options={[
                [null, 'Apartments'],
                [null, 'Houses'],
                [null, 'Rooms'],
                [null, 'Commercial'],
              ]}
              variant="outline-secondary btn-sm"
              className="d-md-none"
            />

            {/* Nav tabs disply on screens > 768px */}
            <Nav
              as="ul"
              variant="tabs"
              defaultActiveKey="houses"
              className="d-none d-md-flex ps-lg-2 mb-0"
            >
              <Nav.Item as="li">
                <Nav.Link eventKey="apartments" className="fs-sm mb-2 mb-md-0">
                  Technology
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="houses" className="fs-sm mb-2 mb-md-0">
                  Real Estate
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="rooms" className="fs-sm mb-2 mb-md-0">
                  Agriculture
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="commercial" className="fs-sm mb-2 mb-md-0">
                  Logistics
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Link href="/papperboy/catalog" passHref>
            <Button variant="link fw-normal d-none d-lg-block p-0">
              View all
              <i className="fi-arrow-long-right ms-2"></i>
            </Button>
          </Link>
        </div>

        {/* Grid of properties */}
        <Row className="g-4">
          <Col md={6}>
            <PropertyCardOverlay
              img={{
                src: '/images/real-estate/recent/01.jpeg',
                alt: 'Background image',
              }}
              href="#"
              title="Luxury Rental Villa"
              category=""
              location="118-11 Steohen Blvd Strt, Lagos"
              overlay
              badges={[
                ['success', 'Verified'],
                ['info', 'New'],
              ]}
              button={{
                href: '/papperboy/contacts',
                title: 'Contact',
                variant: 'primary',
                wishlistProps: {
                  onClick: () =>
                    console.log(
                      "You've added Luxury Rental Villa property to your wishlist!"
                    ),
                },
              }}
              className="h-100"
            />
          </Col>
          <Col md={6}>
            <PropertyCardOverlay
              img={{
                src: '/images/real-estate/recent/02.jpg',
                alt: 'Background image',
              }}
              href="/real-estate/single-v1"
              title="Duplex with Garage"
              category=""
              location="118-11 Steohen Blvd Strt, Lagos"
              overlay
              badges={[['info', 'New']]}
              button={{
                href: '/papperboy/contacts',
                title: 'Contact',
                variant: 'primary',
                wishlistProps: {
                  onClick: () =>
                    console.log(
                      "You've added Duplex with Garage property to your wishlist!"
                    ),
                },
              }}
              className="mb-4"
            />
            <PropertyCardOverlay
              img={{
                src: '/images/real-estate/recent/03.jpg',
                alt: 'Background image',
              }}
              href="/papperboy/contacts"
              title="Country House"
              category=""
              location="118-11 Steohen Blvd Strt, Lagos"
              overlay
              badges={[['info', 'New']]}
              button={{
                href: '/papperboy/contacts',
                title: 'contact',
                variant: 'primary',
                wishlistProps: {
                  onClick: () =>
                    console.log(
                      "You've added Country House property to your wishlist!"
                    ),
                },
              }}
            />
          </Col>
        </Row>
      </Container>

      {/* Top property offers (carousel) */}
      <Container as="section" className="mb-5 pb-md-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="h3 mb-0">Latest Projects</h2>
          <Link href="/papperboy/catalog" passHref>
            <Button variant="link fw-normal ms-sm-3 p-0">
              View all
              <i className="fi-arrow-long-right ms-2"></i>
            </Button>
          </Link>
        </div>

        {/* Swiper slider */}
        <div className="position-relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#prevProperties',
              nextEl: '#nextProperties',
            }}
            pagination={{
              el: '#paginationProperties',
              clickable: true,
            }}
            loop
            spaceBetween={8}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            className="pt-3 pb-4 mx-n2"
          >
            {recent.map((recent, indx) => (
              <SwiperSlide key={indx} className="h-auto">
                <PropertyCard
                  href={recent.href}
                  images={recent.images}
                  title={recent.title}
                  category={recent.category}
                  location={recent.location}
                  price={recent.price}
                  badges={recent.badges}
                  wishlistButton={{
                    tooltip: 'Add to Wishlist',
                    props: {
                      onClick: () =>
                        console.log('recent added to your Wishlist!'),
                    },
                  }}
                  className="h-100 mx-2"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button
            id="prevProperties"
            variant="prev"
            className="d-none d-xxl-block mt-n5 ms-n5"
          />
          <Button
            id="nextProperties"
            variant="next"
            className="d-none d-xxl-block mt-n5 me-n5"
          />
        </div>

        {/* External pagination (bullets) buttons */}
        <div
          id="paginationProperties"
          className="swiper-pagination position-relative bottom-0 py-2 mt-1"
        ></div>
      </Container>

      {/* What's new slider */}
      <Container as="section" className="container mt-n3 mt-md-0 mb-5 pb-lg-4">
        <h2 className="h3 mb-4 pb-2">Our Motivation</h2>

        {/* Swiper slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '#prevVenue',
            nextEl: '#nextVenue',
          }}
          spaceBetween={24}
          speed={400}
          loop
        >
          {/* Item */}
          <SwiperSlide>
            <Row>
              <Col
                md={7}
                className="d-flex position-relative zindex-5 mb-md-0 mb-3"
              >
                <ImageLoader
                  src="/images/papperboy/home/new-2.jpeg"
                  width={1492}
                  height={816}
                  alt="Image"
                  className="rounded-3"
                  style={{ backgroundSize: 'cover' }}
                />
              </Col>
              <Col md={5} className="bg-light">
                <h3 className="h4 from-top">What drives us?</h3>

                <p className="pb-2 delay-3 from-end d-none d-lg-block">
                  We believe, strongly, that Africa has all it needs to sustain
                  herself. A continent that holds more than a forth of the
                  world's natural and human resources is more than capable to
                  sustain herself. But mismangement and uneven distribution of
                  resources for production has greatly stunted Africa's growth.
                  <br></br>
                  <br></br>
                  Those who need resources for productions - the Entrepreneurs,
                  idealists and creators are largely marginalised and often, do
                  not get access to the rescorces needed to create products and
                  services that will contribute towards the development of the
                  continent.
                  <br></br>
                  <br></br> Papperboy aims to solve this problem by connecting
                  those who have funds, to those who need them for production of
                  solutions.
                </p>
                <Link href="papperboy/about" passHref>
                  <Button variant="primary rounded-pill delay-4 scale-up">
                    Read more
                    <i className="fi-chevron-right fs-sm ms-2"></i>
                  </Button>
                </Link>
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>

        {/* External Prev/Next buttons */}
        <div className="d-flex pt-2 mt-4">
          <Button
            id="prevVenue"
            variant="prev"
            className="position-relative mx-2"
          />
          <Button
            id="nextVenue"
            variant="next"
            className="position-relative mx-2"
          />
        </div>
      </Container>

      {/* Upcoming events (slider) */}
      <Container as="section" className="mb-5 pb-3">
        <div className="d-md-flex align-items-center justify-content-between position-relative zindex-5 mb-2 pb-md-2">
          <h2 className="h3 w-100 mb-4 mb-md-3 me-md-3">Upcoming Projects</h2>

          {/* Sorting by date */}
          <InputGroup
            className="flex-shrink-0 d-inline-flex align-middle me-3 mb-3"
            style={{ maxWidth: '180px' }}
          >
            <FormControl
              as={DatePicker}
              selected={startDate}
              minDate={new Date()}
              onChange={(date) => setStartDate(date)}
              placeholderText="Choose date"
              size="sm"
              className="rounded-pill ps-5"
            />
            <i className="fi-calendar position-absolute top-50 start-0 translate-middle-y ms-3 ps-1"></i>
          </InputGroup>
          <Button
            size="sm"
            variant="secondary rounded-pill fw-normal ms-n1 me-3 mb-3"
          >
            This Week
          </Button>
          <Button
            size="sm"
            variant="secondary rounded-pill fw-normal ms-n1 me-3 mb-3"
          >
            This Month
          </Button>
          <Link href="/papperboy/catalog" passHref>
            <Button variant="link ms-md-3 ms-auto mb-3 p-0 fw-normal">
              View all
              <i className="fi-arrow-long-right ms-2"></i>
            </Button>
          </Link>
        </div>

        {/* Swiper slider */}
        <div className="position-relative">
          <Swiper
            modules={[Navigation, Pagination]}
            centeredSlides
            loop
            navigation={{
              prevEl: '#prevEvent',
              nextEl: '#nextEvent',
            }}
            pagination={{
              el: '#bullets',
              clickable: true,
            }}
            spaceBetween={16}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 1,
              },
              991: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="swiper-centered"
          >
            <SwiperSlide>
              <VenueCardOverlay
                img={{
                  src: '/images/papperboy/home/upcoming-1.jpeg',
                  alt: 'Background image',
                }}
                title="Simon Rock Restaurant"
                date="Nov 15"
                time="21:00"
                button={{
                  href: '#',
                  title: 'Add to watch list',
                  variant: 'primary rounded-pill',
                  props: {
                    onClick: () =>
                      console.log(
                        "You've just bought tickets to Simon Rock Concert."
                      ),
                  },
                  wishlistProps: {
                    onClick: () =>
                      console.log(
                        "You've added Simon Rock Concert event to your wishlist!"
                      ),
                  },
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <VenueCardOverlay
                img={{
                  src: '/images/papperboy/home/upcoming-2.jpeg',
                  alt: 'Background image',
                }}
                title="Holi IT Solutions"
                date="Dec 12"
                time="10:00"
                button={{
                  href: '#',
                  title: 'Add to watch lis',
                  variant: 'primary rounded-pill',
                  props: {
                    onClick: () =>
                      console.log(
                        "You've just bought tickets to Holi Festival."
                      ),
                  },
                  wishlistProps: {
                    onClick: () =>
                      console.log(
                        "You've added Holi Festival event to your wishlist!"
                      ),
                  },
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <VenueCardOverlay
                img={{
                  src: '/images/papperboy/home/upcoming-3.jpeg',
                  alt: 'Background image',
                }}
                title="Mestern Digital Creators"
                date="Nov 11"
                time="18:00"
                button={{
                  href: '#',
                  title: 'Add to watch lis',
                  variant: 'primary rounded-pill',
                  props: {
                    onClick: () =>
                      console.log(
                        "You've just bought tickets to Football Match."
                      ),
                  },
                  wishlistProps: {
                    onClick: () =>
                      console.log(
                        "You've added Football Match event to your wishlist!"
                      ),
                  },
                }}
              />
            </SwiperSlide>
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button
            id="prevEvent"
            variant="prev"
            className="d-none d-xxl-block ms-n5"
          />
          <Button
            id="nextEvent"
            variant="next"
            className="d-none d-xxl-block me-n5"
          />
        </div>

        {/* External pagination (bullets) buttons */}
        <div
          id="bullets"
          className="swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3"
        ></div>
      </Container>

      {/* How it works */}
      <Container as="section" className="mb-5 pb-2 pb-lg-5">
        <h2 className="h3 mb-4 pb-sm-2">How to invest</h2>
        <Row lg={4} sm={2} xs={1} className="gy-sm-5 gy-3">
          <Col>
            <Card border="0" className="shadow position-relative h-100">
              <Card.Body>
                <div className="h2 mb-2 text-primary">01</div>
                <Card.Title as="h5" className="mb-2">
                  Create an account
                </Card.Title>
                <Card.Text className="fs-sm">
                  Opening an account is very easy. All you need is an email
                  address!
                </Card.Text>
              </Card.Body>
              {/* Arrow shape */}
              <svg
                className="position-absolute top-0 end-0 mt-n2 d-sm-block d-none"
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="30"
                fill="none"
                style={{ transform: 'translateY(-100%) translateX(70%)' }}
              >
                <path
                  d="M77.955 14.396c.128-2.86 0-4.67-.576-4.745s-1.279 1.607-2.11 4.378l-1.279 4.897-.563 2.683c-.612-1.434-1.352-2.81-2.212-4.113-2.718-4.072-6.226-7.569-10.321-10.288C54.205 2.687 46.332.186 38.233.008c-8.823-.165-17.491 2.305-24.874 7.087C6.581 11.549 2.118 17.395.66 22.191.033 24.057-.15 26.04.123 27.987c.243 1.367.627 2.037.755 2.012.396 0-.396-3.025 1.522-7.264s6.394-9.339 12.789-13.123c6.905-4.018 14.838-5.974 22.841-5.631 3.811.182 7.574.924 11.164 2.202 7.323 2.623 13.717 7.296 18.403 13.452 1.061 1.417 1.816 2.531 2.404 3.417l-1.637-.278-5.295-1.012c-3.031-.569-4.988-.848-5.179-.392s1.419 1.544 4.335 2.759a47.66 47.66 0 0 0 5.269 1.772c1.023.278 2.097.544 3.21.772.588.127 1.1.228 1.765.342.541.152 1.109.184 1.663.094a3.86 3.86 0 0 0 1.547-.613 2.76 2.76 0 0 0 .934-1.265c.088-.252.156-.51.205-.772l.09-.595.23-1.544.384-2.949c.217-1.873.371-3.569.435-5.062"
                  fill="#fd5631"
                ></path>
              </svg>
            </Card>
          </Col>
          <Col>
            <Card border="0" className="shadow position-relative h-100">
              <Card.Body>
                <div className="h2 mb-2 text-primary">02</div>
                <Card.Title as="h5" className="mb-2">
                  Activate your account
                </Card.Title>
                <Card.Text className="fs-sm">
                  To keep Papperboy safe for everyone, you will be required to
                  verify your identity.
                </Card.Text>
              </Card.Body>
              {/* Arrow shape */}
              <svg
                className="position-absolute top-0 end-0 mt-n2 d-lg-block d-none"
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="30"
                fill="none"
                style={{ transform: 'translateY(-100%) translateX(70%)' }}
              >
                <path
                  d="M77.955 14.396c.128-2.86 0-4.67-.576-4.745s-1.279 1.607-2.11 4.378l-1.279 4.897-.563 2.683c-.612-1.434-1.352-2.81-2.212-4.113-2.718-4.072-6.226-7.569-10.321-10.288C54.205 2.687 46.332.186 38.233.008c-8.823-.165-17.491 2.305-24.874 7.087C6.581 11.549 2.118 17.395.66 22.191.033 24.057-.15 26.04.123 27.987c.243 1.367.627 2.037.755 2.012.396 0-.396-3.025 1.522-7.264s6.394-9.339 12.789-13.123c6.905-4.018 14.838-5.974 22.841-5.631 3.811.182 7.574.924 11.164 2.202 7.323 2.623 13.717 7.296 18.403 13.452 1.061 1.417 1.816 2.531 2.404 3.417l-1.637-.278-5.295-1.012c-3.031-.569-4.988-.848-5.179-.392s1.419 1.544 4.335 2.759a47.66 47.66 0 0 0 5.269 1.772c1.023.278 2.097.544 3.21.772.588.127 1.1.228 1.765.342.541.152 1.109.184 1.663.094a3.86 3.86 0 0 0 1.547-.613 2.76 2.76 0 0 0 .934-1.265c.088-.252.156-.51.205-.772l.09-.595.23-1.544.384-2.949c.217-1.873.371-3.569.435-5.062"
                  fill="#fd5631"
                ></path>
              </svg>
            </Card>
          </Col>
          <Col>
            <Card border="0" className="shadow position-relative h-100">
              <Card.Body>
                <div className="h2 mb-2 text-primary">03</div>
                <Card.Title as="h5" className="mb-2">
                  Select your investment plan
                </Card.Title>
                <Card.Text className="fs-sm">
                  Choose to invest by yourself or allow our experts select for
                  you
                </Card.Text>
              </Card.Body>
              {/* Arrow shape */}
              <svg
                className="position-absolute top-0 end-0 mt-n2 d-sm-block d-none"
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="30"
                fill="none"
                style={{ transform: 'translateY(-100%) translateX(70%)' }}
              >
                <path
                  d="M77.955 14.396c.128-2.86 0-4.67-.576-4.745s-1.279 1.607-2.11 4.378l-1.279 4.897-.563 2.683c-.612-1.434-1.352-2.81-2.212-4.113-2.718-4.072-6.226-7.569-10.321-10.288C54.205 2.687 46.332.186 38.233.008c-8.823-.165-17.491 2.305-24.874 7.087C6.581 11.549 2.118 17.395.66 22.191.033 24.057-.15 26.04.123 27.987c.243 1.367.627 2.037.755 2.012.396 0-.396-3.025 1.522-7.264s6.394-9.339 12.789-13.123c6.905-4.018 14.838-5.974 22.841-5.631 3.811.182 7.574.924 11.164 2.202 7.323 2.623 13.717 7.296 18.403 13.452 1.061 1.417 1.816 2.531 2.404 3.417l-1.637-.278-5.295-1.012c-3.031-.569-4.988-.848-5.179-.392s1.419 1.544 4.335 2.759a47.66 47.66 0 0 0 5.269 1.772c1.023.278 2.097.544 3.21.772.588.127 1.1.228 1.765.342.541.152 1.109.184 1.663.094a3.86 3.86 0 0 0 1.547-.613 2.76 2.76 0 0 0 .934-1.265c.088-.252.156-.51.205-.772l.09-.595.23-1.544.384-2.949c.217-1.873.371-3.569.435-5.062"
                  fill="#fd5631"
                ></path>
              </svg>
            </Card>
          </Col>
          <Col>
            <Card border="0" className="shadow position-relative h-100">
              <Card.Body>
                <div className="h2 mb-2 text-primary">04</div>
                <Card.Title as="h5" className="mb-2">
                  Start investing!
                </Card.Title>
                <Card.Text className="fs-sm">
                  Start investing and earning!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Mobile app CTA */}
      <Container as="section">
        <div
          className="bg-faded-accent rounded-3"
          style={{ marginBottom: '7rem' }}
        >
          <Row className="align-items-center">
            <Col lg={5} md={6} className="ps-lg-5">
              <div className="ps-xl-5 pe-md-0 pt-4 pb-md-4 px-3 text-center text-md-start">
                <h2 className="mb-md-3 pt-2 pt-md-0 mb-2 pb-md-0 pb-1">
                  Get Our App
                </h2>
                <p className="mb-4 pb-xl-3 fs-md">
                  Download the app and get started!
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
                  <MarketButton
                    href="#"
                    market="apple"
                    target="_blank"
                    className="me-sm-3 mb-3"
                  />
                  <MarketButton
                    href="#"
                    market="google"
                    target="_blank"
                    className="mb-3"
                  />
                </div>
              </div>
            </Col>
            <Col lg={7} md={6}>
              <div className="d-none d-md-flex" style={{ maxWidth: '698px' }}>
                <ImageLoader
                  src="/images/papperboy/illustrations/app.jpeg"
                  width={1396}
                  height={634}
                  alt="Illustration"
                />
              </div>
              <div
                className="d-flex d-md-none mx-auto"
                style={{ maxWidth: '446px' }}
              >
                <ImageLoader
                  src="/images/papperboy/illustrations/app-m.jpeg"
                  width={892}
                  height={760}
                  alt="Illustration"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* CTA */}
      <Container as="section" className="position-relative zindex-1">
        <div className="bg-secondary rounded-3 px-3 py-5">
          <div className="text-center py-sm-3 py-md-5">
            <h3 className="h5 fw-normal">Ready to get started?</h3>
            <h2 className="pb-4">Become a part of the bourgeooning Africa!</h2>
            <Button
              href="signup-light"
              variant="primary rounded-pill"
              size="lg"
              rel="noreferrer"
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </CityGuidePageLayout>
  );
};

export default IndexPage;
