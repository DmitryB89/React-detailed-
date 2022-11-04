import React, {useState} from "react";
import exp from "constants";

type AccordeonPropsType = {
    titleValue: string
    // collapsed: boolean
}

export const UnControlledAccordeon = (props: AccordeonPropsType) => {

let [collapsed, setCollapsed] = useState(false)
        return (
            <div>
                <AccordeonTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
                {collapsed  && <AccordeonBody/>}


                {/*<AccordeonTitle title={props.titleValue}/>*/}
                {/*<button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>*/}
                {/*{collapsed  && <AccordeonBody/>}*/}
            </div>
        )


    }

type AccordeonTitlePropsType = {
    title:string
    onClick:()=>void
}

    function AccordeonTitle(props: AccordeonTitlePropsType) {
        console.log('AccordeonTitle rendering')

        return (
            <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>
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
