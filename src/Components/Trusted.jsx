import React from 'react'
import styled from 'styled-components';
const Trusted = () => {
  return (
    <Wrapper className='brand-name m-5'>
      <div className="container">
        <div className="row ms-5">
          <h3 className='text-center mt-5'>Trusted By 1000+ Companies</h3>
          <div className='row align-items-end '>
           <div className="col"><img className='img-fluid' src="/images/visual.png" alt="nil"/></div>
           <div className="col mt-5"><img className='img-fluid' src="/images/logic+.png" alt="nil"/></div>
           <div className="col"><img className='img-fluid' src="/images/Initialize.png" alt="nil"/></div>
           <div className="col"><img className='img-fluid' src="/images/Flame.png" alt="nil"/></div>
           <div className="col"><img className='img-fluid' src="/images/Hyper.png" alt="nil"/></div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`
  
     background:${({ theme }) => theme.colors.bg};
`;

export default Trusted
