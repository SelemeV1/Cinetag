import Styles from "./Titulo.module.css";

function Titulo({ children }) {
  return <div className={Styles.texto}>{children}</div>;
}

export default Titulo;
