import { createContext, useState, ReactNode } from 'react'; // utilizando context
import challenges from '../../challenges.json';

interface challenge {
    type: 'body' | 'eye',
    description: challenge;
    amount: number;
}

interface challegensContextData {
    level: number,
    currentExperience: number,
    challengesComleted: number,
    activeChallege: challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    experienceToNextLevel: number;
}

interface ChallengesProviderPorps {
    children: ReactNode;
}


export const ChallengesContext = createContext({} as challegensContextData); // obrigatorio passar um valor inicial
//enviado para App.tsx;

export const ChallengesProvider: React.FC<ChallengesProviderPorps> = ({ children }) => {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesComleted, setChanllegesCompleted] = useState(0);
    const [activeChallege, setActiveChanllenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function startNewChallenge() {
        /*  
            *Quando o contador chegar ao final 
            *Essa função esta liberada pelo context
            *Para ser utilizada global
        */
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        /* 
            Pegando desafios aleátorio
            pegando a quantidade de desafio
        */

        const challenge = challenges[randomChallengeIndex];
        /* 
            Inseriando na variavel
        */


        setActiveChanllenge(challenge);
        /* 
            setando desafio no estado
            que erá passada global no estado
            outro component

            chanllengebox
        */
    }


    function resetChallenge() {
        setActiveChanllenge(null);
        /* 
          * voltando ao estado normal
          *
        */
    }


    function levelUp() {
        setLevel(level + 1);
    }


    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesComleted,
            levelUp,
            startNewChallenge,
            activeChallege, // 02 inicando desafio
            resetChallenge,
            experienceToNextLevel
        }}>
            {children}
        </ChallengesContext.Provider>
    )

}

