import CompleteChallenges from "../components/CompleteChallenges";
import Countdown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import GlobalStyled from "../styles/global";
import { Container } from "./styles";
import Head from 'next/head';



export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | move.it</title>
      </Head>
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
