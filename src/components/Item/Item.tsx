import { Button, Expand, Island, Text } from "@adev/ui-kit";
import { Product } from "../../models/product";
import style from "./Item.module.scss";
import { SupermarketTrolleyMIcon } from "@alfalab/icons-glyph/SupermarketTrolleyMIcon";
import React from "react";

interface ItemProps {
  item: Product;
  onClick?: () => void;
}

const getRandomValue = () => {
  const randomFraction = Math.random();
  const randomValue = 1.2 + randomFraction * (1.7 - 1.2);
  const roundedValue = Math.round(randomValue * 100) / 100;
  return roundedValue;
};

export const Item = ({ item }: ItemProps) => {
  const targetPriceDiscount = getRandomValue();
  return (
    <>
      <Island>
        <div className={style.content}>
          <img src={item.imagePath} className={style.image}></img>
          <div className={style.additional}>
            <div className={style.price}>
              <Text
                weight="bold"
                typography="headline-md"
                color="var(--ep-color-success)"
              >
                {item.price} ₽
              </Text>
              <del>{item.price * targetPriceDiscount} ₽</del>
              <Text typography="headline-xs" color="var(--ep-color-danger)">
                -{targetPriceDiscount * 100 - 100}%
              </Text>
            </div>
            <Text typography="headline-sm">{item.name}</Text>
            <Button
              className={style.button}
              view="clear"
              contentLeft={<SupermarketTrolleyMIcon />}
            ></Button>
            <div>
              <Button onClick={function noRefCheck() {}}>Описание</Button>
              <Expand>
                <div>
                  <React.Fragment key=".0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur consequatur dicta earum enim, fugiat hic impedit
                    ipsam ipsum itaque laudantium modi nihil numquam, omnis,
                    perferendis quasi recusandae reprehenderit temporibus
                    voluptates!
                  </React.Fragment>
                </div>
              </Expand>
            </div>
          </div>
        </div>
      </Island>
    </>
  );
};
