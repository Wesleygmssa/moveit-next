import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import Button from "../Button";
import { Container, NotActive, ChallengeActive } from "./styles";



const ChallengeBox: React.FC = () => {
    const contextData = useContext(ChallengesContext);

    console.log(contextData)

    const hasActiveChallenge = true;

    return (
        <Container>
            {hasActiveChallenge ? (
                <ChallengeActive>
                    <header>
                        Ganhe 400 xp
                    </header>

                    <main>
                        <img src="icons/body.svg" alt="" />
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <Button
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