import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Book from "../icons/book.png";
import MyButton from "../components/MyButton";
import PlusMinus from "../components/PlusMinus";
import { SafeAreaView } from "react-native-safe-area-context";
const Lab_3_a = ({ navigation, book }) => {
  const [total, setTotal] = useState(0);
  const [temp, setTemp] = useState(0);
  const [amount, setAmount] = useState(1);
  const [gift, setGift] = useState({
    discount: 0,
    title: "none",
  });
  const { price, oldPrice } = book;

  useEffect(() => {
    setTemp(amount * price);
    setTotal(amount * price);
  }, [amount]);

  const handleSelectGift = () => {
    setTotal(temp + gift.discount);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.view}>
          <View style={styles.info}>
            <Image source={Book} />
            <View style={styles.detail}>
              <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.oldPrice}>{oldPrice}</Text>
              <View style={styles.plus_minus}>
                <PlusMinus setAmount={setAmount} amount={amount} />
                <Text>mua sau</Text>
              </View>
            </View>
          </View>
          <View style={[styles.discount, { marginTop: 15 }]}>
            <Text style={[styles.text, { marginRight: 20 }]}>
              Mã giảm giá đã lưu
            </Text>
            <Text style={[styles.text, { color: "#134FEC" }]}>Xem tại đây</Text>
          </View>
          <View style={[styles.discount_save,{marginTop:20}]}>
            <View style={[styles.textField,]}>
              <View style={styles.prefix} />
              <TextInput
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  marginLeft: 10,
                  flex: 1,
                }}
                placeholder={"Mã giảm giá"}
              />
            </View>
            <MyButton content="Áp dụng" />
          </View>
        </View>
        <View style={styles.gift}>
          <Text style={{ marginRight: 20 }}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text>Nhập tại đây?</Text>
        </View>
        <View style={styles.provisional}>
          <Text>Tạm tính</Text>
          <Text>{temp}</Text>
        </View>
        <View>
          <View style={styles.total}>
            <Text>Thành tiền</Text>
            <Text>{total}</Text>
          </View>
          <MyButton
            style={{ marginTop: 20, backgroundColor: "#E53935" }}
            content="Tiến hành đặt hàng"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  info: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
  },
  price: {
    color: "#EE0D0D",
    fontSize: 18,
    fontWeight: "bold",
  },
  oldPrice: {
    fontSize: 15,
    textDecorationLine: "line-through",
    color: "grey",
  },
  plus_minus: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detail: {
    fontWeight: 500,
    marginLeft: 20,
    justifyContent: "space-between",
  },
  discount: {
    display: "flex",
    flexDirection: "row",
  },
  discount_save: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view: {},
  gift: { display: "flex", flexDirection: "row" },
  provisional: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  total: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prefix: {
    backgroundColor: "#F2DD1B",
    width: 30,
    height: 20,
  },
  textField: {
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 40,
    width:250
  },
});

export default Lab_3_a;
