import React, { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import Button from '../Button';
import { ContainerInt, Container } from './styles';


const Countdown: React.FC = () => {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext);


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondseLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

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
                    Cycle terminated
                </Button>
            ) : (
                    <>
                        {isActive ? (
                            <Button type="button" onClick={resetCountdown} className="countdownButtonActive" >
                                Abandon cycle
                            </Button>
                        ) : (
                                <Button type="button" onClick={startCountdown}  >
                                    Start a cycle Start a cycle
                                </Button>
                            )

                        }
                    </>
                )}


        </Container>
    )
}

export default Countdown;