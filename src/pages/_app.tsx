import { ChallengesContext } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  //todos elementos vai poder visiualizar
  return (
    <ChallengesContext.Provider value={'teste'}>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  )
}

export default MyApp
