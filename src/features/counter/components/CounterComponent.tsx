import {useAppDispatch, useAppSelector} from "../../../store/hooks.ts";
import {decrement, increment, selectCount} from "../state/counterSlice.ts";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const CounterComponent = () => {
    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch();
    return (
        <>
            <Button type="primary" shape="circle" icon={< PlusOutlined/>} onClick={()=>dispatch(increment())} />
            <div>{count}</div>
            <Button type="primary" shape="circle" icon={<MinusOutlined />} onClick={()=>dispatch(decrement())} />
        </>
    );
}

export default CounterComponent;