import React, {useState} from 'react';
import {Accordion} from "./AccordionForStories";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion mode change event fired')
const onClickCallback = action('Some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}
                                                     items={[{title: 'Dimych', value: 1}, {
                                                         title: 'Alena',
                                                         value: 2
                                                     }, {title: 'Valera', value: 3}, {title: 'Victor', value: 4},]}
                                                     onClick={onClickCallback}/>


export const ModeRating = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}
                   items={[{title: 'Dimych', value: 1}, {title: 'Alena', value: 2}, {
                       title: 'Valera',
                       value: 3
                   }, {title: 'Victor', value: 4},]} onClick={(id) => alert(`User with ID: ${id} should be happy`)}/>
    )

}
