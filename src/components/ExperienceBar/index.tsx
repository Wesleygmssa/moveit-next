import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Header } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

interface Props {
    toggleTheme(): void;
}

export const ExperienceBar: React.FC<Props> = ({ toggleTheme }) => {
    //importando context
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    //calculo de level
    const porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    const { colors, title } = useContext(ThemeContext);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Switch onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={shade(0.1, colors.primary)}
                    onColor={colors.primary}
                />
            </div>

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
        </>
    );
}

