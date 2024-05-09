import emptyImg from "@/assets/empty.svg";
import "./empty.style.scss";

interface EmptyProps {
  text?: string;
}

const Empty = ({ text }: EmptyProps) => {
  return (
    <div className="empty">
      <img src={emptyImg} alt="Sin resultados" width={300} />
      <span>{text || "Ups, no hay nada para mostrar"}</span>
    </div>
  );
};

export default Empty;
