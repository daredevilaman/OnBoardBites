import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Experience the essence of culinary authenticity with our Original selection. Each dish is a tribute to timeless recipes, crafted with care and dedication to tradition. Indulge in flavors that have stood the test of time, and savor the rich heritage of our original recipes. Welcome to a world where every bite tells a story of culinary excellence.`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Quality is our cornerstone, and it's evident in every bite. From sourcing the finest ingredients to meticulous preparation, we uphold the highest standards to bring you an unparalleled dining experience. Taste the difference with every dish, and savor the commitment to excellence that defines our quality food.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Get ready to experience the thrill of speed with our fastest delivery service. We understand that hunger waits for no one, which is why we're committed to bringing your favorite dishes to your doorstep in record time. Your satisfaction is our priority, so sit back, relax, and let us race to bring you culinary bliss.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>Join us for a culinary adventure that delights the senses.</h2>
              <p>
              Unlock the secrets of taste with our chef-inspired creations
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
