import { createSlice } from "@reduxjs/toolkit"
import { getAllProducts } from "./Slice";

const FilterSlice = createSlice({
    name: "FilterSlice",
    initialState: {
        isLoading: false,
        filterProducts: [],
        allProducts: [],    
        grid_view:false,
        list_view: false, 
        sorting_value:"lowest",
        searchText: '',
        category:"all",
        company:"all",
        colors:'all',
        price:0,
        maxPrice:0,
        minPrice:0,

    },
    reducers: {
        setGridView: (state) => {
            state.grid_view = true;
            state.list_view = false;
        
        },
        setListView: (state) => {
            state.grid_view = false; 
            state.list_view = true;
        

        },
        sorting:(state,action)=>{
            const sortValue = action.payload;
            state.sorting_value = sortValue;

            console.log("Sorting by:", sortValue);

            let newSortData;
            const {filterProducts,sorting_value}=state;
            let tempSortData = [...filterProducts];

            const sortingFunction=(a,b)=>{
                if (sorting_value=== "lowest") {
                    return a.price - b.price;
                  }else if (sorting_value === "highest") {
                    return b.price - a.price;
                  }else if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                  } else if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                  }
            }
            newSortData=tempSortData.sort(sortingFunction);
            state.filterProducts = newSortData;
            console.log("Sorted Products:", state.filterProducts);
          
        },


updateSearchText: (state, action) => {
  const searchText = action.payload.toLowerCase();
  state.searchText = action.payload;

  state.filterProducts = state.allProducts.filter(product =>
    product.name.toLowerCase().includes(searchText)
  );
},


updateCategory: (state, action) => {
  const category = action.payload.toLowerCase();
  state.category = action.payload;

  if (category !== "all") {
    state.filterProducts = state.allProducts.filter(product =>
      product.category.toLowerCase() === category
    );
  } else {
    state.filterProducts = state.allProducts;
  }
},

updateCompany: (state, action) => {
  const company = action.payload.toLowerCase();
  state.company = action.payload;

 if(company!=="all"){
   state.filterProducts = state.allProducts.filter(product =>
    product.company.toLowerCase() === company
  );
 } else {
    state.filterProducts = state.allProducts;
  }
},
updateColors: (state, action) => {
  const colors = action.payload;
  state.colors = action.payload;

 if(colors!=="All"){
   state.filterProducts = state.allProducts.filter(product =>
    product.colors.includes(colors)
  );
 } else {
    state.filterProducts = state.allProducts;
  }
},
updatePrice: (state, action) => {
  const price = action.payload;
  state.price = action.payload;

 if(price===0){
   state.filterProducts = state.allProducts.filter(product =>
    product.price=price
    );
  } 
  else {
     state.filterProducts = state.allProducts.filter(product =>
    product.price<=price
    ) 
  }
},
clearFilters: (state) => {
  state.searchText = '';
  state.category = 'all';
  state.company = 'all';
  state.colors = 'all';
  state.price = state.maxPrice;
  state.filterProducts = state.allProducts;
}



          
          
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.pending, (state) => {
            state.isLoading = true; 
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allProducts = action.payload;
            state.filterProducts = action.payload;

              const prices = action.payload.map(product => product.price);
              state.maxPrice = Math.max(...prices);
              state.minPrice = Math.min(...prices);
              state.price = state.maxPrice; // initially set slider to max value
        })
        .addCase(getAllProducts.rejected, (state) => {
            state.isLoading = false; 
        });
       
    }
});



export const {setGridView,setListView,sorting,updateSearchText,updateCategory,updateCompany,updateColors,updatePrice,clearFilters} = FilterSlice.actions;
export default FilterSlice.reducer;