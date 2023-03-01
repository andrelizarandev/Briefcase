// Modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import MainContextContainer from './contexts';

// Screens
import HomeScreen from './screens/home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainContextContainer>
      <HomeScreen />
    </MainContextContainer>
  </React.StrictMode>,
)
