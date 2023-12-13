import { Button, Input } from "@adev/ui-kit";
import { useState } from "react";
import { MagnifierMIcon } from "@alfalab/icons-glyph/MagnifierMIcon";
import style from "./SearchBar.module.scss";

export const SearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      fieldClassName={style.input}
      defaultValue={value}
      label="Поиск товаров"
      onChange={(value: string) => {
        setValue(value);
      }}
      width="available"
      contentRight={
        <div className={style["button"]}>
          <Button view="action">
            <MagnifierMIcon></MagnifierMIcon>
          </Button>
        </div>
      }
    ></Input>
  );
};
