import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import Button from '../Button';
import { Container } from './styles';

const Countdown: React.FC = () => {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondseLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true);
        console.log('teste')

    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
    }, [active, time])


    return (
        <>
            <Container>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondseLeft}</span>
                    <span>{secondsRight}</span>
                </div>

            </Container>
            <Button type="button" onClick={startCountdown} >Iniciar um ciclo </Button>
        </>
    )
}

export default Countdown;