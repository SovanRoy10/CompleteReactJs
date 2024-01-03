import { useState } from 'react'

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditClick = () => {
        // setIsEditing(!isEditing); // true , schedules a state update to true
        // setIsEditing(!isEditing); // not false , also true , schedules a state update to true

        setIsEditing((editing) => !editing); // best practice

        if (isEditing)
            onChangeName(symbol, playerName);

    }

    const handleChange = (event) => {
        setPlayerName((name) => event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
        btnCaption = 'Save'
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>

            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}
