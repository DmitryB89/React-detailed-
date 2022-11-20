import React from "react";
import {RatingValueType} from "../Rating";

type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    // value: number
    onChange: (value: any) => void
    items: ItemType[]
    value? : any

}

export function Select(props: SelectPropsType) {
    const selectedItem = props.items.find(i => i.value === props.value)

    return (<div>
        <h3>{selectedItem && selectedItem.title}</h3>
        {props.items.map(i => <div key={i.value}>{i.title}</div>)}


    </div>)


}
