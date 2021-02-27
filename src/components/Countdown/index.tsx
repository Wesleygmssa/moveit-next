import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import Button from '../Button';
import { ContainerInt, Container } from './styles';



let countdownTimeOut: NodeJS.Timeout;

const Countdown: React.FC = () => {

    const { startNewChallenge, resetChallenge, } = useContext(ChallengesContext);


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



    //iniciando contador
    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)


        } else if (isActive && time === 0) {
            /* 
                *Quando contador acabar, vamos 
                *vamos fazer a regra de negocio
            */

            setHasFinished(true); //ativar button
            /*
             *quando acabar o contador setar como
             *verdadeiro para habilittar o botão 

                    Cycle terminated
            */

            setIsActive(false); // parar contador
            /* 
            *Parando o contador 
            *visualmente não muda nada
            */

            startNewChallenge(); // iniciar o exercicio
            /* 
            *inicando desafio, 
            *quando contador chegar em zero, 
            *
            * (função criada no contexto global )
            */
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