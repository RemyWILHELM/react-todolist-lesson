import React, {useState} from 'react';
import AddColumn from './AddColumn';
import AddItem from './AddItem';
import Column from './Column';

export interface Columns {
    value: string;
    label: string;
}
export interface Items {
    id: string;
    columnId: string;
    label: string;
}

const TodoListEdit = () => {

    const [columns, setColumns] = useState<Columns[]>([]);
    const [newColumnName, setColumnName] = useState<string>();
    const [newItemName, setNewItemName] = useState<string>('');
    const [newItemColumn, setNewItemColumn] = useState<string>();
    const [items, setItems] = useState<Items[]>([]);
    

    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleOnClickNewColumn = () => {
        if (newColumnName) {
            const newColumn = {
                value: randomId(),
                label: newColumnName,
            };

            setColumns([...columns, newColumn]);
            setColumnName(undefined);
        }
    };


    const handleOnColumnNameChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setColumnName(e.target.value);
    };



    const handleOnItemNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleOnCategoryChange = (newValue: string) => {
        setNewItemColumn(newValue);
    };

    const handleOnClickNewItem = () => {
        if (newItemColumn) {
            const newItem = {
                id: randomId(),
                label: newItemName,
                columnId: newItemColumn,
            };

            setItems([...items, newItem]);

            setNewItemName('');
            setNewItemColumn(undefined);
        }
    };

    const handleOnDeleteItem = (idToRemove: string) => {
        setItems(items.filter(({ id }) => id !== idToRemove));
    };

    const getColumnItems = (columnIdSelected: string) => {
        return items.filter(({ columnId }) => columnId === columnIdSelected);
    };

    return(
        <div className="todo-list-with-design">
            <AddColumn 
                clicColumn={handleOnClickNewColumn}
                columnNameChange={handleOnColumnNameChange}
                nameColumn={newColumnName}
            ></AddColumn>
            <AddItem
                clicItem={handleOnClickNewItem}
                itemNameChange={handleOnItemNameChange}
                categoryChange={handleOnCategoryChange}
                nameColumn={columns}
                nameItem={newItemName}
            ></AddItem>
            <Column
                nameColumn={columns}
                getColumnItems={getColumnItems}
                tabColumn={Column}
                deleted={handleOnDeleteItem}
            ></Column>
        </div>
    )
};

export default TodoListEdit;
