import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts=createAsyncThunk("getAllProducts",(state,action)=>{
    return axios.get("http://localhost:9000/api/products").then(response=>{
        return response.data;

    }).catch(error=>{
        return error;
    });
})


export const getSingleProduct=createAsyncThunk("getsingleProducts",async(id)=>{
    return  axios.get(`http://localhost:9000/api/products/${id}`).then(response=>{
        return response.data;
    }).catch(error=>{
        return error;
    });
})

export const ProductsSlice=createSlice({
        name:"productsSlice",
        initialState:{
            isLoading:false,
            Products:[],
            featureProducts:[],
            SinglePageProducts:[],
            error: null
        },

    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        //for featuredProducts
        .addCase(getAllProducts.pending,(state,action)=>{
            state.isLoading=true;
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.Products=action.payload;
            //featureProducts is a just a name of low stock , i have given
            state.featureProducts = action.payload.filter((product) => product.featured === true);
                // console.log(action, "init");
      
        })
        .addCase(getAllProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.error = action.payload;
        })
        //for singleProducts
        .addCase(getSingleProduct.pending,(state,action)=>{
            state.isLoading=true;
        })
        .addCase(getSingleProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.SinglePageProducts = action.payload;
                // console.log(action,"singleproducts");
      
        })
        .addCase(getSingleProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.error = action.payload;
        })
    } 

});

export const {}=ProductsSlice.actions;

export default ProductsSlice.reducer;
