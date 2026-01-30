import  {useState}from 'react'
import FormatPrice from "../Helpers/FormatPrice"
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa6'
import { useDispatch } from 'react-redux';
import { removeItem,increaseQuantity,decreaseQuantity } from '../Redux/CartSlice'
const CartItem = ({ _id, name, image, colors, price, amount }) => {
  const dispatch = useDispatch();
  console.log("cartitme", _id, image)
 
 const setDecrease = () => {
  dispatch(decreaseQuantity({ _id, colors }));
};

const setIncrease = () => {
  dispatch(increaseQuantity({ _id, colors }));
};

  const RemoveItem = (_id, colors) => {
    dispatch(removeItem({ _id: _id, colors }));

  };

  return (
    <div className='cart_heading grid grid-five-column'>
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={`http://localhost:9000/images/${image}`} alt={_id} />
          </figure>
        </div>
        <div>
          <span className='fs-4'>{name}</span>
          <div className='color-div'>
            <p>color:</p>
            <div className='color-style'
              style={{ backgroundColor: colors, colors: colors }}>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      {/* quantity */}
      <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
      {/* subtotal */}
      <div className='cart-hide'>
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className='remove_icon' onClick={() => RemoveItem(_id,colors)} />
      </div>
    </div>
  )
}

export default CartItem
