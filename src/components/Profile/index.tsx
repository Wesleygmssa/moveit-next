import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { Container, ContentInt } from "./styles";

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <Container>
            <img src="https://github.com/Wesleygmssa.png" alt="" />
            <ContentInt>
                <strong>Wesley Guerra</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </ContentInt>
        </Container>
    )
}