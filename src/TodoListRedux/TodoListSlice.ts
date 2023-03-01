import {createSlice} from '@reduxjs/toolkit';

export interface Column {
    value: string;
    label: string;
}

export interface Item {
    id: string;
    columnId: string;
    label: string;
}


const randomId = () => (Math.random() + 1).toString(36).substring(7);

export interface Slice {
    columns: Column[];
    items: Item[];
    itemModal : Item;
    columnModal : Column;
}


export const TodoListSlice = createSlice({

    name: 'slice',
    initialState: {
        columns: [],
        items: [],
        itemModal : null,
        columnModal : null
    },
    reducers: {
        addColumn: (state: { columns: Column[] }, action: { payload: string }) => {
            state.columns.push({label: action.payload, value: randomId()});
        },
        addItem: (state: { items: Item[] }, action: { payload: string[] }) => {
            state.items.push({label: action.payload[0], columnId: action.payload[1], id: randomId()});
        },
        deleteColumn: (state: { columns: Column[], items : Item[] }, action: { payload: string }) => {
            state.columns = state.columns.filter(({value}) => value !== action.payload)
            state.items = state.items.filter(({ columnId }) => columnId !== action.payload)
        },
        deleteItem: (state: { items: Item[] }, action: { payload: string }) => {
            state.items = state.items.filter(({id}) => id !== action.payload)
        },
        setItem: (state: { items: Item[] }, action: { payload: Item }) => {
            state.items = state.items.map((item) => (item.id === action.payload.id ? action.payload : item))
        },
        setColumn: (state: { columns: Column[] }, action: { payload: Column }) => {
            state.columns = state.columns.map((column) => (column.value === action.payload.value?  action.payload : column))
        },
        setItemModal : (state: { itemModal: Item | null }, action: { payload: Item | null}) => {
            state.itemModal = action.payload
        },
        setColumnModal : (state: { columnModal: Column | null }, action: { payload: Column | null}) => {
            state.columnModal = action.payload
        },
    },
});

export const {addColumn, deleteColumn, addItem, deleteItem, setItem, setColumn, setItemModal, setColumnModal} = TodoListSlice.actions;

export default TodoListSlice.reducer;