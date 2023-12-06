import React from "react";
import "./carditem.css";
import Button from '../../stories/button/'
import Heading  from "../../stories/heading";
import productImage from '../../../assets/img/product.jpg'

const CardItem = () => {
  return (
    <div className="card_item">
      <div className="card">
        <img className="card-img-top" src={productImage} alt="Card image cap" height="200" />
        <div className="card-body">
          <Heading headingType={3}>Card Title</Heading>
          <p className="card-text">
           Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button buttonText="View Item" buttonType="secondary" link="/itemdetails"></Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
