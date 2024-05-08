import { Product } from "@/types/product.types";
import { Link } from "react-router-dom";
import "./productCard.style.scss";

const ProductCard = (props: Product) => {
  const { id, title, img, prettyPrice } = props;
  return (
    <article className="productCard">
      <img className="productCard__img" src={img} alt={title} />
      <div className="productCard__desc">
        <span className="productCard__price">{prettyPrice}</span>
        <Link to={`/items/${id}`}>{title}</Link>
      </div>
      <div className="productCard__flags">Nuevo</div>
    </article>
  );
};

export default ProductCard;
