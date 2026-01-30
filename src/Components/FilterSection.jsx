
import { useSelector ,useDispatch} from 'react-redux'
import { updateSearchText,updateCategory,updateCompany,updateColors,updatePrice,clearFilters} from '../Redux/FilterSlice';
import styled from "styled-components";
import {FaCheck} from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice"
import {Button} from "../Styles/Button"
const FilterSection = () => {
    const dispatch=useDispatch();
    const {searchText,allProducts,category ,colors,price,maxPrice,minPrice} = useSelector((state) => state.FilterSlice);
    console.log("my price",price)
    const handleSearchChange = (e) => {
      dispatch(updateSearchText(e.target.value));
      
    };
 const handleSearchChange2 = (e) => {
     
        dispatch(updateCategory(e.target.value));

    };
 const handleSearchChange3 = (e) => {
     
        dispatch(updateCompany(e.target.value));
    };
     const handleSearchChange4 = (e) => {
     
        dispatch(updateColors(e.target.value));
    };
     const handleSearchChange5 = (e) => {
     
        dispatch(updatePrice(e.target.value));
    };
 const ClearFilters = () => {
  dispatch(clearFilters());
};

    //to get the unique data of each field
    const getUniqueData=(data,property)=>{
      let newVal=data.map((curElem)=>{
          return curElem[property]
      });

      if(property==="colors"){
          newVal=newVal.flat();
      }
          return (newVal=["All",...new Set(newVal)]);
    };

    //we need unique data
    const categoryOnlyData=getUniqueData(allProducts,"category");
    const companyData=getUniqueData(allProducts,"company"); 
    // console.log(companyData);
    const colorsData=getUniqueData(allProducts,"colors");
    console.log(colorsData)
    
  
  
  
  return (
    <Wrapper>
     <div className="filter-search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="search" value={searchText} onChange={handleSearchChange} placeholder="Search products..." className="form-control"
        />
      </form>
    </div>
   
      {/* category */}
    <br />
    <br />
   <h3>Category</h3>
   <div>
    {
      categoryOnlyData.map((curElem,index)=>{
        return (
         <li key={index}>
           <button key={index} type="button" className="btn btn-lg" name="category" value={curElem} onClick={handleSearchChange2}>
          {curElem}
        </button>
          </li>
        )
      })
    }
   </div>
   <br />
   <br />
   <div>
    <h3>Company</h3>
    <form action="#">
      <select name="comany" id="company" className='form-select' aria-label='Default select example' onClick={handleSearchChange3}>
        {
          companyData.map((curElem,index)=>{
            return (
              <option key={index} value={curElem} name="company">{curElem}</option>
            )
          })
        }
      </select>
    </form>
   </div>
   <br />
   <br />
   <div className="colors">
    <h3>Colors</h3>
    <div className="filter-color-style">
      {
        colorsData.map((curColor,index)=>{
          if(curColor==="All"){
             return (
            <button 
            key={index}
            type='button'  
            value={curColor}
            name='colors'
           className='btn'
             onClick={handleSearchChange4}>
             All
              </button>
          );
          }
         return (
            <button 
            key={index}
            type='button'  
            value={curColor}
            name='colors'
            className={colors===curColor ?"btn btnStyle active":"btn  btnStyle "}
             style={{backgroundColor:curColor}} 
             onClick={handleSearchChange4}>
              {colors===curColor ? <FaCheck style={{color:'white'}} className='checkStyle'/>:null}
              </button>
          )
        })
      }
    </div>
   </div>
   <br />
   <br />
   <div>
    <h3>Price</h3>
    <p>
      <FormatPrice price={price} />
    </p>
    <input type="range" 
    className="form-range"
    name="price"
    min={minPrice}
    max={maxPrice}
    value={price}
    onChange={handleSearchChange5}
    />
    
   </div>
   <br />
   <br />
   <div>
    <Button  className='btn btn-danger'
    onClick={ClearFilters}>Clear Filter</Button>
   </div>
    </Wrapper>
  )
};
const Wrapper=styled.section`
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
       border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};

      }
        .active{
          opacity:1;
        }
  }`

export default FilterSection
