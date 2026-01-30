import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { Button } from '../Styles/Button';
const HeroSection = ({myData}) => {
const {name}=myData;
    return (
        <Wrapper>
            <div className='container'>
                <div className="grid grid-two-column">
                    <div className="hero-section-data">
                        <p className="intro-data">Welcome to</p>
                        <h1 className='text-primary'>{name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, error fugit officiis nesciunt, magnam facere temporibus dicta provident maxime itaque ea corporis, blanditiis praesentium incidunt fugiat earum quaerat est ad!</p>
                        <NavLink to='/products'>
                            <Button>Shop Now</Button>
                        </NavLink>
                    </div>
                    {/* our home image */}
                    <div className="hero-section-image">
                        <figure>
                            <img src='/images/hero-image.jpg' alt="hero-section-photo" className='img-style' />
                        </figure>

                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

    padding:12rem 0;
    
    .hero-section-data{
        p{
            margin:2rem 0;
        }
            h1{
                text-transform:capitalize;
                font-weight:bold;
            }

            .intro-data{
            margin-bottom:0;
            }
    }
            .hero-section-image{
                width:100%;
                height:auto;
                display:flex;
                justify-content:center;
                align-items:center;
            }
                figure{
                    position:relative;

                    &::after{
                        content:"";
                        width:60%;
                        height:80%;
                        background-color:rgba(81,56,238,0.4);
                        position:absolute;
                        left:50%;
                        top:-5rem;
                        z-index:-1;
                    }
                }
                    .img-style{
                        width:100%;
                        height:auto;
                    }
                        @media(max-width:${({theme})=>theme.media.mobile}){
                              .grid{
                            gap:10rem;
                            }
                            figure::after{
                                content:"";
                                widht:50%;
                                height:100%;
                                left:0;
                                top:10%;
                                background-color:rgba(81,56,238,0.4)
                            }
                        }
    `;
export default HeroSection
