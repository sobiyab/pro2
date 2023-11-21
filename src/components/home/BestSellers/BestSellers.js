import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img="https://the-pizza-home.myshopify.com/cdn/shop/products/product7_600x.jpg?v=1532428956"
          productName="Bella italia pizza"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img="https://the-pizza-home.myshopify.com/cdn/shop/products/product26_600x.jpg?v=1532431076"
          productName="crispy chicken"
          price="180.00"
          color="Gray"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img="https://cdn.shopify.com/s/files/1/0046/1615/9347/products/product13_f633b82d-4caf-4b84-9881-ee674a829c2f_600x.jpg?v=1532430974"
          productName="country Feast"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img="https://cdn.shopify.com/s/files/1/0046/1615/9347/products/product25_02758556-1e05-4fe0-8fab-1297c2c8e52c_600x.jpg?v=1532431995"
          productName="HumBurger"
          price="220.00"
          color="Black"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
