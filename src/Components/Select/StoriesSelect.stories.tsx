import React from "react";
import {RatingValueType} from "../Rating/Rating";

type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    // value: number
    value: any
    onClick: (value: RatingValueType) => void
    items:ItemType[]
}

export function Select(props: SelectPropsType) {

    return (<div>
        <div>
            {}
        </div>
        {props.items.map(i => {<div>{i.title}</div>})}

    </div>)


}