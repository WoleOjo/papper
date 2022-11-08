import dynamic from 'next/dynamic';
import Link from 'next/link';
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ImageLoader from '../../components/ImageLoader';
import IconBox from '../../components/IconBox';
import SocialButton from '../../components/SocialButton';
import FormGroup from '../../components/FormGroup';
import BlogCard from '../../components/BlogCard';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BgParallax = dynamic(() => import('../../components/BgParallax'), {
  ssr: false,
});

const AboutPage = () => {
  // Features array
  const features = [
    {
      icon: 'fi-briefcase',
      color: 'accent',
      title: 'Empowering Entrepreneurs',
      text: 'We connect those with funds to those who need them for producing solutions.',
    },
    {
      icon: 'fi-building',
      color: 'warning',
      title: 'Projects. Not companies',
      text: 'We are project oriented. We fund projects with high-impact potentials',
    },
    {
      icon: 'fi-chevrons-right',
      color: 'danger',
      title: 'Flexible Investment plans',
      text: 'Our Invetsment options are tailored to accommodate a wide range of choices ',
    },
    {
      icon: 'fi-check',
      color: 'success',
      title: 'Results-driven',
      text: 'We are highly result driven. And we hold all our businesses to the same standard',
    },
    {
      icon: 'fi-globe',
      color: 'primary',
      title: 'Fully licensed',
      text: 'We are fully licensed and incorporated accross three continents',
    },
    {
      icon: 'fi-like',
      color: 'success',
      title: 'All projects vetted',
      text: 'All projects on our platform pass through a vigorous vetting and checking process',
    },
    {
      icon: 'fi-filter-alt-vertical',
      color: 'info',
      title: 'AI-powered automated investment option',
      text: 'Our automated invesment option gives our customers the opportunity to diversify their investmnet accross multiple businesses',
    },
    {
      icon: 'fi-flame',
      color: 'warning',
      title: 'Market-beating returns on investment',
      text: 'We list high-growth business that offers consistently high returns ',
    },
  ];

  // FAQ array
  const faqs = [
    {
      title: 'Getting started',
      links: [
        ['#', 'Quis arcu euismod est, varius nisi?'],
        ['#', 'Aliquam, commodo sed nibh?'],
        ['#', 'Faucibus felis fames mauris dolor purus?'],
        ['#', 'Odio diam, tellus facilisi?'],
        ['#', 'Eu quisque libero, sed neque?'],
        ['#', 'Lectus sed sit cursus amet, vitae tempor?'],
      ],
    },
    {
      title: 'Partnership',
      links: [
        ['#', 'Tincidunt molestie scelerisque?'],
        ['#', 'Nunc, ipsum ut augue fusce ornare?'],
        ['#', 'Velit, mauris amet feugiat condimentum mollis?'],
        ['#', 'Lacus, sed fames mi cras id?'],
        ['#', 'Adipiscing magna suspendisse?'],
        ['#', 'Libero pellentesque ultricies maecenas?'],
      ],
    },
    {
      title: 'Account & profile',
      links: [
        ['#', 'Cursus fusce volutpat tempor?'],
        ['#', 'A senectus auctor sodales gravida non elit?'],
        ['#', 'Mauris accumsan vel rhoncus?'],
        ['#', 'Cras nunc, semper lectus turpis?'],
        ['#', 'Pulvinar sed morbi massa nulla dolor eget?'],
        ['#', 'Bibendum mattis amet amet?'],
      ],
    },
    {
      title: 'Privacy & security',
      links: [
        ['#', 'Pellentesque ante quisque sit?'],
        ['#', 'Eu quam bibendum adipiscing leo?'],
        ['#', 'Massa fermentum, eget nec elementum?'],
        ['#', 'In quis pulvinar amet morbi praesent?'],
        ['#', 'Eros, dolor in consequat netus?'],
        ['#', 'Quis gravida felis dui non gravida?'],
      ],
    },
    {
      title: 'Transactions',
      links: [
        ['#', 'Nisl urna id aliquam sed vitae pellentesque?'],
        ['#', 'Nam morbi faucibus ultricies euismod?'],
        ['#', 'Amet scelerisque consectetur consequa?'],
        ['#', 'Sapien at fames urna in id at?'],
        ['#', 'Fames id nullam et id proin ante ultrices?'],
        ['#', 'Quis ultricies turpis commodo, elit lectus?'],
      ],
    },
    {
      title: 'Privacy & security',
      links: [
        ['#', 'Lacus eget amet blandit egestas?'],
        ['#', 'Augue at donec molestie vulputate cum?'],
        ['#', 'Viverra adipiscing nisl, lacus at et?'],
        ['#', 'Sagittis dictum hendrerit faucibus malesuada?'],
        ['#', 'Tempus est non sapien tempus?'],
        ['#', 'Nunc est hendrerit volutpat nunc donec?'],
      ],
    },
  ];

  // Team members array
  const team = [
    {
      img: '/images/papperboy/about/team/01.png',
      name: 'Wole-Ojo Solomon',
      position: 'Founder',
      socials: [
        ['#', 'facebook'],
        ['#', 'twitter'],
        ['#', 'instagram'],
      ],
    },
    {
      img: '/images/papperboy/about/team/08.jpeg',
      name: 'Dianne Russell',
      position: 'Operations Manager',
      socials: [
        ['#', 'facebook'],
        ['#', 'twitter'],
        ['#', 'instagram'],
      ],
    },
    {
      img: '/images/papperboy/about/team/07.jpeg',
      name: 'Ailmen Victor',
      position: 'Software Developer',
      socials: [
        ['#', 'facebook'],
        ['#', 'twitter'],
        ['#', 'instagram'],
      ],
    },
    {
      img: '/images/papperboy/about/team/09.jpeg',
      name: 'Tinu Williams',
      position: 'Chief Financial Officer',
      socials: [
        ['#', 'facebook'],
        ['#', 'twitter'],
        ['#', 'instagram'],
      ],
    },
  ];

  // Latest blog posts array
  const posts = [
    {
      href: '/papperboy/blog-single',
      img: '/images/papperboy/blog/01.jpg',
      category: ['#', 'Travelling'],
      title: 'Air Travel in the Time of COVID-19',
      author: ['#', '/images/avatars/16.png', 'Bessie Cooper'],
      date: 'May 24',
      comments: 'No comments',
    },
    {
      href: '/papperboy/blog-single',
      img: '/images/papperboy/blog/02.jpg',
      category: ['#', 'Entertainment'],
      title: '10 World-Class Museums You Can Visit Online',
      author: ['#', '/images/avatars/18.png', 'Annette Black'],
      date: 'Apr 28',
      comments: '4 comments',
    },
    {
      href: '/papperboy/blog-single',
      img: '/images/papperboy/blog/03.jpg',
      category: ['#', 'Travelling'],
      title: '7 Tips for Solo Travelers in Africa',
      author: ['#', '/images/avatars/17.png', 'Ralph Edwards'],
      date: 'Apr 15',
      comments: '2 comments',
    },
  ];

  return (
    <CityGuidePageLayout pageTitle="About" navbarExtraClass="bg-light">
      {/* Hero */}
      <section className="mt-5 pt-4">
        <BgParallax
          imgSrc="/images/papperboy/about/hero-bg.jpeg"
          type="scroll" // scale, opacity, scroll-opacity, scale-opacity
          speed={0.5} // from -1.0 to 2.0
          className="mt-2"
        >
          <Container className="py-3">
            <Breadcrumb className="breadcrumb-light pt-3">
              <Link href="/papperboy" passHref>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Link>
              <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
            <Col sm={8} md={6} className="py-md-5 py-4 px-0">
              <h1 className="display-4 mb-4 pb-md-2 text-light">
                {' '}
                <br></br>
              </h1>
              <p className="mb-sm-5 mb-4 pb-md-5 pb-3 lead text-light"> </p>
            </Col>
          </Container>
        </BgParallax>
      </section>

      {/* Features */}
      <section
        className="position-relative bg-white rounded-xxl-4 mb-5 pb-1 py-md-3 zindex-5"
        style={{ marginTop: '-30px' }}
      >
        <Container className="pt-5 mb-2 mb-md-4">
          <h2 className="text-center">We are building the Africa we desire</h2>
          <p
            className="mb-4 pb-2 mx-auto fs-lg text-center"
            style={{ maxWidth: '616px' }}
          >
            Papperboy selects and invest in the most daring and promising
            projects in Africa. We are actively developing Africa while
            passively building assets for our clients.
          </p>
          <Row
            xs={1}
            sm={2}
            md={3}
            lg={4}
            className="g-4 justify-content-center"
          >
            {features.map((feature, indx) => (
              <Col key={indx}>
                <IconBox
                  type="card-shadow"
                  media={feature.icon}
                  mediaShape="circle"
                  mediaColor={feature.color}
                  title={feature.title}
                  titleSize="5" // from 1 to 6, where 1 is h1 and 6 is h6
                  text={feature.text}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Add business CTA */}
      <Container
        as="section"
        className="pb-5 mb-2 mb-lg-4"
        style={{ marginBottom: '50px' }}
      >
        <Row className="align-items-lg-center gy-4 pb-2">
          <Col md={6}>
            <ImageLoader
              src="/images/papperboy/about/02.jpeg"
              width={743}
              height={701}
              alt="Cover image"
              className="rounded-3"
            />
          </Col>
          <Col md={6} lg={{ span: 5, offset: 1 }}>
            <h2 className="mb-lg-4">
              The Future Can Be Predicted If We Build It Ourselves
            </h2>
            <p className="mb-lg-4 fs-lg text-muted">
              The Africa we all desire, will not appear by chance. It must be
              built, and built by Africans themselves. <br></br> <br></br> We
              are taking the bull by the horn. Building the Africa we desire,
              one project at a time. <br></br> <br></br> We believe, strongly,
              that what Africa lacks is not resources - we have enough. Not
              perfect government - they don't exist. Not better policies - they
              won't be implemented. <br></br> <br></br> We believe that what
              Africa lacks is a generation that will say "...no one else is our
              problem but us. And from no one else will our solution emerge but
              us".
            </p>
            
          </Col>
        </Row>
      </Container>

      {/* Add business CTA */}
      <Container
        as="section"
        className="pb-5 mb-2 mb-lg-4"
        style={{ margin: '0px' }}
      >
        <Row className="align-items-lg-center gy-4 pb-2">
          <Col md={6} lg={{ span: 5, offset: 1 }}>
            <h2 className="mb-lg-4">
              We Are Project Oriented And Result Focused
            </h2>
            <p className="mb-lg-4 fs-lg text-muted">
              Our approach is different. We invest in entrepreneurs and companies, by investing in specific projects being developed by them.  
              <br></br> <br></br> This is to ensure that funds are accounted for and used optimally.
               <br></br> <br></br> Our appraoch also give the investor understanding and clarity. All Projects aims and objectives are clearly defined, and progress can be easily tracked, and ascertained  . <br></br> <br></br> 
              Transperancy is our core philosophy. We want the investor to be involved and carried along through our the entire phase of every project. From inception to completion.
            </p>
            
          </Col>

          <Col md={6}>
            <ImageLoader
              src="/images/papperboy/about/01.jpeg"
              width={743}
              height={701}
              alt="Cover image"
              className="rounded-3"
            />
          </Col>
        </Row>
      </Container>

     

      {/* Team */}
      <Container as="section" className="pt-lg-2 pb-5 mb-lg-4">
        <h2 className="mb-4 pb-2 text-center">The people behind Papperboy</h2>
        <div className="position-relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#prev',
              nextEl: '#next',
            }}
            pagination={{
              el: '#pagination',
              clickable: true,
            }}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            className="mx-n2"
          >
            {team.map((member, indx) => (
              <SwiperSlide
                key={indx}
                style={{ padding: '.75rem .75rem 1rem .75rem' }}
              >
                <Card className="border-0 shadow-sm">
                  <ImageLoader
                    src={member.img}
                    width={467}
                    height={458}
                    layout="responsive"
                    alt={member.name}
                    className="card-img-top"
                  />
                  <Card.Body className="text-center">
                    <h3 className="h5 card-title mb-2">{member.name}</h3>
                    <span className="d-inline-block mb-3 fs-sm">
                      {member.position}
                    </span>
                    <div className="pt-1">
                      {member.socials.map((social, indx) => (
                        <SocialButton
                          key={indx}
                          href={social[0]}
                          variant="solid"
                          brand={social[1]}
                          roundedCircle
                          className="mx-2"
                        />
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button
            id="prev"
            variant="prev"
            className="d-none d-xxl-block mt-n5 ms-n5"
          />
          <Button
            id="next"
            variant="next"
            className="d-none d-xxl-block mt-n5 me-n5"
          />
        </div>

        {/* External pagination (bullets) buttons */}
        <div
          id="pagination"
          className="swiper-pagination position-relative bottom-0 mt-4 pb-3"
        ></div>
      </Container>

      {/* Subscription CTA */}
      <Container as="section" className="pb-5 mb-3 mb-lg-5">
        <div className="rounded-3 bg-faded-accent py-5 px-sm-5 px-4">
          <div
            className="mx-auto py-md-4 text-center"
            style={{ maxWidth: '605px' }}
          >
            <h2>Stay informed</h2>
            <p className="mb-4 pb-2 fs-lg">
              Subscribe to our newsletter, be the first to see the latest news
              &amp; updates.
            </p>
            <FormGroup className="rounded-pill mb-3">
              <InputGroup size="lg">
                <InputGroup.Text className="text-muted">
                  <i className="fi-mail"></i>
                </InputGroup.Text>
                <FormControl placeholder="Your email" />
              </InputGroup>
              <Button variant="primary rounded-pill px-sm-4 px-3" size="lg">
                Subscribe
              </Button>
            </FormGroup>
            <div className="form-text">
              * By signing up you agree to our{' '}
              <Link href="#">
                <a className="text-decoration-none">Privacy Policy</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </CityGuidePageLayout>
  );
};

export default AboutPage;
