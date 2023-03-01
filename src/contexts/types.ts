// Modules
import { AlertColor } from "@mui/material";

export type LanguageOptions = 1 | 2;

export type MainContextPayload = {
  selectedLanguage: LanguageOptions;
  toggleLanguage: () => void;
  snackbarMessage: SnackbarPayload;
  setSnackbarMessage: React.Dispatch<React.SetStateAction<SnackbarPayload>>;
  handleSetNullSnackbarMessage: () => void
}

export type SnackbarPayload = {
  title:string;
  type:AlertColor;
} | null