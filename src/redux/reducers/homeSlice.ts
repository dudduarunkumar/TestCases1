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
    productsList:ISingleProduct[],
    loader:boolean,
    // singleProduct:ISingleProduct
}

const initialState:IInitialState={
    productsList:[],
    loader:false,
    // singleProduct:{
    //     id: 1,
    //     title: "iPhone 9",
    //     description: "An apple mobile which is nothing like apple",
    //     price: 549,
    //     discountPercentage: 12.96,
    //     rating: 4.69,
    //     stock: 94,
    //     brand: "Apple",
    //     category: "smartphones",
    //     thumbnail: "...",
    //     images: ["...", "...", "..."],
    //     quantity:1
    // }
}

export const fetchProductsData=createAsyncThunk("fetch",async()=>{
    const res=await fetch("https://dummyjson.com/products")
    const data=await res.json()
    return data.products
})

// export const fetchSingleProductsData=createAsyncThunk("fetchSingle",async(id:number)=>{
//     console.log(id,`https://dummyjson.com/products/${id}`);
//     const res=await fetch("https://dummyjson.com/products/"+id.toString())
//     const singleData=await res.json()
//     return singleData
// })
export const homeSlice=createSlice({
    name:"homeSlice",
    initialState,
    reducers:{
        handleIncrement:(state,action)=>{
            state.productsList=state.productsList.map((each:ISingleProduct)=>each.id===action.payload?{...each,quantity:each?.quantity+1}:each)
        },
        handleDecrement:(state,action)=>{
            state.productsList=state.productsList.map((each:ISingleProduct)=>{
                if(each.id==action.payload && each?.quantity>1){
                    return {...each,quantity:each.quantity-1}
                }
                return {...each}
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsData.pending,(state,action)=>{
            state.loader=false
        });
        builder.addCase(fetchProductsData.fulfilled, (state, action) => {
              state.productsList=action.payload.map((each:ISingleProduct)=>({...each,quantity:1}))
              state.loader=true
        });
        builder.addCase(fetchProductsData.rejected,(state,action)=>{
            state.loader=false
        })

        // builder.addCase(fetchSingleProductsData.pending,(state,action)=>{
        //     state.loader=false
        // });
        // builder.addCase(fetchSingleProductsData.fulfilled, (state, action) => {
        //     console.log(action.payload);
        //     state.loader=true
        //     state.singleProduct=action.payload
        // });
        // builder.addCase(fetchSingleProductsData.rejected,(state,action)=>{
        //     state.loader=false
        // })
      }
})

export const {handleIncrement,handleDecrement}=homeSlice.actions
export default homeSlice.reducer