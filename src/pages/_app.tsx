import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {


  //todos elementos vai poder visiualizar
  return (
    // <ChallengesContext.Provider value={{ level, levelUp }}>
    // </ChallengesContext.Provider>

    <ChallengesProvider>
      <Component {...pageProps} />

    </ChallengesProvider>
  )
}

export default MyApp
