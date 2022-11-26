import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


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

export const ControlledInput = () => <input value={'blablabla'}/>

