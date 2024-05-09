import { Product } from "@/types/product.types";
import "./productSheet.style.scss";

const ProductSheet = (props: Product) => {
  const { id, title, img, prettyPrice, condition, freeShipping, description } =
    props;
  return (
    <article className="productSheet">
      <img className="productSheet__img" src={img} alt={title} />
      <div className="productSheet__desc">
        <span className="productSheet__price">{prettyPrice}</span>
        {freeShipping && (
          <span className="productSheet__freeShipping">Envío gratis</span>
        )}
        <h3 className="productSheet__title">{title}</h3>
      </div>
      <div className="productSheet__flags">
        <span>{condition}</span>
      </div>
      <p>{description}</p>
      <button
        className="productSheet__button"
        onClick={() => alert("Comprar" + id)}
      >
        Comprar
      </button>
    </article>
  );
};

export default ProductSheet;
