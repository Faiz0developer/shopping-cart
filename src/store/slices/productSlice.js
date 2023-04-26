const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers:{
        searchData: (state, action) => {
            const inputData = action.payload;
            if(!! inputData){
            const getData = state.data.filter((item) => item.category.toLowerCase().includes(inputData))
            state.data = getData;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { loadData, setProducts, setStatus, searchData } = productSlice.actions;
export default productSlice.reducer;

// Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    return data;
});
// export const fetchSearchProducts = createAsyncThunk('searchProducts/fetch', async () => {
//     const res = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
//     const data = await res.json();
//     return data;
// });
