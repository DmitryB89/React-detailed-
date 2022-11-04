import React, {useState} from 'react';
import './App.css';
import Accordeon from "./Components/Accordeon/Accordeon";
import {Rating, RatingValueType} from "./Components/Rating";
import {UncontrolledOnOff} from "./Components/OnOff/UncontrolledOnOff";
import {UnControlledAccordeon} from "./Components/Accordeon/UnControlledAccordeon";
import {UnControlledRating} from "./Components/UnControlledRating";
import {
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUncontrolledInput,
} from "./Components/Input/UncontrolledInput";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./Components/Input/ControlledInput";


function App() {

//Контролируемый Rating
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)


    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    console.log('App rendering')

    let [switchOn, setSwitchOn] = useState(false)

    const onClickCallBack = () => {
        alert('Some user was clicked')
    }

    return (
        <div className={'App'}>
            <UnControlledAccordeon titleValue={'Menu'}/>
            <UnControlledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordeon
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


            {/*<UnControlledAccordeon titleValue={'Users'}/>*/}
            {/*<Accordeon title={'This is IT-Incubator'} collapsed={true}/>*/}
            {/*<Accordeon title={'This is IT-Kamasutra'} collapsed={false}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}
        </div>
    );
}

export default App;
