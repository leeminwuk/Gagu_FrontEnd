// types.ts

export interface SignupAcceptProps {
  setModalVisible: (visible: boolean) => void;
  mainText: string;
  sideText: string;
  navigationTo: string;
}

export interface GoogleLoginButtonProps {}

export interface KakaoLoginButtonProps {}

export interface Navigation {
  navigate: (screen: string, params?: any) => void;
}

export type OnPressGoogleBtn = () => Promise<false | "success">;

export type HandleLogin = () => Promise<false | "success">;