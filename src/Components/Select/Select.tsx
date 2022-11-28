import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    // value: number
    onChange: (value: any) => void
    items: ItemType[]
    value?: any

}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hovered, setHovered] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hovered)

    useEffect(() => {
        setHovered(props.value)
    }, [props.value])

    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovered) {
                    const pretenderElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretenderElement) {
                        props.onChange(pretenderElement.value);
                        return
                    }
                }
            }
            if (!selectedItem) {
            props.onChange(props.items[0].value);
            }

        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }

    return (
        <>
            {/*<select>*/}
            {/*    <option value="1">Moscow</option>*/}
            {/*    <option value="2">Minsk</option>*/}
            {/*    <option value="3">Magadan</option>*/}
            {/*    <option value="4">St Petersburg</option>*/}
            {/*</select>*/}
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                {/*<div className={s.select + ' ' + (active ? s.active : '')}>*/}

                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => setHovered(i.value)}
                            className={s.item + " " + (hoveredItem === i ? s.selected : '')}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}
