import React, {useState} from "react";

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Alena', 'Victor', 'Mariya'])

    return (
    <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>)
}

// Т.к. стейт лежит в Example1 вместе с Users, его изменения запустят перерисовку всей Компоненты с дочерними элементами, поэтому
// оборачиваем Users в memo. Контейнерная компонента, которая вылезла из React.memo не будет перезапускать UsersSecret, если пропсы не изменились