import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({ products }) => {
  console.log(products, "ya")

  return (
    <Wrapper>
      <div className="container text-center justify-items-between">
      <div className="row ">
          {
            products.map((curElem) => {
              return (
           

                <div className="col-4 mt-5">
                   <Product key={curElem.id} {...curElem}/>
                 </div>
                
              )
            })
          }
       </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

`;
export default GridView
