import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
  return (
    <Wrapper>
      <div className="container row text-center  justify-content-between">
        <div className="box1 col-3 align-content-center ">
          <TbTruckDelivery className="icon-1" />
          <h3>Super Fast and Free Delivery</h3>
        </div>
        <div className="box2 row col-4">
          <div className="box2-1 mt-5  d-flex justify-content-around ">
            <MdOutlineSecurity className="icon-1 " />
            <span className="fs-3">Non-contact Shipping</span>
          </div>
          <div className="box2-1  d-flex justify-content-around">
            <GiReceiveMoney className="icon-1" />
            <span className="fs-3">Money-back Guaranteed</span>
          </div>
        </div>
        <div className="box3 col-3 align-content-center">
          <RiSecurePaymentLine className="icon-1" />
          <p>Super Secure Payment System</p>
        </div>
      </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`

        .box1,.box2,.box3{
           background:${({ theme }) => theme.colors.bg};
          border-radius:2rem;
          box-shadow:rgba(0,0,0,0.05) 0px 1px 2px 0px;
          height:15rem;
          
       .box2-1{
           background:${({ theme }) => theme.colors.bg};
            box-shadow:rgba(0,0,0,0.05) 0px 1px 2px 0px;
       }
             .icon-1{
             background:#fff;
             border-radius:5rem;
            color:blue;
            height:26px;
            width:40px;
          }
        }
        
    `;

export default Services
