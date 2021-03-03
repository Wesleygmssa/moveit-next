// utilizando context
import { createContext, useState, ReactNode, useEffect } from 'react';

// todos dados do desafio
import challenges from '../../challenges.json';

interface challenge {
    type: 'body' | 'eye',
    description: challenge;
    amount: number;
}

//tipos de dados
interface challegensContextData {
    level: number,
    currentExperience: number,
    challengesComleted: number,
    activeChallege: challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completeChallenge: () => void;
}

//tipo de children
interface ChallengesProviderPorps {
    children: ReactNode;
}

// obrigatorio passar um valor inicial //enviado para App.tsx;
export const ChallengesContext = createContext({} as challegensContextData);


//compponent para ser importado
export const ChallengesProvider: React.FC<ChallengesProviderPorps> = ({ children }) => {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesComleted, setChanllegesCompleted] = useState(0);
    const [activeChallege, setActiveChanllenge] = useState(null);


    //calculo de level
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    function startNewChallenge() {

        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChanllenge(challenge);

        new Audio('/notification.mp3').play();

        if (Notification.permission == 'granted') {
            new Notification('Novo desafio 👌', {
                body: `Valendo${challenge.amount}xp`
            });
        }
    }


    function resetChallenge() {
        setActiveChanllenge(null);
        /* 
          * activeChallege -> Se o desafios esta nulo o component sera exibida outra informação.
            e terá e voltar o contador ao inicio
          *
        */
    }


    function levelUp() {
        setLevel(level + 1);
    }


    function completeChallenge() {
        if (!activeChallege) {
            return;
        }

        //quanto de experiencia
        const { amount } = activeChallege;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChanllenge(null);
        setChanllegesCompleted(challengesComleted + 1)
    }

    return (

        /* Aqui fica todas informações que vão para conetext global da aplicação */
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesComleted,
            levelUp,
            startNewChallenge,
            activeChallege,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    )

}

