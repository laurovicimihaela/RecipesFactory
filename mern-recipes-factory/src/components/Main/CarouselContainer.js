import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from "./styles.module.css";
import image1 from './food1.jpg';
import image2 from './food2.jpg';
import image3 from './food3.jpg';

const CarouselContainer = () => {
  return (
    <div className={styles.carousel}>
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pizza quattro stagioni</h3>
          <p>Elena Păunescu</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Spicy wings</h3>
          <p>Darius Tudor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Indian food</h3>
          <p>Rachel Almagattish</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselContainer;