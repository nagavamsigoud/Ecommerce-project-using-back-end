import React from 'react'
import styled from 'styled-components';
import {NavLink} from "react-router-dom"
import {Button} from "../Styles/Button"
const ListView = ({products}) => {
  return (
    <Wrapper>
        <div className="container">
          {
            products.map((curElem)=>{
              const {_id,name,image,price,description}=curElem;
              return(
                
                <div className='row border border-dark-subtle mt-5' key={_id}>
                <div className='col m-4'>
                <figure>
                   <img className='columnone' src={`http://localhost:9000/images/${image}`} alt={name}/>
                   </figure> 
                </div>                         
                <div className='col m-4'>
                <h3>{name}</h3>
                        <p>
                          {price-1500}
                        </p>
                        <p>{description.slice(0,135)}...</p>
                        <NavLink to={`/singleProducts/${_id}`}>
                          <Button className='btn btn-outline-info'>Read More</Button>
                        </NavLink>  
                </div>
                </div>
              )
            })
          }
        </div>
    </Wrapper>
)
}
 
const Wrapper=styled.section`

  .columnborder{
    border:solid 1px black;

    
  }
  .columnone{
    height:27rem;
    width:27rem;
    
  }
    
`;

export default ListView
