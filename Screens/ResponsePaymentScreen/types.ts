export interface Item {
    furniture2DUrl: string;
    createdDate: string;
    furnitureName: string;
    price: number;
  }
  
  export interface ResponsePaymentScreenLogic {
    item: Item;
    formatDate: (dateString: string) => string;
    formatPrice: (price: number) => string;
    handleAddAddress: () => void;
    handlePayment: () => void;
    navigation: any;
  }