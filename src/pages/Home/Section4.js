import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              Where every meal is a celebration of flavor and community
              </p>
              <ul>
                <li>
                  <p>
                  Quality Ingredients: Our burgers are crafted using only the finest ingredients, ensuring each bite bursts with flavor and satisfaction. From premium meats to fresh vegetables and artisanal sauces, we prioritize quality in every aspect of our burger-making process.
                  </p>
                </li>
                <li>
                  <p>Versatility and Choice: Whether craving a classic beef burger, a savory chicken option, or a plant-based delight, our diverse menu offers something for everyone. With a range of customizable toppings and sides, customers can tailor their burger experience to suit their preferences, ensuring a fulfilling and enjoyable meal every time.</p>
                </li>
                <li>
                  <p>
                  Shared Enjoyment: A good burger isn't just a meal; it's an experience shared with friends and family. By indulging in our delicious burgers, customers can create memorable moments and foster connections over a shared love for great food.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
