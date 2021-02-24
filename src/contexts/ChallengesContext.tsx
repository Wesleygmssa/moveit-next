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

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length); //desafios aleatorios
        const challenge = challenges[randomChallengeIndex];

        setActiveChanllenge(challenge);
    }

    function resetChallenge() {
        setActiveChanllenge(null);

    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesComleted,
            levelUp,
            startNewChallenge,
            activeChallege,
            resetChallenge,
            experienceToNextLevel
        }}>
            {children}
        </ChallengesContext.Provider>
    )

}

