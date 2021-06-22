import React from 'react';
import 'antd/dist/antd.css';
import {Card, Space} from 'antd';
import UpInfo from './Card/UpInfo';
import Members from './Card/Members';
import CardList from './Card/CardList';

export default function CardDTP(){

    const data = [ 
        "Транспорт-1",
        "Участники-2",
        "Пострадали-1",
    ]

    const up_info = {
        title:"Название",
        date:"Дата время месо",
        filtres:"Фильтры: мокрая дорога, пасмурно, сетлое время суток"
    }

    return(
        <Card>
            <Space direction="vertical">
                <UpInfo {...up_info}/>
                <Space direction="horizontal">
                    <CardList {...data}/>
                    <Space direction="vertical" align="center">
                        <Members {...{title:"Участники ДТП"}} />
                        <Space
                            direction="horizontal">
                            <Members {...{title:"Виновник дтп"}} />
                            <Members {...{title:"Пострадавшая сторона"}} />
                        </Space>
                    </Space>
                </Space>
            </Space>
        </Card>
    );
}