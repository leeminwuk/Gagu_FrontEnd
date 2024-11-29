import React from "react";
import {
  PaymentRequestMessage,
  PaymentTitle,
  LogoImage,
  PaymentRequestText,
  ProductContainer,
  ProductInfoContainer,
  ProductImage,
  ProductName,
  ProductDate,
  ProductPrice,
} from "./Styles";

const RequestPayment = ({ item, price }) => {
  const message = {
    id: 1,
    text: '결제 요청을 했어요!',
  };

  const formatDate = (dateString) => {
    // "2024-10-29 AM 10시 55분 02초" 형식의 문자열을 파싱하여 유효한 날짜 형식으로 변환
    const datePattern = /(\d{4})-(\d{2})-(\d{2})\s(AM|PM)\s(\d{2})시\s(\d{2})분\s(\d{2})초/;
    const match = dateString.match(datePattern);

    if (match) {
      const [_, year, month, day, period, hour, minute, second] = match;
      let parsedHour = parseInt(hour, 10);

      if (period === 'PM' && parsedHour !== 12) {
        parsedHour += 12;
      } else if (period === 'AM' && parsedHour === 12) {
        parsedHour = 0;
      }

      const date = new Date(year, month - 1, day, parsedHour, minute, second);
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }

    return '유효하지 않은 날짜';
  };

  const productData = {
    imageUrl: item.furniture2DUrl,
    name: item.furnitureName,
    manufactureDate: formatDate(item.createdDate),
    price: `${price}원`,
  };

  return (
    <PaymentRequestMessage key={message.id}>
      <PaymentTitle>
        <LogoImage
          source={require('../../assets/images/blackLogo.png')}
        />
        <PaymentRequestText>
          {message.text}
        </PaymentRequestText>
      </PaymentTitle>
      <ProductContainer>
        <ProductImage
          source={{ uri: productData.imageUrl }}
        />
        <ProductInfoContainer>
          <ProductName>
            {productData.name}
          </ProductName>
          <ProductDate>
            {productData.manufactureDate} 제작
          </ProductDate>
          <ProductPrice>
            {productData.price}
          </ProductPrice>
        </ProductInfoContainer>
      </ProductContainer>
    </PaymentRequestMessage>
  );
};

export default RequestPayment;