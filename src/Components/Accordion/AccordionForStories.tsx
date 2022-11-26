import React from "react";
import exp from "constants";


type AccordeonPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
}



export function Accordion (props: AccordeonPropsType) {

    return (
        <div>
            <AccordeonTitle onChange={props.onChange} title={props.titleValue}/>
            {/*{props.collapsed === false && <AccordeonBody/>}*/}
            {!props.collapsed && <AccordeonBody/>}
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
        <h3 onClick={(e)=> props.onChange()}>{props.title}</h3>
    )
}


function AccordeonBody() {
    console.log('AccordeonBody rendering')

    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}

