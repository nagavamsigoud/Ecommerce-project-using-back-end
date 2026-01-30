import React from 'react'
import styled from 'styled-components';
import { Button } from './Styles/Button';
import { NavLink } from 'react-router-dom';
const GlobalErrorPage = () => {
  return (
    <Wrapper>
        <div className="container p-5">
            <div className='text-center p-5'>
                <h2>Erorr 404</h2>
                <h3 >UH OH! You're lost.</h3>
                <p>
                    The page you are looking for does not exist.
                    How you get here is a mystery.
                    But you can click the button below to go back
                    to the Homepage.
                </p>
                <NavLink  to="/">
                <Button >Go Back to Home</Button>
                </NavLink>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`;`
export default GlobalErrorPage
