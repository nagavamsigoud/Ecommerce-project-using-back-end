import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Nav from "./Navbar"
const Header = () => {

  return (
    <MainHeaer>
    <NavLink to="/" >
        <img  src="/images/logo.jpg" alt="logo"/>
    </NavLink>
    <Nav/>
  </MainHeaer>  
 )
};

const MainHeaer=styled.header`
    padding:0 4.8rem;
    height:10rem;
    background-color:${({theme})=>theme.colors.bg};
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    
    .logo{
        height:5rem;
    }
`;

export default Header
