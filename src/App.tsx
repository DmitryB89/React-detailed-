import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import {UnControlledAccordion} from "./Components/UncontrolledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./Components/UncontrolledRating/UnControlledRating";
import {
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUncontrolledInput,
} from "./Components/Input/UncontrolledInput";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./Components/Input/ControlledInput";
import {Select} from "./Components/Select/Select";
import {Example1} from "./Components/ReactMemo/ReactMemo";


function App() {

//Контролируемый Rating
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)


    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    console.log('App rendering')

    let [switchOn, setSwitchOn] = useState(false)

    const onClickCallBack = () => {
        alert('Some user was clicked')
    }
    const onChangeCallback = () => {
        alert('Some user was clicked')
    }

    return (
        <div className={'App'}>
            <UnControlledAccordion titleValue={'Menu'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                title={'Menu'}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
                items={[
                    {title: 'Dimych', value: 1},
                    {title: 'Victor', value: 2},
                    {title: 'Alex', value: 3},
                    {title: 'Ilya', value: 4},
                    {title: 'Olga', value: 5}
                ]}
                onClick={(value) => {
                    alert(`user with ID ${value} should be happy`)
                }}
                // onClick={(value) => {alert(`user with ID ${value} has been clicked`)} }
            />

            {/*<OnOff on={switchOn} onChange={(on) => {setSwitchOn(on)}}/>*/}
            {/*Добавляем функционал бесполезной компоненте со стейтом. */}
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            <br/>
            <div>
                <TrackValueOfUncontrolledInput/>
            </div>
            <div><GetValueOfUncontrolledInputByButtonPress/></div>
            <div><ControlledInput/></div>
            <div><ControlledCheckbox/></div>
            <div><ControlledSelect/></div>
            <div><Example1/></div>
            {/*<div><Select items={[*/}
            {/*    {title: 'Moscow', value: 1},*/}
            {/*    {title: 'Minsk', value: 2},*/}
            {/*    {title: 'Kiev', value: 3},*/}
            {/*    {title: 'Praga', value: 4},*/}
            {/*    {title: 'New York', value: 5}*/}
            {/*]} onChange={onChangeCallback} value={'1'}/></div>*/}


            {/*<UnControlledAccordeon titleValue={'Users'}/>*/}
            {/*<Accordion title={'This is IT-Incubator'} collapsed={true}/>*/}
            {/*<Accordion title={'This is IT-Kamasutra'} collapsed={false}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}
        </div>
    );
}

export default App;
