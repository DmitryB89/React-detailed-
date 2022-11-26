import React from "react";
import exp from "constants";

type ItemType = {
    title: string
    value: any
}

type AccordeonPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void

}


export function Accordion(props: AccordeonPropsType) {

    return (
        <div>
            <AccordeonTitle onChange={props.onChange} title={props.titleValue}/>
            {/*{props.collapsed === false && <AccordeonBody/>}*/}
            {!props.collapsed && <AccordeonBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordeonTitlePropsType = {
    title: string
    onChange: () => void

}

export function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering')

    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}


type AccordeonBodyPropsType = {

    items: ItemType[]
    onClick: (value: any) => void
}


function AccordeonBody(props: AccordeonBodyPropsType) {
    console.log('AccordeonBody rendering')

    return (

        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                props.onClick(i.value)
            }} key={i.value}>{i.title}</li>)}
        </ul>)
}

