import CompleteChallenges from "../components/CompleteChallenges";
import Countdown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import GlobalStyled from "../styles/global";
import { Container } from "./styles";
import Head from 'next/head';
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import usePersistedState from '../utils/usePersistedState';

export default function Home() {
  const [theme, setTheme] = usePersistedState('theme', light); // light e um objeto

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <GlobalStyled />
        <ExperienceBar toggleTheme={toggleTheme} />
        <CountdownProvider>
          <section >
            <div>
              <Profile />
              <CompleteChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Container>
    </ThemeProvider>



  )
}
