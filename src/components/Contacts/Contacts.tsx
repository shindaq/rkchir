import { Text } from "@adev/ui-kit";
import style from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <Text>
        Связаться с нами:<br></br> Номер: +79999999999<br></br> Почта:
        ice_cream_shop@mail.roun<br></br> Физическое лицо: Проспект Вернадского,
        78
      </Text>
    </div>
  );
};
