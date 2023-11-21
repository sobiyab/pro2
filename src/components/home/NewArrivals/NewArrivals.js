import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img="https://the-pizza-home.myshopify.com/cdn/shop/products/product1_2e71bdac-e0d0-41ee-9b74-f87f32833b87_600x.jpg?v=1532430471"
            productName="Bella Italia Pizza"
            price="44.00"
            color="Black"
            badge={true}
            des="I LOVE this dress!!! I honestly wasn’t expecting much for the price, but I’m actually ordering more colors."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img="https://the-pizza-home.myshopify.com/cdn/shop/products/product5_600x.jpg?v=1532430278"
            productName="chicken Sausage pizza"
            price="250.00"
            color="Black"
            badge={true}
            des="I LOVE this dress!!! I honestly wasn’t expecting much for the price, but I’m actually ordering more colors."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img="https://the-pizza-home.myshopify.com/cdn/shop/products/product13_7c4d420f-8b77-4c4e-94ba-1f2ac88fc00e_600x.jpg?v=1532434341"
            productName="veggie Love"
            price="80.00"
            color="Mixed"
            badge={true}
            des="I LOVE this dress!!! I honestly wasn’t expecting much for the price, but I’m actually ordering more colors."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img="https://the-pizza-home.myshopify.com/cdn/shop/products/product20_600x.jpg?v=1532429279"
            productName="cheese Burger"
            price="60.00"
            color="Mixed"
            badge={false}
            des="I LOVE this dress!!! I honestly wasn’t expecting much for the price, but I’m actually ordering more colors."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img="https://the-pizza-home.myshopify.com/cdn/shop/products/product13_f633b82d-4caf-4b84-9881-ee674a829c2f_600x.jpg?v=1532430974"
            productName="country Feast"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
