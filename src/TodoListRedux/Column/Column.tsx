import {List} from 'antd';
import ItemComp from './Item';
import Header from './Header';
import {useDispatch, useSelector} from "react-redux";
import {deleteColumn, deleteItem} from "../TodoListSlice";
import {State} from "../store";

interface ColumnInterface {
    value: string;
    label: string;
    onEditItem(id: string): void;
    onEditColumn(id: string): void;
}

const Column = ({
                    value,
                    label,
                    onEditItem,
                    onEditColumn,
                }: ColumnInterface) => {
    const dispatch = useDispatch()

    const Item = useSelector((state: State) => state.slice.items.filter(({columnId}) => columnId === value));

    return (
        <List className="todo-list-edit-column"
            key={value}
            header={
                <Header
                label={label}
                onEditColumn={() => onEditColumn(value)}
                onDeleteColumn={() => dispatch(deleteColumn(value))}
                />
            }
            dataSource={Item}
            renderItem={({label: itemLabel, id}, index) => (
                <ItemComp
                    label={itemLabel}
                    id={id}
                    onDeleteItem={() => dispatch(deleteItem(id))}
                    onEditItem={() => onEditItem(id)}
                    index={index}
                    key={id}
                />
            )}
        />
    );
};

export default Column;
