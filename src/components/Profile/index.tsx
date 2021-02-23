import { Container, ContentInt } from "./styles";

export function Profile() {
    return (
        <Container>
            <img src="https://github.com/Wesleygmssa.png" alt="" />
            <ContentInt>
                <strong>Wesley Guerra</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>

            </ContentInt>
        </Container>
    )
}