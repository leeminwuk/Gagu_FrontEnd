// types.ts

export interface StartButtonProps {}

export interface Navigation {
  navigate: (screen: string, params?: any) => void;
}