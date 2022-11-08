import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Collapse from 'react-bootstrap/Collapse'
import Alert from 'react-bootstrap/Alert'
import ScrollLink from '../../components/ScrollLink'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'






const AddBusinessPage = () => {

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-secondary')
    return () => body.classList.remove('bg-secondary')
  })

  // Category select
  const categories = [
    
    { icon: 'fi-real-estate-house', title: 'Real Estate' },
    { icon: 'fi-plant', title: 'Agriculture' },
    { icon: 'fi-computer', title: 'Technology' },
    { icon: 'fi-car', title: 'Logistics' },
    { icon: 'fi-entertainment', title: 'Entertainment' },
    { icon: 'fi-shopping-bag', title: 'Retail & Consumer' },
    { icon: 'fi-museum', title: 'Education' },
    { icon: 'fi-meds', title: 'Medicine' },
    
  ]

  const [category, setCategory] = useState('Agriculture')

  const handleCategorySelect = (eventKey, e) => {
    setCategory(eventKey)
  }

  // Socials collapse state
  const [socialOpen, setSocialOpen] = useState(false)

  // About collapse state
  const [aboutOpen, setAboutOpen] = useState(false)

  // Amenities collapse state
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)

  // Amenities array (Preview modal)
  const amenitiesPreview = [
    [
      { icon: 'fi-wifi', title: 'Free WiFi' },
      { icon: 'fi-swimming-pool', title: '2 swimming pools' },
      { icon: 'fi-pet', title: 'Pets-friendly' },
      { icon: 'fi-parking', title: 'Free parking' },
      { icon: 'fi-spa', title: 'Spa lounge' },
      { icon: 'fi-cafe', title: 'Restaurant' },
      { icon: 'fi-hotel-bell', title: 'Room service' },
      { icon: 'fi-cocktail', title: 'Bar' },
      { icon: 'fi-dumbell', title: 'Fitness Center' }
    ],
    [
      { icon: 'fi-dish', title: 'Dishwasher' },
      { icon: 'fi-thermometer', title: 'Heating' }
    ]
  ]

  // Room types array (Preview modal)
  const roomTypesPreview = [
    { icon: 'fi-no-smoke', title: 'Non-smoking rooms' },
    { icon: 'fi-single-bed', title: 'Single rooms' },
    { icon: 'fi-double-bed', title: 'Family suites' }
  ]

  // Awards array (Preview modal)
  const awardsPreview = [
    { img: '/images/city-guide/single/awards/01.jpg', title: '2022 Traveler\'s Choice' },
    { img: '/images/city-guide/single/awards/02.jpg', title: 'TUI Top Quality 2021' },
    { img: '/images/city-guide/single/awards/03.jpg', title: 'TUI Holly 2019' }
  ]


  // Register Filepond plugins
  registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
  )

  // Profile logo 
  const [profile, setProfile] = useState([])

  // Gallery state
  const [gallery, setGallery] = useState([])

  // Number of rooms radios buttons
  const [roomsValue, setRoomsValue] = useState('')
  const rooms = [
    {name: '5+', value: '5+'},
    {name: '10+', value: '10+'},
    {name: '20+', value: '20+'},
    {name: '50+', value: '50+'},
    {name: '100+', value: '100+'},
    {name: '200+', value: '200+'}
  ]

  // Hotel rating
  const [rating, setRating] = useState('')
  const stars = [
    {value: '5 stars', rating: 5.0},
    {value: '4 stars', rating: 4.0},
    {value: '3 stars', rating: 3.0},
    {value: '2 stars', rating: 2.0},
    {value: '1 stars', rating: 1.0},
  ]

  // Amenities
  const amenities = [
    {value: 'WiFi', checked: true},
    {value: 'Parking place', checked: true},
    {value: 'Swimming pool', checked: false},
    {value: 'Spa lounge', checked: false},
    {value: 'Gym', checked: false},
    {value: 'Laundry service', checked: true},
    {value: 'Pets-friendly', checked: false},
    {value: 'Restaurant', checked: false},
    {value: 'Bar', checked: false},
    {value: 'TV', checked: true},
    {value: 'Air conditioning', checked: false},
    {value: 'Heating', checked: true},
    {value: 'Dishwasher', checked: false},
    {value: 'Iron', checked: false},
    {value: 'Hair dryer', checked: false},
    {value: 'Kitchen', checked: false},
    {value: 'Breakfast', checked: false},
    {value: 'Security cameras', checked: false}
  ]

  // Room types
  const roomTypes = [
    {value: 'Non-smoking rooms', checked: false},
    {value: 'Single rooms', checked: false},
    {value: 'Double rooms', checked: false},
    {value: 'Family suites', checked: false}
  ]

  // Anchor lnks
  const anchors = [
    {to: 'basic-info', label: 'Basic info', completed: true},
    {to: 'location', label: 'Location', completed: true},
    {to: 'contacts', label: 'Contacts', completed: false},
    {to: 'description', label: 'Description', completed: false},
    {to: 'price', label: 'Price range', completed: false},
    {to: 'photos', label: 'Photos / video', completed: false}
  ]

  // Preview modal
  const [previewShow, setPreviewShow] = useState(false)
  const handlePreviewClose = () => setPreviewShow(false)
  const handlePreviewShow = () => setPreviewShow(true)


  return (
    <CityGuidePageLayout
      pageTitle='Add Business'
      
      userLoggedIn
    >

      

      
      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5'>
        <Row>

          {/* Page content */}
          <Col lg={8}>

            {/* Breadcrumb */}
            <Breadcrumb className='mb-3 pt-2 pt-lg-3'>
              <Link href='/city-guide' passHref>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Link>
              <Breadcrumb.Item active>Add business</Breadcrumb.Item>
            </Breadcrumb>

            {/* Title */}
            <div className='mb-4'>
              <h1 className='h2 mb-0'>Add Project</h1>
              <div className='d-lg-none pt-3 mb-2'>33% content filled</div>
              <ProgressBar variant='warning' now={33} style={{height: '.25rem'}} className='d-lg-none mb-4' />
            </div>


            {/* Basic info */}
            <section id='basic-info' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
                Basic info
              </h2>
              <Form.Group controlId='ab-title' className='mb-3'>
                <Form.Label>Official business name <span className='text-danger'>*</span></Form.Label>
                <Form.Control defaultValue='Lagos Business Hotel' placeholder='Title for your business' required />
                <Form.Text>48 characters left</Form.Text>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Category <span className='text-danger'>*</span></Form.Label>
                <Dropdown onSelect={handleCategorySelect}>
                  <Dropdown.Toggle variant='outline-secondary col-md-6 col-12 d-flex align-items-center justify-content-between ps-3 fw-normal'>
                    Real Estate
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='w-100 my-1 p-3'>
                    <Row md={5} sm={3} xs={2} className='g-2'>
                      {categories.map(({icon, title}, indx) => (
                        <Col key={indx}>
                          <Dropdown.Item
                            as='button'
                            eventKey={title}
                            className='btn btn-outline-secondary border-0 d-block p-3 text-center'
                          >
                            <i className={`${icon} mb-1 fs-2 text-primary`}></i>
                            <span className='d-block fs-sm'>{title}</span>
                          </Dropdown.Item>
                        </Col>
                      ))}
                    </Row>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group as={Col} md={6} controlId='ab-subcategory'>
                <Form.Label>Subcategory <span className='text-danger'>*</span></Form.Label>
                <Form.Select defaultValue='hotel' required>
                  <option value='' disabled>Choose property type</option>
                  <option value='hotel'>Hotel</option>
                  <option value='hostel'>Hostel</option>
                  <option value='apartment'>Apartment</option>
                  <option value='house'>House</option>
                  <option value='commercial'>Commercial</option>
                </Form.Select>
              </Form.Group>
            </section>


            {/* Location */}
            <section id='location' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-map-pin text-primary fs-5 mt-n1 me-2'></i>
                Location
              </h2>
              <Row>
                <Form.Group as={Col} sm={6} controlId='ab-country' className='mb-3'>
                  <Form.Label>Country / region <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='Germany' required>
                    <option value='' disabled>Choose country</option>
                    <option value='Germany'>Nigeria</option>
                    <option value='Belgium'>Ghana</option>
                    <option value='Canada'>Cameroon</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-city' className='mb-3'>
                  <Form.Label>State <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='Berlin' required>
                    <option value='' disabled>Choose State</option>
                    <option value='Berlin'>Abuja</option>
                    <option value='Hamburg'>Lagos</option>
                    <option value='Munich'>Accra</option>
                   
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={8} controlId='ab-district' className='mb-3'>
                  <Form.Label>City <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='Berlin-Mitte' required>
                    <option value='' disabled>Choose city</option>
                    <option value='Berlin-Mitte'>Abuja</option>
                    <option value='Charlottenburg'>Lagos</option>
                    <option value='Prenzlauer Berg'>Portharcourt</option>
                    <option value='Friedrichshain'>Accra</option>
                    <option value='Kreuzberg'>Kaduna</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={4} controlId='ab-zip' className='mb-3'>
                  <Form.Label>Zip code <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='13127' placeholder='Enter Zip code' required />
                </Form.Group>
                <Form.Group as={Col} sm={12} controlId='ab-address' className='mb-3'>
                  <Form.Label>Street address <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='Jonas Str. 12' required />
                </Form.Group>
              </Row>
           
            </section>

            
            {/* Contacts */}
            <section id='contacts' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-phone text-primary fs-5 mt-n1 me-2'></i>
                Contacts
              </h2>
              <Row>
                <Form.Group as={Col} sm={6} controlId='ab-email' className='mb-3'>
                  <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='email' placeholder='Enter email' required />
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-phone' className='mb-3'>
                  <Form.Label>Phone <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='tel' placeholder='Enter phone number' required />
                </Form.Group>
                <Form.Group as={Col} xs={12} controlId='ab-website' className='pb-3 mb-3'>
                  <Form.Label>Website</Form.Label>
                  <Form.Control type='url' placeholder='Enter your website' />
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Label className='fw-bold mb-3'>Socials</Form.Label>
                  <div className='d-flex align-items-center mb-3'>
                    <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                      <i className='fi-facebook text-body'></i>
                    </Button>
                    <Form.Control placeholder='Your Facebook account' />
                  </div>
                  <div className='d-flex align-items-center mb-3'>
                    <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                      <i className='fi-foursquare text-body'></i>
                    </Button>
                    <Form.Control placeholder='Your Foursquare account' />
                  </div>
                  <div className='d-flex align-items-center mb-3'>
                    <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                      <i className='fi-twitter text-body'></i>
                    </Button>
                    <Form.Control placeholder='Your Twitter account' />
                  </div>
                  <Collapse in={socialOpen}>
                    <div id='moreSocials'>
                      <div className='d-flex align-items-center mb-3'>
                        <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                          <i className='fi-instagram text-body'></i>
                        </Button>
                        <Form.Control placeholder='Your Instagram account' />
                      </div>
                      <div className='d-flex align-items-center mb-3'>
                        <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                          <i className='fi-linkedin text-body'></i>
                        </Button>
                        <Form.Control placeholder='Your LinkedIn account' />
                      </div>
                    </div>
                  </Collapse>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setSocialOpen(!socialOpen)
                    }}
                    aria-controls='moreSocials'
                    aria-expanded={socialOpen}
                    className={`collapse-label d-inline-block fs-sm fw-bold text-decoration-none pt-2 mb-1${socialOpen ? '' : ' collapsed'}`}
                  >
                    <i className='fi-arrow-down me-2'></i>
                    {socialOpen ? 'Show less' : 'Show more'}
                  </a>
                </Form.Group>
              </Row>
            </section>


            {/* Dscription */}
            <section id='description' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-edit text-primary fs-5 mt-n1 me-2'></i>
                Description
              </h2>
              <Form.Group controlId='ab-description' className='mb-4'>
                <Form.Label>Description <span className='text-danger'>*</span></Form.Label>
                <Row>
                  <Col md={9} className='mb-md-0 mb-3'>
                    <Form.Control as='textarea' rows={6} placeholder='Describe your accommodation' />
                    <Form.Text>8000 characters left</Form.Text>
                  </Col>
                  <Col md={3}>
                    <FilePond
                      files={profile}
                      onupdatefiles={setProfile}
                      // server='/api' {/* Configure your server here. See plugin docs */}
                      name='profile'
                      labelIdle='<i class="d-inline-block fi-cloud-upload fs-2 text-muted mb-2"></i><br>Upload logo'
                      acceptedFileTypes={['image/png', 'image/jpeg']}
                      stylePanelLayout='compact'
                      imagePreviewHeight={160}
                      imageCropAspectRatio='1:1'
                      imageResizeTargetWidth={200}
                      imageResizeTargetHeight={200}
                      className='file-uploader bg-secondary'
                    />
                  </Col>
                </Row>
              </Form.Group>
             
       
              
              <Form.Group controlId='ab-award' className='mb-3'>
                <Form.Label className='fw-bold mb-2 pb-1'>Business License & Certificates</Form.Label>
                <Form.Control type='file' />
              </Form.Group>
              <a href='#' className='fw-bold text-decoration-none text-nowrap' onClick={(e) => e.preventDefault()}>
                <i className='fi-plus me-2 mt-n1 fs-sm align-middle'></i>
                Add more
              </a>
            </section>


            {/* Price range */}
            <section id='price' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-cash text-primary fs-5 mt-n1 me-2'></i>
                Project goal
              </h2>
              <Form.Label htmlFor='ab-price'>Price range <span className='text-danger'>*</span></Form.Label>
              <Col md={8} className='d-flex flex-sm-row flex-column px-0'>
                <div className='d-flex align-items-center me-sm-2 mb-sm-0 mb-2'>
                  <Form.Control type='number' id='ab-price' min='50' step='10' placeholder='Min' required />
                  <div className='mx-2'>—</div>
                  <Form.Control type='number' min='60' step='10' placeholder='Max' required />
                </div>
                <Form.Select className='w-sm-25 ms-sm-0 ms-auto'>
                  <option value='usd'>$</option>
                  <option value='eur'>€</option>
                  <option value='gbp'>£</option>
                  <option value='jpy'>¥</option>
                </Form.Select>
              </Col>
            </section>


            {/* Photos / video */}
            <section id='photos' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-image text-primary fs-5 mt-n1 me-2'></i>
                Photos / video
              </h2>
              <Alert variant='info' className='d-flex mb-4'>
                <i className='fi-alert-circle me-2 me-sm-3'></i>
                <p className='fs-sm mb-1'>The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.<br />
                The maximum video size is 10 MB. Formats: mp4, mov.</p>
              </Alert>
              <FilePond
                files={gallery}
                onupdatefiles={setGallery}
                // server='/api' {/* Configure your server here. See plugin docs */}
                name='gallery'
                labelIdle='<div class="btn btn-primary rounded-pill mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div>or drag them in</div>'
                acceptedFileTypes={['image/png', 'image/jpeg', 'video/mp4', 'video/mov']}
                allowMultiple={true}
                maxFiles={4}
                maxFileSize='2MB'
                className='file-uploader file-uploader-grid'
              />
            </section>


            {/* Action buttons */}
            <section className='d-sm-flex justify-content-between pt-2'>
              <Button size='lg' variant='outline-primary d-block rounded-pill w-100 w-sm-auto mb-3 mb-sm-2' >
                <i className='fi-eye-on ms-n1 me-2'></i>
                Preview
              </Button>
              
                <Button size='lg' variant='primary d-block rounded-pill w-100 w-sm-auto mb-2'>Save and continue</Button>
              
            </section>
          </Col>


          {/* Sidebar (Progress of completion) */}
          <Col lg={{span: 3, offset: 1}} className='d-none d-lg-block'>
            <div className='sticky-top pt-5'>
              <h6 className='pt-5 mt-3 mb-2'>33% content filled</h6>
              <ProgressBar variant='warning' now={33} style={{height: '.25rem'}} className='mb-4' />
              <ul className='list-unstyled'>
                {anchors.map((anchor, indx) => (
                  <li key={indx} className='d-flex align-items-center'>
                    <i className={`fi-check text-${anchor.completed ? 'primary' : 'muted'} me-2`}></i>
                    <ScrollLink to={anchor.to} smooth='easeInOutQuart' duration={600} offset={-95} className='nav-link fw-normal ps-1 p-0'>
                      {anchor.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </CityGuidePageLayout>
  )
}

export default AddBusinessPage
