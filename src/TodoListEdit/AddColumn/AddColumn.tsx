import { Button, Input } from 'antd';



const AddColumn = ({clicColumn, columnNameChange, nameColumn} : any) => {
    



    return (
        <div className="todo-list-with-design-add-column">
            <Input
                placeholder="Column name"
                onChange={columnNameChange}
                value={nameColumn}
            />

            <Button
                disabled={!nameColumn?.length}
                onClick={clicColumn}
            >
                Add column
            </Button>
        </div>
);
};
export default AddColumn;
