export interface ChatRoom {
  id: number;
  roomName: string;
  lastMessage: string;
  lastMessageTime: Date;
}

export interface UserInfoResponse {
  name: string;
}

export interface ChatContent {
  message: string;
  sendTime: string;
}

export interface ChatListProps {}

export interface Navigation {
  navigate: (screen: string, params?: any) => void;
}