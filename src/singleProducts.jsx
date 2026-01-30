import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from "react-router-dom";
import { getSingleProduct } from './Redux/Slice';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import PageNavigation from './Components/PageNavigation';
import MyImage from "./Components/MyImage";
import { Container } from "./Styles/Container"
import FormatPrice from './Helpers/FormatPrice';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md"
import { GiReceiveMoney } from "react-icons/gi"
import { RiSecurePaymentLine } from "react-icons/ri"
import Star from "./Components/Star"
import AddToCart from './Components/AddToCart';
const SingleProducts = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, SinglePageProducts } = useSelector((state) => state.products);
  const { _id: alias,company, name, stock,reviews, rating, price, description, image } = SinglePageProducts;
  useEffect(() => {

    dispatch(getSingleProduct(_id))
  }, [SinglePageProducts])
  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product images */}
          <div className="product_images">
            <MyImage imgs={image} id={_id} />
          </div>
          {/* product data */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={rating} reviews={reviews}/>
            {/* <p>{reviews}</p> */}
            <p>{rating}</p>
            <p className="product-data-price">
              MRP:
              <del>
                 {price}
              </del>
            </p>
            <p className="prodcut-data-price product-data-real-price">
              Deal of the Day:{price-1000} 
              {/* <FormatePrice price={price} /> */}
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <MdOutlineSecurity className="warranty-icon" />
                <p>30 days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <GiReceiveMoney className="warranty-icon" />
                <p>Nv Delivered</p>
              </div>
              <div className="product-warranty-data">
                <RiSecurePaymentLine className="warranty-icon" />
                <p>2 years warranty</p>
              </div>
            </div>
              <div className="product-data-info">
                <p>Available:<span>{stock>0?"In Stock ": "Not Available"}</span></p>
                <p>ID:<span>{_id}</span></p>
                <p>Brand:`<span>{company}</span></p>
              </div>
              <hr/>
              {
                stock >0&&<AddToCart product={SinglePageProducts}/>
              }
          </div>
        </div>
      </Container>
    </Wrapper>

  )
}
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProducts

