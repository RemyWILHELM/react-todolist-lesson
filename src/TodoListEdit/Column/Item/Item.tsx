
import { List, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const Item = ({nomItem, id, deleted}: any) => {
    return(
        <List.Item className="todo-list-with-design-item">
                            {nomItem}
                            <Button
                                type="primary"
                                danger
                                size="small"
                                icon={<CloseOutlined />}
                                onClick={() => deleted(id)}
                            />
        </List.Item>
    );
};

export default Item;