import { Link } from "react-router-dom";
import "./breadCrumb.style.scss";

interface BreadCrumbProps {
  items: string[];
}

const BreadCrumb = ({ items }: BreadCrumbProps) => {
  if (!items.length) return;

  const elements = items.map((category: string, index: number) => (
    <li key={index}>
      <Link className="breadCrumb__link" to={`/items?search=${category}`}>{category}</Link>
      {index < items.length - 1 && (
        <span className="breadCrumb__separator">{">"}</span>
      )}
    </li>
  ));

  return <ul className="breadCrumb">{elements}</ul>;
};

export default BreadCrumb;
