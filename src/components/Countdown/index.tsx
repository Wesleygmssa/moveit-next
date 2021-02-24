import { useEffect, useState } from 'react';
import Button from '../Button';
import { ContainerInt, Container } from './styles';

let countdownTimeOut: NodeJS.Timeout;

const Countdown: React.FC = () => {
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60; //resto da divisão
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondseLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]);


    return (
        <Container>
            <ContainerInt>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondseLeft}</span>
                    <span>{secondsRight}</span>
                </div>

            </ContainerInt>

            {hasFinished ? (
                <Button
                    className="countdownButton"
                    disabled >
                    Ciclo encerrado
                </Button>
            ) : (
                    <>
                        {isActive ? (
                            <Button type="button" onClick={resetCountdown} className="countdownButtonActive" >
                                Abandonar ciclo
                            </Button>
                        ) : (
                                <Button type="button" onClick={startCountdown}  >
                                    Iniciar um ciclo
                                </Button>
                            )

                        }
                    </>
                )}


        </Container>
    )
}

export default Countdown;