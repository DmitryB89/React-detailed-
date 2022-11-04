import React from "react";
import exp from "constants";

type ItemType = {
    title: string
    value: any
}

type AccordeonPropsType = {
    title: string,
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void

}

type AccordeonTitlePropsType = {
    title: string
    onChange: () => void

}

export type AccordeonBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}


function Accordeon(props: AccordeonPropsType) {

    return (
        <div>
            <AccordeonTitle onChange={props.onChange} title={props.title}/>
            {/*{props.collapsed === false && <AccordeonBody/>}*/}
            {!props.collapsed && <AccordeonBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering')

    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}


function AccordeonBody(props: AccordeonBodyPropsType) {
    console.log('AccordeonBody rendering')

    return (

        <ul>
            {props.items.map(i => <li onClick={() => {props.onClick(i.value)}} key={i.value}>{i.title}</li>)}
        </ul>)
}

// function Accordeon(props: AccordeonPropsType) {
//     console.log('Accordeon rendering')
//
//
//     if (props.collapsed) {
//         return (
//             <AccordeonTitle title={props.title}/>)
//
//     } else {
//         return (
//             <>
//                 <AccordeonTitle title={props.title}/>
//                 <AccordeonBody title={props.title}/>
//             </>
//         )
//
//
//     }
//
//
//     function AccordeonTitle(props: any) {
//         console.log('AccordeonTitle rendering')
//
//         return (
//             <h3>{props.title}</h3>
//         )
//     }
//
//     function AccordeonBody(props: any) {
//         console.log('AccordeonBody rendering')
//
//         return (
//
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//             </ul>
//         )
//     }}

export default Accordeon