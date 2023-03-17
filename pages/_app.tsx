import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux';
import { store } from '../store/store'
config.autoAddCss = false



export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <ThemeProvider>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  )
}
