import { List } from 'antd';
import Header from './Header';
import Item from './Item';
import { Items, Columns } from '../TodoListEdit';



const Column = ({nameColumn, deleted, getColumnItems} : any) => {


    return(
        <div className="todo-list-with-design-columns">
            {nameColumn.map(({ value, label } : Columns) => {
                const columnItems = getColumnItems(value);
                return (
                    <List
                    className="todo-list-with-design-column"
                    key={value}
                    header={<Header
                        label={label}
                    ></Header>}
                    dataSource={columnItems}
                    renderItem={({ label, id } : Items) => (
                        <Item
                            deleted={deleted}
                            nomItem={label}
                            id={id}
                        ></Item>
                    )}
                    />
                );
            })}
                    
        </div>      
    );
};


export default Column;