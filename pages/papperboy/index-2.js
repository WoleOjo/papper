import { useState } from 'react'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../components/ImageLoader'
import FormGroup from '../../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'
import IconBox from '../../components/IconBox'
import VenueCard from '../../components/VenueCard'
import BlogCard from '../../components/BlogCard'
import MarketButton from '../../components/MarketButton'
import VenueCardOverlay from '../../components/VenueCardOverlay'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import DatePicker from 'react-datepicker'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'react-datepicker/dist/react-datepicker.css'

const BgParallax = dynamic(() => import('../../components/BgParallax'), { ssr: false })

const HomeAltPage = () => {

  // Categories array
  const categories = [
    [
     { href: '/city-guide/catalog',
        media: 'fi-plant',
        color: 'success',
        title: 'Agriculture',
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-real-estate-house',
        color: 'accent',
        title: 'Real Estate',
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-device-desktop',
        color: 'warning',
        title: 'Technology',
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-car',
        color: 'danger',
        title: 'Logistics',
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-shopping-bag',
        color: 'dark',
        title: 'Retail & Consumer',
      },
    ],
    [
      {
        href: '/city-guide/catalog',
        media: 'fi-museum',
        title: 'Education',
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-meds',
        title: 'Medicine',
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-entertainment',
        title: 'Entertainment',
      }
    ]
  ]  

  // Places to stay array
  const places = [
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/01.jpg',
      title: 'Berlin Business Hotel',
      rating: [5.0, 48],
      price: '$$',
      location: '1.4 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/02.jpg',
      title: 'Big Tree Cottage',
      rating: [4.8, 24],
      price: '$$$',
      location: '0.5 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/03.jpg',
      title: 'Grand Resort & Spa',
      rating: [4.9, 43],
      price: '$$$',
      location: '1.8 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/04.jpg',
      title: 'Merry Berry Motel',
      rating: [4.5, 12],
      price: '$$',
      location: '0.4 km from center'
    }
  ]  

  // Places to eat (restaurants) array
  const restaurants1 = [
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/01.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'Pina Pizza Restaurant',
      rating: [5.0, 48],
      price: '$$',
      location: '1.4 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/02.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'KFC',
      rating: [4.0, 19],
      price: '$',
      location: '1.8 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/03.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'Yum Restaurant',
      rating: [4.6, 63],
      price: '$',
      location: '2.4 km from center'
    }
  ]
  const restaurants2 = [
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/04.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'Tosaka Sushi Bar',
      rating: [5.0, 27],
      price: '$$$',
      location: '2.5 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/05.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'Dunkin\' Donuts',
      rating: [4.8, 43],
      price: '$',
      location: '1.7 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/06.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'Spicy Bar-Restaurant',
      rating: [5.0, 32],
      price: '$$$',
      location: '0.6 km from center'
    }
  ]

  // Datepicker state
  const [startDate, setStartDate] = useState(null)

  // Latest blog posts array
  const posts = [
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/01.jpg',
      category: ['#', 'Travelling'],
      title: 'Air Travel in the Time of COVID-19',
      author: ['#', '/images/avatars/16.png', 'Bessie Cooper'],
      date: 'May 24',
      comments: 'No comments'
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/02.jpg',
      category: ['#', 'Entertainment'],
      title: '10 World-Class Museums You Can Visit Online',
      author: ['#', '/images/avatars/18.png', 'Annette Black'],
      date: 'Apr 28',
      comments: '4 comments'
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/03.jpg',
      category: ['#', 'Travelling'],
      title: '7 Tips for Solo Travelers in Africa',
      author: ['#', '/images/avatars/17.png', 'Ralph Edwards'],
      date: 'Apr 15',
      comments: '2 comments'
    }
  ]


  return (
    <CityGuidePageLayout
      pageTitle='Home v.2'
      
      navbarExtraClass='bg-light'
    >

      {/* Hero */}
      <BgParallax
        imgSrc='/images/city-guide/home/hero-bg-2.jpeg'
        type='scroll' // scale, opacity, scroll-opacity, scale-opacity
        speed={0.5} // from -1.0 to 2.0
        overlay='gradient' // or overlay={50} from 0 to 100
        className='position-relative bg-dark zindex-1 py-xxl-5'
      >
        <Container className='content-overlay py-md-5 mt-n2 mb-lg-3'>
          <div className='mt-5 mb-md-5 py-5'>
            <Col xl={6} lg={8} md={10} className='mx-auto mb-sm-5 mb-4 px-0 text-center'>
              <h1 className='display-5 text-light d-flex flex-wrap align-items-center justify-content-center mt-sm-5 mt-4 my-3'>
                <span className='me-2'>Start exploring</span>
                <Dropdown as='span' className='d-inline-block'>
                  <Dropdown.Toggle className='bg-transparent text-primary border-0 shadow-none text-decoration-none py-1 px-0' style={{fontSize: 'inherit'}}>
                    Nigeria
                    <Dropdown.Menu align='end'>
                      <Dropdown.Item className='fs-base fw-bold'>Ghana</Dropdown.Item>
                      <Dropdown.Item className='fs-base fw-bold'>Cameroon</Dropdown.Item>
                      
                    </Dropdown.Menu>
                  </Dropdown.Toggle>
                </Dropdown>
              </h1>
              <p className='fs-lg text-white'>We connect those with funds to those who need them to develop life-changing solutions</p>
            </Col>
            <Col xl={8} lg={9} md={10} className='mx-auto px-0'>

              {/* Search form */}
              <FormGroup className='d-block d-md-flex rounded-md-pill mb-2 mb-sm-4'>
                <InputGroup size='lg' className='border-end-md'>
                  <InputGroup.Text className='text-muted ps-3'>
                    <i className='fi-search'></i>
                  </InputGroup.Text>
                  <FormControl aria-label='Search field' placeholder='What are you looking for?' />
                </InputGroup>
                <hr className='d-md-none my-2' />
                <div className='d-sm-flex'>
                  <DropdownSelect
                    defaultValue='All categories'
                    icon='fi-list'
                    options={[
                      ['fi-bed', 'Accomodation'],
                      ['fi-cafe', 'Food & Drink'],
                      ['fi-shopping-bag', 'Shopping'],
                      ['fi-museum', 'Art & Hisory'],
                      ['fi-entertainment', 'Entertainment'],
                      ['fi-meds', 'Medicine'],
                      ['fi-makeup', 'Beauty'],
                      ['fi-car', 'Car Rental']
                    ]}
                    variant='link btn-lg ps-2 ps-sm-3'
                    className='w-100 mb-sm-0 mb-3'
                  />
                  <Button size='lg' className='rounded-pill w-100 w-md-auto ms-sm-3'>Search</Button>
                </div>
              </FormGroup>
            </Col>
          </div>
        </Container>
        <div className='position-absolute d-none d-xxl-block bottom-0 start-0 w-100 bg-white zindex-1' style={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px', height: '30px', marginBottom: '-65px'}}></div>
      </BgParallax>


      {/* Categories */}
      <Container as='section' className='py-5 pt-xxl-4 mt-md-2 mb-md-4'>
        <Row lg={6} sm={3} xs={2} className='g-3 g-xl-4'>
          {categories[0].map((category, indx) => (
            <Col key={indx}>
              <IconBox
                href={category.href}
                type='card-shadow'
                media={category.media}
                mediaColor={category.color}
                mediaShape='circle'
                title={category.title}
                align='center'
              />
            </Col>
          ))}
          <Col>
            <Dropdown className='h-100'>
              <Dropdown.Toggle as='div' className='dropdown-toggle-flush h-100 bg-transparent border-0 shadow-none p-0'>
                <IconBox
                  type='card-shadow'
                  media='fi-dots-horisontal'
                  mediaColor='info'
                  mediaShape='circle'
                  title='More'
                  align='center'
                />
              </Dropdown.Toggle>
              <Dropdown.Menu align={{sm: 'end'}} className='my-2'>
                {categories[1].map((category, indx) => (
                  <Link key={indx} href={category.href} passHref>
                    <Dropdown.Item className='fw-bold'>
                      <i className={`${category.media} fs-base opacity-60 me-2`}></i>
                      {category.title}
                    </Dropdown.Item>
                  </Link>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>






     {/* Personalized search */}
     <Container as='section' className='mb-5 pb-lg-5 pb-2 pb-sm-3' >
        <Row className='gy-4 align-items-lg-center'>
          <Col xs={12} md={6}>
            <ImageLoader
              src='/images/city-guide/home/new-1.jpeg'
              width={745}
              height={585}
              alt='Personalized search'
              light='true'
              className='rounded-3'
            />
          </Col>
          <Col xs={12} md={6} lg={{span: 5, offset: 1}} className='text-md-start text-center'>
            <h2 className='mb-md-4 text-dark'>Personalized search</h2>
            <p className='mb-4 pb-md-3 text-dark opacity-70'>Ante senectus sed at lacus. Sed pellentesque dapibus nunc, cursus hendrerit at faucibus ornare lectus. Sed vitae congue mauris consectetur. Cursus tristique et porta eget sapien vivamus turpis. Ultrices vitae eget mattis varius ipsum adipiscing id. Neque, sagittis cursus aliquam volutpat tristique viverra amet amet.</p>
            <Link href='/car-finder/catalog?view=grid' passHref>
              <Button variant='primary' className='w-sm-auto w-100'>
                <i className='fi-search me-2'></i>
                Search car
              </Button>
            </Link>
          </Col>
        </Row>
      </Container> 









      {/* Banner + Places to eat */}
      <Container as='section' className='mb-5 pb-lg-4'>
        <Row>

          {/* Banner */}
          <Col lg={4} className='text-center text-lg-start mb-lg-0 mb-5'>
            <a href='#' className='d-block text-decoration-none bg-faded-accent rounded-3 h-100'>
              <div className='p-4'>
                <h2 className='mb-0 p-2 text-primary text-nowrap'>
                  <i className='fi-phone mt-n1 me-2 pe-1 fs-3 align-middle'></i>
                  Taxi
                  <span className='text-dark'>&nbsp;488</span>
                </h2>
                <p className='mb-0 p-2 fs-lg text-body'>The best way to&nbsp;get wherever you’re&nbsp;going!</p>
              </div>
              <ImageLoader
                src='/images/city-guide/illustrations/taxi.svg'
                width={416}
                height={240}
                alt='Illustraion'
              />
            </a>
          </Col>

          {/* Where to eat */}
          <Col lg={8} className='mb-n4 mb-sm-0'>
            <div className='d-flex align-items-center justify-content-between mb-4 pb-2'>
              <h2 className='h3 mb-0'>Where to eat</h2>
              <Link href='/city-guide/catalog' passHref>
                <Button variant='link fw-normal p-0'>
                  View all
                  <i className='fi-arrow-long-right ms-2'></i>
                </Button>
              </Link>
            </div>
            <Row>
              <Col sm={6}>
                {restaurants1.map((restaurant, indx) => (
                  <div key={indx} className='d-flex align-items-start position-relative mb-4'>
                    <ImageLoader
                      src={restaurant.imgSrc}
                      width={restaurant.imgSize[0]}
                      height={restaurant.imgSize[1]}
                      alt={restaurant.imgAlt}
                      className='flex-shrink-0 rounded-3'
                    />
                    <div className="ps-3">
                      <h3 className='mb-2 fs-lg'>
                        <Link href='/city-guide/single'>
                          <a className='nav-link stretched-link'>{restaurant.title}</a>
                        </Link>
                      </h3>
                      <ul className='list-unstyled mb-0 fs-xs'>
                        <li>
                          <i className='fi-star-filled mt-n1 me-1 fs-base text-warning align-middle'></i>
                          <b>{restaurant.rating[0]}</b>
                          <span className='text-muted'>&nbsp;({restaurant.rating[1]})</span>
                        </li>
                        <li>
                          <i className='fi-credit-card mt-n1 me-1 fs-base text-muted align-middle'></i>
                          {restaurant.price}
                        </li>
                        <li>
                          <i className='fi-map-pin mt-n1 me-1 fs-base text-muted align-middle'></i>
                          {restaurant.location}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}                
              </Col>
              <Col sm={6}>
                {restaurants2.map((restaurant, indx) => (
                  <div key={indx} className='d-flex align-items-start position-relative mb-4'>
                    <ImageLoader
                      src={restaurant.imgSrc}
                      width={restaurant.imgSize[0]}
                      height={restaurant.imgSize[1]}
                      alt={restaurant.imgAlt}
                      className='flex-shrink-0 rounded-3'
                    />
                    <div className="ps-3">
                      <h3 className='mb-2 fs-lg'>
                        <Link href='/city-guide/single'>
                          <a className='nav-link stretched-link'>{restaurant.title}</a>
                        </Link>
                      </h3>
                      <ul className='list-unstyled mb-0 fs-xs'>
                        <li>
                          <i className='fi-star-filled mt-n1 me-1 fs-base text-warning align-middle'></i>
                          <b>{restaurant.rating[0]}</b>
                          <span className='text-muted'>&nbsp;({restaurant.rating[1]})</span>
                        </li>
                        <li>
                          <i className='fi-credit-card mt-n1 me-1 fs-base text-muted align-middle'></i>
                          {restaurant.price}
                        </li>
                        <li>
                          <i className='fi-map-pin mt-n1 me-1 fs-base text-muted align-middle'></i>
                          {restaurant.location}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>



     
    </CityGuidePageLayout>
  )
}

export default HomeAltPage
