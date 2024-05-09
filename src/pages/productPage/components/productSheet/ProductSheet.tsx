import { BuyCard } from "@/components/buyCard";
import { Product } from "@/types/product.types";
import "./productSheet.style.scss";

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
      <BuyCard
        id={id}
        title={title}
        tags={`${condition}${soldQuantity && ` - ${soldQuantity} vendidos`}`}
        price={prettyPrice}
        isFreeShipping={freeShipping}
      />
    </article>
  );
};

export default ProductSheet;
