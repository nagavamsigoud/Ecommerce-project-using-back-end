import { useSelector, useDispatch } from 'react-redux'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { setGridView } from '../Redux/FilterSlice';
import { setListView } from '../Redux/FilterSlice';
import { sorting } from '../Redux/FilterSlice';

const Sort = () => {
  const dispatch = useDispatch();

  const {filterProducts, grid_view} = useSelector((state) => state.FilterSlice);
 

  const handleSortChange=(e)=>{
    dispatch(sorting(e.target.value));
    
  };

  return (
    <div className='container row mt-2'>
      <div className="col-4">
        <button onClick={() => dispatch(setGridView())} className={grid_view ? "btn  btn-primary" : "btn btn-outilne-primary"} >
          <BsFillGridFill className='fs-1' />
        </button>
        <button onClick={() => dispatch(setListView())} className={!grid_view ? " btn  btn-secondary" : " btn  btn-outline-secondary"}>
          <BsList className='fs-1' />
        </button>
      </div>
      <div className="col-4">
        <p>{`${filterProducts.length} Products Avaiable`}</p>
      </div>
      <div className="col-4">
        <form action="#"  className='fs-4'>
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={handleSortChange} >
            <option value="lowest">price (lowest)</option>
            <option value="highest">price (highest)</option>
            <option value="a-z">price (a-z)</option>
            <option value="z-a">price (z-a)</option>
          </select>
        </form>


      </div>
    </div>
  )
}
export default Sort
