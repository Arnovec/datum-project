import React from 'react';
import 'antd/dist/antd.css';
import {Typography, Space} from 'antd';
const {Text} = Typography;

export default function UpInfo(
    props:{
        title:string,
        date:string,
        filtres:string,
    }
){

    return(
        <Space direction="vertical">
            <Text>{props.title}</Text>
            <Text>{props.date} </Text>
            <Text>{props.filtres} </Text>
        </Space>
    )
}