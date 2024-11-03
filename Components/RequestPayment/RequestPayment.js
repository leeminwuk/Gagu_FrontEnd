import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Styles";

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
    <View key={message.id} style={styles.paymentRequestMessage}>
      <View style={styles.paymentTitle}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/blackLogo.png')}
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.paymentRequestText}>
          {message.text}
        </Text>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: productData.imageUrl }}
          style={styles.productImage}
        />
        <View style={styles.productInfoContainer}>
          <Text style={styles.productName}>
            {productData.name}
          </Text>
          <Text style={styles.productDate}>
            {productData.manufactureDate} 제작
          </Text>
          <Text style={styles.productPrice}>
            {productData.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RequestPayment;