import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';

import { AuthProvider } from '../contexts/auth2';
import { App } from '../src/App';
import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';

interface Props extends AppProps {
  emotionCache?: EmotionCache;
  session: any;
}

// export const AuthContext = React.createContext<AuthContext>({});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: any,) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, session } = props;

  const [authContextDefault, setUser] = React.useState({
    user: undefined,
    isLoggedIn: false
  })

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AuthProvider>
          <App>
            <Component {...pageProps} />
          </App>
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
