import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import GlobalStyled from "../styles/global";
import { Container } from "./styles";



export default function Home() {
  return (
    <Container>
      <GlobalStyled />
      <ExperienceBar />
      <section>
        <div>
          <Profile />
        </div>
        <div>

        </div>
      </section>
    </Container>
  )
}
