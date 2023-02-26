import { API_URI } from "../../const";
import { Count } from "../Count/Count";
import style from "./OrderGoods.module.css";

export const OrderGoods = ({ title, price, image, count, id, weight }) => {
  return (
    <li className={style.order__item}>
      <img className={style.order__image} src={`${API_URI}/${image}`} alt={title} />

      <div className={style.goods}>
        <h3 className={style.goods__title}>{title}</h3>

        <p className={style.goods__weight}>{weight}g</p>

        <p className={style.goods__price}>
          {price}
          <span className="currency">&nbsp;₽</span>
        </p>
      </div>

        <Count count={count} id={id} />
    </li>
  );
};
