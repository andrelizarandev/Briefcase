// Modules
import { useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';

// Contexts
import { MainContext } from '../../contexts';

export default function SnackbarContainer ({ children }:any) {
  const { handleSetNullSnackbarMessage, snackbarMessage } = useContext(MainContext);
  return (
    <>
      {children}
      <Snackbar open={snackbarMessage !== null} autoHideDuration={5000} onClose={handleSetNullSnackbarMessage}>
        <Alert onClose={handleSetNullSnackbarMessage} severity={snackbarMessage?.type} sx={{ width: '100%' }}>
          {snackbarMessage?.title}
        </Alert>
      </Snackbar>
    </>
  )
}