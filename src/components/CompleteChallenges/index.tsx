import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container } from './styles';

const Complete: React.FC = () => {

    const { challengesComleted } = useContext(ChallengesContext);

    return (
        <Container>
            <span>Complete challenges</span>
            <span>{challengesComleted}</span>
        </Container>
    )
}

export default Complete;