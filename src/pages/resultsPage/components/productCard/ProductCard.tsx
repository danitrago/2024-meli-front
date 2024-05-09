import { Product } from "@/types/product.types";
import { Link } from "react-router-dom";
import "./productCard.style.scss";

const ProductCard = (props: Product) => {
  const { id, title, img, prettyPrice, condition, freeShipping } = props;
  return (
    <Link className="productCard" to={`/items/${id}`} title={title}>
      <img className="productCard__img" src={img} alt={title} />
      <div className="productCard__desc">
        <span className="productCard__price">{prettyPrice}</span>
        {freeShipping && (
          <span className="productCard__freeShipping">Envío gratis</span>
        )}
        <h3 className="productCard__title">{title}</h3>
      </div>
      <div className="productCard__flags">
        <span>{condition}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
