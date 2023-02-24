import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    orderList: JSON.parse(localStorage.getItem('order') || '[]'),

}

export const localStorageMiddleware = store => next => action => {

    if(next(action).type.startWith('order/')) {
        store.getState().order.orderList
    }
    
    return next(action)
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = state.orderList.find(item => item.id === action.payload.id)

            if (product) {
                product.count += 1
            } else {
                state.orderList.push({...action.payload, count: 1})
            }
        }
    }
})

export const { addProduct } = orderSlice.actions;
export default orderSlice.reducer;