import style from "./CatalogProduct.module.css";

export const CatalogProduct = (props) => {
  return (
    <article className={style.product}>
      <img
        src="img/photo-1.jpg"
        alt={props.title}
        className={style.product__image}
      />

      <p className={style.product__price}>
        550<span className="currency">₽</span>
      </p>

      <h3 className={style.product__title}>
        <button className={style.product__detail}>{props.title}</button>
      </h3>

      <p className={style.product__weight}>512г</p>

      <button className={style.product__add} type="button">
        Добавить
      </button>
    </article>
  );
};
