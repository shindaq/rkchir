import { Island, Text } from "@adev/ui-kit";
import { Navbar } from "../../components/Navbar/Navbar";
import style from "./OrderHistory.module.scss";

export const OrderHistory = () => {
  return (
    <>
      <Navbar></Navbar>
      <Island className={style.container}>
        <Text align="center">История заказов</Text>
      </Island>
      <Island className={style["orders-container"]}>
        <Text>Здесь будут отображаться ваши заказы.</Text>
        <div></div>
      </Island>
    </>
  );
};
