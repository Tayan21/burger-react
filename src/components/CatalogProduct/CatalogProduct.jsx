import { useDispatch } from "react-redux";
import { API_URI } from "../../const";
import { addProduct } from "../../store/order/orderSlice";
import style from "./CatalogProduct.module.css";

export const CatalogProduct = ({ item }) => {
  
  const dispatch = useDispatch()
  
  return (
    <article className={style.product}>
      <img
        src={`${API_URI}/${item.image}`}
        alt={item.title}
        className={style.product__image}
      />

      <p className={style.product__price}>
        {item.price}<span className="currency">&nbsp;₽</span>
      </p>

      <h3 className={style.product__title}>
        <button className={style.product__detail}>{item.title}</button>
      </h3>

      <p className={style.product__weight}>{item.weight}</p>

      <button 
        className={style.product__add} 
        type="button"
        onClick={() => {
          dispatch(addProduct({id: item.id}))
        }}
      >
        Добавить
      </button>
    </article>
  );
};
