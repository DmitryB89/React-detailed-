import React, {useState} from "react";


type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?:boolean
}


export const UncontrolledOnOff = (props: PropsType) => {
    console.log('UncontrolledOnOff rendering')

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        marginLeft: '30px',
        marginTop: '30px',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'


    }

    const offStyle = {
        marginLeft: '5px',

        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'


    }
    const indicatorStyle = {
        marginLeft: '10px',
        marginTop: '10px',
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {

        setOn(false)
        props.onChange(false)
    }


    return  <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>

        </div>

}