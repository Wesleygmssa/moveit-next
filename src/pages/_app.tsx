import { ChallengesProvider } from '../contexts/ChallengesContext';


function MyApp({ Component, pageProps }) {


  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>

  )
}

export default MyApp


    // <ChallengesContext.Provider value={{ level: 1}}>
    // </ChallengesContext.Provider>