import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'UseState demo'
}


function generateData () {
    console.log('generateData')
    return 123127312397621
}

export const Example1 = () => {
    console.log('Example1')
    // const initValue = useMemo(generateData,[])

    const [counter, setCounter] = useState(generateData)

    const changer = (state:number) => state +1

    return  <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(changer)}>changer</button>
            {counter}
        </>
}
