import { Button, Island, Text } from "@adev/ui-kit";
import { Navbar } from "../../components/Navbar/Navbar";
import style from "./Cart.module.scss";
import { Contacts } from "../../components/Contacts/Contacts";

export const Cart = () => {
  return (
    <>
      <Navbar></Navbar>
      <Island className={style.container}>
        <Island className={style.title}>
          <Text align="center"> Ваша корзина</Text>
        </Island>
      </Island>
      <Island className={style["payment-container"]}>
        К оплате: 0₽
        <Button className={style.button}>
          <Text>Оплатить</Text>
        </Button>
      </Island>
      <Contacts></Contacts>
    </>
  );
};
