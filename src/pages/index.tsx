import CompleteChallenges from "../components/CompleteChallenges";
import Countdown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import GlobalStyled from "../styles/global";
import { Container } from "./styles";



export default function Home() {
  return (
    <Container>
      <GlobalStyled />
      <ExperienceBar />
      <section >
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>
        <div>
        </div>
      </section>
    </Container>
  )
}
