import AddColumn from '../AddColumn/AddColumn';
import AddItem from '../AddItem';
import ColumnComp from '../Column';
import ColumnModal from '../ColumnModal';
import ItemModal from '../ItemModal';
import './TodoListRedux.css';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../store";
import {setColumn, setColumnModal, setItem, setItemModal} from "../TodoListSlice";

export interface Column {
    value: string;
    label: string;
}

export interface Item {
    id: string;
    columnId: string;
    label: string;
}

const TodoListRedux = () => {
    const dispatch = useDispatch()

    const items = useSelector((state: State) => state.slice.items)
    const columns = useSelector((state: State) => state.slice.columns)

    const handleOnEditItem = (idItem: string) => {
        const item = items.find(({id}) => id === idItem);

        if (item) {
            dispatch(setItemModal(item));
        }
    };

    const handleOnEditColumn = (idColumn: string) => {
        const column = columns.find(({value}) => value === idColumn);

        if (column) {
            dispatch(setColumnModal(column));
        }
    };

    const handleOnCloseItem = () => {
        dispatch(setItemModal(null))
    };

    const handleOnCloseColumn = () => {
        dispatch(setColumnModal(null))
    };

    const handleOnSaveItem = (newItem: Item) => {
        dispatch(setItem(newItem))
        handleOnCloseItem();
    };

    const handleOnSaveColumn = (newColumn: Column) => {
        dispatch(setColumn(newColumn))
        handleOnCloseColumn();
    };



    return (
        <div className="todo-list-edit">
            <AddColumn/>

            <AddItem/>
                <div className="todo-list-edit-columns">

                    {columns.map(({label, value}, index) => {

                        return (
                            <ColumnComp
                                value={value}
                                label={label}
                                onEditItem={handleOnEditItem}
                                onEditColumn={handleOnEditColumn}
                                key={index}
                                />
                        );
                    })}

                </div>

            <ItemModal
                onCloseItem={handleOnCloseItem}
                onSaveItem={handleOnSaveItem}
                columns={columns}
            />

            <ColumnModal
                onCloseColumn={handleOnCloseColumn}
                onSaveColumn={handleOnSaveColumn}
            />
        </div>
    );
};

export default TodoListRedux;
