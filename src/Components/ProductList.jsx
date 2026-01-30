import React , { useEffect }from 'react'
import { getAllProducts } from "../Redux/Slice";
import {useDispatch,useSelector} from "react-redux"
import GridView from './GridView';
import ListView from './ListView';
import { sorting } from '../Redux/FilterSlice';
const ProductList = () => {

  const dispatch = useDispatch();
  const { allProducts, filterProducts, grid_view, sorting_value, searchText } = useSelector(
    (state) => state.FilterSlice
  );

  // Fetch products once when component mounts
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Run sorting whenever sorting_value or products change
  useEffect(() => {
    dispatch(sorting(sorting_value));
  }, [sorting_value, allProducts, searchText, dispatch]);

  // Choose view
  if (grid_view) {
    return <GridView products={filterProducts} />;
  }

  return <ListView products={filterProducts} />;
};




export default ProductList
