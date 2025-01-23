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
  sendTime: string;
  sender: string;
  message: string;
  chatRoomId: number;
  estimateInfo?: EstimateInfo | null;
}

export interface EstimateInfo {
  estimateId: number;
  furnitureName: string;
  furniture2DUrl: string;
  furnitureGlbUrl: string;
  furnitureGltfUrl: string;
  createdDate: string;
  description?: string | null;
  price?: string | null;
  makerName?: string | null;
}

export interface GetChatContentsResponse {
  content: ChatContent[];
  totalPages: number;
  totalElements: number;
}

// 공방 조회 타입 정의
export interface Workshop {
  id: number;
  workshopName: string;
  description: string;
  address: string;
  starAverage: number;
  count: number;
}

export interface WorkshopResponse {
  content: Workshop[];
  totalPages: number;
  totalElements: number;
}