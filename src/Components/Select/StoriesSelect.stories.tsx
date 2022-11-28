import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState("2")

    return <>
        <Select items={[{value: '1', title: 'Moscow'},
            {value: '2', title: 'Minsk'},
            {value: '3', title: 'Magadan'},
            {value: '4', title: 'St Petersburg'}]} value={value} onChange={setValue}/>

    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select items={[{value: '1', title: 'Moscow'},
            {value: '2', title: 'Minsk'},
            {value: '3', title: 'Magadan'},
            {value: '4', title: 'St Petersburg'}]} value={value} onChange={setValue}/>
    </>
}
