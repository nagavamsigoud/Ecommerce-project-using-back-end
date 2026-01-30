import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../Redux/Slice";
import styled from "styled-components"
import Product from './Product';
const FeatureProducts = () => {
  const dispatch = useDispatch();
  const { isLoading, featureProducts } = useSelector((state) => state.products);
  console.log(isLoading,"first")
  const [products, setProducts] = useState(featureProducts);
  console.log(products, "Hello");
  useEffect(() => {
    dispatch(getAllProducts());
    setProducts(featureProducts);
  },[featureProducts]);
  return (
    <>
      <Wrapper className='section m-5'>
        <div className='container'>
        <div className="intro-data">Check Now!</div>
                <div className="common-heading ">Featured Products</div>
                <div className="grid grid-three-column">
                  {
                    products.map((data) => {
                      return (
                        <Product key={data._id} {...data} />
                      )
                    })
                  }
                </div>

        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
    padding:9rem 0;
    background-color:${({ theme }) => theme.colors.bg}
     .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 40%;
      margin-top: 1.5rem;
      height: 17rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;
export default FeatureProducts
