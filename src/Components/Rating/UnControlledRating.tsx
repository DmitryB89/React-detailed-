import React, {useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";
import {RatingValueType} from "./Rating";


type RatingPropsType = {
    // value: number
    value: 1 | 2 | 3 | 4 | 5
}

// export function Rating(props: RatingPropsType) {
//     console.log('Rating rendering')
export const UnControlledRating = () => {
    let [value, setValue] = useState(0)


    return (<div>
        <Star selected={value > 0} setValue={()=>{setValue(1)}}/>
        <Star selected={value > 1} setValue={()=>{setValue(2)}}/>
        <Star selected={value > 2} setValue={()=>{setValue(3)}}/>
        <Star selected={value > 3} setValue={()=>{setValue(4)}}/>
        <Star selected={value > 4} setValue={()=>{setValue(5)}}/>

    </div>)
    // return (<div>
    //     <Star selected={value > 0} setValue={setValue} value = {1}/>
    //     <Star selected={value > 1} setValue={setValue} value = {2}/>
    //     <Star selected={value > 2} setValue={setValue} value = {3}/>
    //     <Star selected={value > 3} setValue={setValue} value = {4}/>
    //     <Star selected={value > 4} setValue={setValue} value = {5}/>
    //
    // </div>)
}


type StarPropsType = {
    selected: boolean
    // setValue: (value:1 | 2 | 3 | 4 | 5)=> void
    // value: 1 | 2 | 3 | 4 | 5
    setValue:()=>void
}

export const Star = (props: StarPropsType) => {

        return (

        <span onClick={()=>{props.setValue()}}>  {props.selected ? <b>Star</b> : "Star"} </span>
        // <span onClick={()=>{props.setValue(props.value)}}>  {props.selected ? <b>Star</b> : "Star"} </span>

)
}

// function Star(props: StarPropsType) {
//     let [value, setValue] = useState(4)
//
//     return (
//     (props.selected) ? (<span><b>Star</b></span>) : <span>Star</span>
//     )
// }



