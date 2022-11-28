import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>
export const UncontrolledInputValueTracking = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return <> <input onChange={onChange}/> - {value}</>

}
export const GetValueByBtnPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <> <input ref={inputRef} id={'InputId'}/>
        <button onClick={save}>save</button>
        - actual value: {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHadler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
    return (
        <input value={parentValue} onChange={onChangeHadler}/>
    )
}

export const Checkbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHadler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)
    return (
        <input type={"checkbox"} checked={parentValue} onChange={onChangeHadler}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHadler = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)
    return (
        <select value={parentValue} onChange={onChangeHadler}>
            <option>none</option>
            <option value="1">Moscow</option>
            <option value="2">Minsk</option>
            <option value="3">Magadan</option>
        </select>
    )

}


