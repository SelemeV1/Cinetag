import { Link } from "react-router-dom";
import Styles from "./CabecalhoLink.module.css";

function CabecalhoLink({ url, children }) {
  return (
    <Link to={url} className={Styles.link}>
      {children}
    </Link>
  );
}

export default CabecalhoLink;
