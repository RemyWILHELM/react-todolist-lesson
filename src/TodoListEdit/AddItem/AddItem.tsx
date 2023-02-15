import { Button, Input, Select } from 'antd';




const AddItem = ({clicItem, nameColumn, nameItem, itemNameChange, categoryChange} : any) => {

console.log(nameColumn);
    return(
        <div className="todo-list-with-design-add-item">
            <Input
                placeholder="Item name"
                onChange={itemNameChange}
                value={nameItem}
            />

            <Select
                placeholder="Select column"
                onChange={categoryChange}
                options={nameColumn}
            />

            <Button
                disabled={!nameItem?.length || !nameColumn}
                onClick={clicItem}
            >
                Add Item
            </Button>
        </div>
    )
};

export default AddItem;






