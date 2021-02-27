import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Header } from './styles';

export const ExperienceBar: React.FC = () => {
    //importando context
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    //calculo de level
    const porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <Header >
            <span>0 xp</span>
            <div>
                <div
                    style={{ width: `${porcentToNextLevel}%` }}
                />

                <span className="current-experience"
                    style={{ left: `${porcentToNextLevel}%` }}>
                    {currentExperience} xp
                        </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </Header>
    );
}

