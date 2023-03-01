// Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import SnackbarContainer from './containers/snackbar-container';

// Components
import MainContextContainer from './contexts';

// Screens
import HomeScreen from './screens/home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainContextContainer>
      <SnackbarContainer>
        <HomeScreen />
      </SnackbarContainer>
    </MainContextContainer>
  </React.StrictMode>,
)
