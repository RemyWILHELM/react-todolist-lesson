import { configureStore } from '@reduxjs/toolkit';
import TodoListReducer, {Slice} from './TodoListSlice'

export interface State {
    slice : Slice,
}

export default configureStore({
    reducer: {
        slice : TodoListReducer,
    },
});