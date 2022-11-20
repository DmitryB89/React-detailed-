import React, {useReducer, useState} from "react";
import exp from "constants";

type AccordeonPropsType = {
    titleValue: string
    // collapsed: boolean
}

type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error('Action type does not exist')
    }
    return state
}

export const UnControlledAccordeon = (props: AccordeonPropsType) => {

    // const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, false)
    return (
        <div>
            {/*<AccordeonTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordeonTitle title={props.titleValue} onClick={() => {
                dispatch({type: 'TOGGLE-COLLAPSED'})
            }}/>
            {!collapsed && <AccordeonBody/>}


            {/*<AccordeonTitle title={props.titleValue}/>*/}
            {/*<button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>*/}
            {/*{collapsed  && <AccordeonBody/>}*/}
        </div>
    )


}

type AccordeonTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering')

    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

function AccordeonBody(props: any) {
    console.log('AccordeonBody rendering')

    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
