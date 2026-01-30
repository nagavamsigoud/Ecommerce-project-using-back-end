import React from 'react'
import { NavLink } from "react-router-dom"
import FormatPrice from '../Helpers/FormatPrice';
const Product = (data) => {
    const { _id, image, name, category, price } = data;
    
    return (
        <NavLink to={`/singleProducts/${_id}`}>
            <div className="card">
                <figure>
                    <img className='img-fluid' src={`http://localhost:9000/images/${image}`} alt={name} />
                    <figcaption className="caption">{category}</figcaption>
                </figure>

                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{name}</h3>
                        <p className="card-data--price">{<FormatPrice price={price}/>}</p>
                       
                        {/* <FormatePrice price={price}/> */}
                     
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default Product
