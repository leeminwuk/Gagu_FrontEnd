export interface PostAddressResponse {
  success: boolean;
  message: string;
}
export interface SendVerificationCodeResponse {
  success: boolean;
  message: string;
}

export interface VerifyVerificationCodeResponse {
  success: boolean;
  message: string;
}
export interface GetWorkshopEstimatesResponse {
  totalPages: number;
  totalElements: number;
}
// 채팅 내용 타입 정의
export interface ChatContent {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
}

export interface GetChatContentsResponse {
  content: ChatContent[];
  totalPages: number;
  totalElements: number;
}