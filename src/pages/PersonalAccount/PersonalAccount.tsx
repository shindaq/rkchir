import { Island, Text } from "@adev/ui-kit";
import { Navbar } from "../../components/Navbar/Navbar";
import style from "./PersonalAccount.module.scss";
import { Contacts } from "../../components/Contacts/Contacts";

export const PersonalAccount = () => {
  const user = JSON.parse(window.localStorage.getItem("authFormData") ?? "{}");
  const currentDate = new Date();
  const day = currentDate.getDay();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  return (
    <>
      <Navbar></Navbar>
      <Island className={style.container}>
        <Text>Личные данные</Text>
        <Text>Имя: {user.name}</Text>
        <Text>Почта: {user.email}</Text>
        <Text>
          Дата регистрации : {day}.{month}.{year}
        </Text>
      </Island>
      <Contacts></Contacts>
    </>
  );
};
