import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";
import Button from "../Button";
import { Container, NotActive, ChallengeActive } from "./styles";



const ChallengeBox: React.FC = () => {
    // const hasActiveChallenge = true; configurando manual para teste.

    const { activeChallege, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChanllegeFailed() {
        resetChallenge();
        resetCountdown();
    }


    return (
        <Container>
            {activeChallege ? (
                <ChallengeActive>
                    <header> Win {activeChallege.amount} xp </header>

                    <main>
                        <img src={`icons/${activeChallege.type}.svg`} alt="" />
                        <strong>New Challenge</strong>
                        <p>{activeChallege.description}</p>
                    </main>

                    <footer>
                        <Button
                            onClick={handleChanllegeFailed}
                            className="challengeFailedButton"
                            type="button"
                        >Failed
                        </Button>

                        <Button
                            onClick={handleChallengeSucceeded}
                            className="challengeSuccessButton"
                            type="button"
                        >Completed
                        </Button>
                    </footer>
                </ChallengeActive>

            ) : (
                    <NotActive>
                        <strong>End a cycle to receive a challenge</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="level up" />
                            Advance from level to completing challenges.
                 </p>
                    </NotActive>
                )
            }
        </Container >
    )
}

export default ChallengeBox;