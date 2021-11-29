import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState} from 'redux/store';

export interface ICounter {
    data : number;
    status : "idle" | "loading" | "error" | "success";
    error : Error | null ;
}

const initialState: ICounter = {
    data : 0,
    status : "idle",
    error : null,
}

export const counterThunk = 
    (amount: number): AppThunk => (dispatch, getState) => {
    // we can obtain state here in order to create thunk
    // this can be sync or async
    // fetch
    dispatch(success(selectCounter(getState()).data + amount));
}

export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        loading : (state) => { state.status = "loading"},
        error : (state, action : PayloadAction<Error>) => { 
            state.status = "error";
            state.error = action.payload;
        },
        success : (state, action: PayloadAction<number>) => {
            state.data = action.payload;
        } 
    },
    extraReducers : {
        // if using async thunks add them here
        // using builder
    }
})

export const { loading, error, success } = counterSlice.actions;
export const selectCounter = (state: RootState) => state.counter;
export default counterSlice.reducer;