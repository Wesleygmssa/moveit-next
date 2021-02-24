import { createContext, useState, ReactNode } from 'react'; // utilizando context


interface challegensContextData {
    level: number,
    currentExperience: number,
    challengesComleted: number,
    levelUp: () => void;
    startNewChallenge: () => void;
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

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        console.log('new challenge')
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesComleted,
            levelUp,
            startNewChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    )

}

