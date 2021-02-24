import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import Button from "../Button";
import { Container, NotActive, ChallengeActive } from "./styles";



const ChallengeBox: React.FC = () => {
    // const hasActiveChallenge = true; configurando manual para teste.
    const { activeChallege, resetChallenge } = useContext(ChallengesContext);

    return (
        <Container>
            {activeChallege ? (
                <ChallengeActive>
                    <header> Ganhe {activeChallege.amount} xp </header>

                    <main>
                        <img src={`icons/${activeChallege.type}.svg`} alt="" />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallege.description}</p>
                    </main>

                    <footer>
                        <Button
                            onClick={resetChallenge}
                            className="challengeFailedButton"
                            type="button"
                        >Falhei
                        </Button>

                        <Button
                            className="challengeSuccessButton"
                            type="button"
                        >Completei
                        </Button>
                    </footer>
                </ChallengeActive>

            ) : (
                    <NotActive>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="level up" />
                     Avance de level completando desafios.
                 </p>
                    </NotActive>
                )
            }
        </Container >
    )
}

export default ChallengeBox;