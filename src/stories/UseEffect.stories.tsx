import {useEffect, useState} from "react";

export default {
    title: "UseEffect demo"
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('useEffect on every component render')
    useEffect(() => {
        console.log('UseEffect');
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('UseEffect once, on component mount');
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('UseEffect on first render and on every counter change');
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake +</button>
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
        </>
    )
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('setTimeoutExample')

    useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout');
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])
        setInterval(() => {
            setCounter((state) => state+1)
        },1000)
    },[])


    return (
        <>
            Hello, counter: {counter} – fake: {fake}
            {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
        </>
    )
}

