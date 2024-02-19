import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ISingleProduct{
    id: number,
    title: string,
    description: string
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images:Array<string>  // images: string[],
    quantity?:number | undefined
}

export interface IInitialState{
    loader:boolean,
    singleProduct:ISingleProduct
}

const initialState:IInitialState={
    loader:false,
    singleProduct:{
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: ["...", "...", "..."],
        quantity:1
    }
}

export const fetchSingleProductsData=createAsyncThunk("fetchSingle",async(id:number)=>{
    const res=await fetch(`https://dummyjson.com/products/${id}`)
    const singleData=await res.json()
    return singleData
})
export const productDetailsSlice=createSlice({
    name:"productDetailsSlice",
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleProductsData.pending,(state,action)=>{
            state.loader=false
            // console.log("pending");
        });
        builder.addCase(fetchSingleProductsData.fulfilled, (state, action) => {
            state.singleProduct=action.payload
            state.loader=true
            // console.log("success");
        });
        builder.addCase(fetchSingleProductsData.rejected,(state,action)=>{
            state.loader=false
            // console.log("failures");
        })
      }
})

export const {}=productDetailsSlice.actions
export default productDetailsSlice.reducer