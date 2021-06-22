import React from 'react';
import 'antd/dist/antd.css';
import {Typography, List} from 'antd';
const {Text} = Typography;

export default function CardList(
    props:string[]
){

    const data:string[] = []

    Object.keys(props).map((key,qwe)=>{  
        data.push(props[qwe]) 
        return data;  
    });  

    return(
        <List
            dataSource={data}
            renderItem={ (item) =>(
                <List.Item>
                    <Text>
                    	{item}
                    </Text>
                </List.Item>
            )}
        />
    )
}