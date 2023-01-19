import React, { useState } from 'react';
import '../styles/global.css';
import '../styles/carouseldemo.css';
import AppContext from './AppContext';

const contextValue = { email: "" }

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(contextValue);
  return (
    <AppContext.Provider value={[user, setUser]}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
