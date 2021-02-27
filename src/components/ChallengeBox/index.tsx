import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import Button from "../Button";
import { Container, NotActive, ChallengeActive } from "./styles";



const ChallengeBox: React.FC = () => {
    // const hasActiveChallenge = true; configurando manual para teste.

    const { activeChallege, resetChallenge, completeChallenge } = useContext(ChallengesContext);

    /* Recendo variavel gloval
       
       activeChallege ->  com as informações do JSON aletorio para ser exibida na caixa de deafsio
       e a função reset desafio onde sera setada com null outra informação para iniciar
       outro desafios.
    */


    /* 
      resetChallenge -> Uma funão global onde volta ao estado de inicio da variavel.]
      sendo executada no botão failed
    */

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
                            onClick={resetChallenge}
                            className="challengeFailedButton"
                            type="button"
                        >Failed
                        </Button>

                        <Button
                            onClick={completeChallenge}
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