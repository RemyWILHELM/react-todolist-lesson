import React, { useState } from 'react';
import {  List, Card, Input, Button, Select } from 'antd';
import './TodoListWithDesign.css';

interface ListColumn {
    idColumn: string;
    columnLabel: string;
}

interface ListItem {
    id: string;
    idCol: string
    Itemlabel: string;
}

const TodoListWithDesign = () => {


    const [Column, setColumn] = useState<ListColumn[]>([]);
    const [unableButton, setUnableButton] = useState<boolean>(false);
    const [newColumnName, setNewColumnName] = useState<string>('');
    const [newItemCategoryID, setNewItemCategoryID] = useState<string>('');
    const [newItemName, setNewItemName] = useState<string>('');
    const [Item, setItem] = useState<ListItem[]>([]);

    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleOnColumnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewColumnName(e.target.value);
    };

    const handleOnItemNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleColumnClick = () => {
        const newColumn = {
            idColumn:randomId(),
            columnLabel:newColumnName,
        };

        setColumn([...Column, newColumn]); 

    };

    const handleChange = (value: string ) => {
        setUnableButton(true);
        setNewItemCategoryID(value);
        console.log(value);
    };

    const handleItemClick = () => {
        const newItem = {
            id: randomId(),
            idCol: newItemCategoryID,
            Itemlabel: newItemName,
        };
        setItem([...Item,newItem]);
        
    };

    const data = [
        
        Column.map((columnLabel: string) => ({
             title: columnLabel
        }))
          
        
      ];

    return (
        <div>
            <div className="todo-list-design">
            <Input onChange={handleOnColumnNameChange} value={newColumnName} placeholder="Column name" />
            <Button disabled={!newColumnName.length}  onClick={handleColumnClick}>Add column</Button>
            </div>
            <div className="todo-list-design">
            <Input onChange={handleOnItemNameChange} value={newItemName} placeholder="Item name" />
            <Select
            onChange={handleChange}
            placeholder="Select Column"
            options={
                Column.map(({idColumn, columnLabel}) => ({
                    value: idColumn, label: columnLabel
                }))}
            />
            <Button disabled={!newItemName.length || unableButton===false} onClick={handleItemClick}>Add item</Button>
            </div>
            <div className="todo-list-design">
            <List
                grid={{
                column: Column.length,
                }}
                renderItem={() => (
                <List.Item>
                    <Card title={data} >             
                    </Card>
                </List.Item>
                )}
            />
            </div>
        </div>
    );
};

export default TodoListWithDesign;
