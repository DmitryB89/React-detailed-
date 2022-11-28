import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const DifficultCounting = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA

    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const ReactMemoHelper = () => {
    console.log('ReactMemoHelper')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Alena', 'Victor', 'Mariya'])

    const newArray = useMemo(() => {
        const newArray = users.filter((u) => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addUser()}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>)
}


export const UseCallbackLike = () => {
    console.log('UseCallbackLike')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'HTML', 'JS', 'CSS'])

    // const newArray = useMemo(() => {
    //     const newArray = books.filter((u) => u.toLowerCase().indexOf('a') > -1)
    //     return newArray
    // }, [books])

    const addBook = () => {

    }

    const memizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newUsers = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])

    const memizedAddBook2 = useCallback(() => {
        console.log(books)
        const newUsers = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newUsers)
    }, [books])


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book addBook={memizedAddBook2}/>
        </>)
}


const BooksSecret = (props: { addBook: () => void }) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {/*{props.books.map((book, i) => <div key={i}>{book}</div>)}</div>*/}
    </div>
}
const Book = React.memo(BooksSecret)

