import { BuyButton } from "../buyButton";
import { FreeShipingText } from "../freeShippingText";
import "./buyCard.style.scss";

interface BuyCardProps {
  id: string;
  tags: string;
  title: string;
  price: string;
  isFreeShipping: boolean;
}

const BuyCard = ({ id, tags, title, price, isFreeShipping }: BuyCardProps) => {
  return (
    <div className="buyCard">
      <div className="buyCard__flags">
        <span>{tags}</span>
      </div>
      <h1>{title}</h1>
      <span className="buyCard__price">{price}</span>
      {isFreeShipping && <FreeShipingText />}
      <BuyButton onClick={() => alert("Comprar " + id)}>Comprar</BuyButton>
    </div>
  );
};

export default BuyCard;
