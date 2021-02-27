import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

//tipo de children
interface CountdownProviderPorps {
    children: ReactNode;
}


interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}


let countdownTimeOut: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderPorps) {

    const { startNewChallenge, resetChallenge, } = useContext(ChallengesContext);


    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60; //resto da divisão


    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setTime(25 * 60);
        setHasFinished(false);
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
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )

}