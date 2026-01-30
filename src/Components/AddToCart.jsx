import  {useState}from 'react'
import styled from 'styled-components';
import {FaCheck} from "react-icons/fa6";
import CartAmountToggle from './CartAmountToggle';
import {NavLink} from "react-router-dom"
import { addToCart } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';
import {Button} from "../Styles/Button"
const AddToCart = ({product}) => {
 const dispatch = useDispatch();
    // console.log(product,"produt")
    const {_id,stock,colors}=product;
    const [color,setColor]=useState(colors[0]);

    //increament and decrement
    const [amount,setAmount]=useState(1);

    const setDecrease=()=>{
        amount >1?setAmount(amount-1):setAmount(1);
    }
    const setIncrease=()=>{
          amount<stock?setAmount(amount+1):setAmount(stock);
    }
     const handleCart = () => {
        dispatch(addToCart({
            _id: _id,
            colors:color,
            amount,
            product
        }));
    }
  return (
    <Wrapper>
        <div className="colors">
            <p>
                Colors:
                {
                    colors.map((curColor,index)=>{
                        return <button 
                        className={color===curColor? "btnStyle active":"btnStyle"} 
                        style={{backgroundColor:curColor}}
                         key={index}
                         onClick={()=>setColor(curColor)}>{color===curColor? <FaCheck style={{color:"white"}}/>:null}</button>

                    })
                }
            </p>
        </div>
        {/* add to cart */}
       <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
       <NavLink to="/cart" 
        onClick={()=>handleCart(_id,colors,amount,product)}>
               <Button className='btn'>Add To Cart</Button>
       </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }


  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart
