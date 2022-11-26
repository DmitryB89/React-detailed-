import React, {useState} from 'react';
import {UnControlledAccordion} from "./UnControlledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion',
    component: UnControlledAccordion,
}

const callback = action('Accordion mode change event fired')

export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true)
    return (
        <UnControlledAccordion titleValue={'Users'}/>
    )

}
