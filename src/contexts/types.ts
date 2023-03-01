export type LanguageOptions = 1 | 2;

export type MainContextPayload = {
  selectedLanguage: LanguageOptions;
  toggleLanguage: () => void;
}