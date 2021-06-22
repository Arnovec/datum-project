import React from 'react';
import 'antd/dist/antd.css';
import {Card, Typography} from 'antd';
const {Text} = Typography;

export default function Members(
    props:{
        title:string
    }
){

    return(
        <Card>
            <Text>
                {props.title}
            </Text>
        </Card>
    )
}