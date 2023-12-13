import { Item } from "../Item/Item";
import style from "./Products.module.scss";
import { Product } from "../../models/product";

export const Products = () => {
  const products: Product[] = [
    {
      name: "Мороженое Эскимо Ванильное в молочном шоколаде Milka, 90 мл",
      id: "1231",
      description:
        "Мороженое Эскимо Ванильное в молочном шоколаде Milka, 90 мл",
      price: 79,
      imagePath: "https://ir-1.ozone.ru/s3/multimedia-f/wc1000/6668461731.jpg",
    },
    {
      name: "Мороженое Рожок Малина - Банан Sunreme, 120 мл",
      id: "1232",
      description: "",
      price: 75,
      imagePath: "https://ir-1.ozone.ru/s3/multimedia-k/wc1000/6498394136.jpg",
    },
    {
      name: "Мороженое Сэндвич Страчателла Maxiduo, 92 г",
      id: "12313",
      description: "",
      price: 85,
      imagePath: "https://ir-1.ozone.ru/s3/multimedia-7/wc1000/6498393943.jpg",
    },
    {
      name: "Пломбир в сахарной трубочке Чистая Линия, 70 г",
      id: "12315",
      description: "",
      price: 100,
      imagePath: "https://ir-1.ozone.ru/s3/multimedia-z/wc1000/6070855487.jpg",
    },
    {
      name: "Мороженое Волшебный фонарь с шоколадной крошкой Чистая линия, 80 г",
      id: "12316",
      description: "",
      price: 117,
      imagePath: "https://ir-1.ozone.ru/s3/multimedia-y/wc1000/6321275698.jpg",
    },
  ];

  return (
    <div className={style.products}>
      {products.map((product) => (
        <div key={product.id} className={style.product}>
          <Item item={product}></Item>
        </div>
      ))}
    </div>
  );
};
