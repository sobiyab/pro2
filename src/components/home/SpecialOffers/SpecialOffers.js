import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img="https://the-pizza-home.myshopify.com/cdn/shop/products/product9_600x.jpg?v=1532430203"
          productName="chicken Italino"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="A shapeless tentlike full dress,  that hangs loosely from the shoulders; it has a baggy silhouette and is usually worn short. The airy billowy dress is a favorite as a summer wear.

          ."
        />
        <Product
          _id="1102"
          img="https://the-pizza-home.myshopify.com/cdn/shop/products/product2_edf3442e-6055-44fb-8b54-02e5e43584d0_600x.jpg?v=1533017874"
          productName="chickeroni(chicken pepperoni)"
          price="180.00"
          color="Gray"
          badge={true}
          des="This is a type of dress with a shaped top portion of the bodice which is separate from the bodice. The yoked dress can have a front yoke or back yoke or both

          ."
        />
        <Product
          _id="1103"
          img="https://the-pizza-home.myshopify.com/cdn/shop/products/product7_aaa4d0e6-416c-41f8-b42e-468d8a67cfae_600x.jpg?v=1532431688"
          productName="Four cheese Pizza"
          price="25.00"
          color="Mixed"
          badge={true}
          des="This is a type of dress with a shaped top portion of the bodice which is separate from the bodice. The yoked dress can have a front yoke or back yoke or both

          ."
        />
        <Product
          _id="1104"
          img="https://the-pizza-home.myshopify.com/cdn/shop/products/product1_2e71bdac-e0d0-41ee-9b74-f87f32833b87_600x.jpg?v=1532430471"
          productName="chicken supreme pizza"
          price="220.00"
          color="Black"
          badge={true}
          des="This is a  high waist dress that has a fitting bodice till just under the bust and then a flowy silhouette

          ."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
