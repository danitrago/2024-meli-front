import { Product } from "@/types/product.types";
import "./productSheet.style.scss";
import { FreeShipingText } from "@/components/freeShippingText";
import { BuyButton } from "@/components/buyButton";

const ProductSheet = (props: Product) => {
  const {
    id,
    title,
    img,
    prettyPrice,
    condition,
    freeShipping,
    description,
    soldQuantity
  } = props;
  return (
    <article className="productSheet">
      <div className="productSheet__desc">
        <div className="productSheet__gallery">
          <img className="productSheet__thumbImg" src={img} alt={title} />
          <img className="productSheet__img" src={img} alt={title} />
        </div>
        <h2>Descripción del producto</h2>
        <p>{description}</p>
      </div>
      <div className="productSheet__buy">
        <div className="productSheet__flags">
          <span>
            {condition}
            {soldQuantity && ` - ${soldQuantity} vendidos`}
          </span>
        </div>
        <h1 className="productSheet__title">{title}</h1>
        <span className="productSheet__price">{prettyPrice}</span>
        {freeShipping && <FreeShipingText />}
        <BuyButton onClick={() => alert("Comprar " + id)}>Comprar</BuyButton>
      </div>
    </article>
  );
};

export default ProductSheet;
