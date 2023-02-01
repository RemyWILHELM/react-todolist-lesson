import React, { useState } from 'react';
import {  Input, Button, Select } from 'antd';
import './TodoListWithDesign.css';



const TodoListWithDesign = () => {

    const [newColumnName, setNewColumnName] = useState<string>('');
    const [newItemName, setNewItemName] = useState<string>('');
    const [newItemCategory, setNewItemCategory] = useState<string>('todo');

    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleOnColumnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewColumnName(e.target.value);
    };

    const handleOnItemNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleChange = () => {
        
      };
      const handleColumnClick = () => {
        };
    return (
        <div>
        <div className="todo-list-design">
        <Input onChange={handleOnColumnNameChange} value={newColumnName} placeholder="Column name" />
        <Button disabled={!newItemName.length}  onClick={handleColumnClick}>Add column</Button>
        </div>
        <div className="todo-list-design">
        <Input onChange={handleOnItemNameChange} value={newItemName} placeholder="Item name" />
        <Select
        onChange={handleChange}
        placeholder="Select Column"
        />
        <Button disabled={!newItemName.length}>Add item</Button>
        </div>
        </div>
    );
};

export default TodoListWithDesign;
