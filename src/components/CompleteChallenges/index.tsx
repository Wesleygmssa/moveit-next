import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container } from './styles';

const Complete: React.FC = () => {

    const { challengesComleted } = useContext(ChallengesContext);

    return (
        <Container>
            <span>Desafios completos</span>
            <span>{challengesComleted}</span>
        </Container>
    )
}

export default Complete;