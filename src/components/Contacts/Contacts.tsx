import { Island, Text } from "@adev/ui-kit";
import style from "./Contacts.module.scss";
export const Contacts = () => {
  return (
    <Island className={style.container}>
      <Text>CEO: Цыренов Александр ИКБО-13-22 </Text>
      <Text>Наши контакты: </Text>
      <Text>Номер телефона: +7 777 777 77 77</Text>
      <Text>Адрес: г. Москва, пр. Вернадского 78</Text>
    </Island>
  );
};
