import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState('Unknwon Player')
  // const [submitted, setSubmitted] = useState(false)

  // function handleChange(event) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value)
  // }

  function handleClick() {
    // setSubmitted(true)
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enteredPlayerName : 'Unknown Player'}</h2> */}
      <h2>Welcome {enteredPlayerName ?? 'Unknown Player'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        // value={enteredPlayerName}
        // onChange={handleChange}
        />

        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
