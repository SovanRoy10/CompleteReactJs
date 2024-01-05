import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeremaining => prevTimeremaining - 10);
        }, 10);

    }

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        // setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            {<ResultModal ref={dialog} targetTime={targetTime} remainingTime = {timeRemaining} onReset= {handleReset}/>}
            
            <section className="challenge">
                <h2>{title}</h2>
                {/* {timerExpired && <p>You lost!</p>} */}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}
