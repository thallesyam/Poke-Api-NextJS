import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'

const theme = {
  
}

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
