import { Link } from "react-router-dom";
import logo from "./logo.png";
import Styles from "./Cabecalho.module.css";
import CabecalhoLink from "componentes/CabecalhoLink";

function Cabecalho() {
  return (
    <header className={Styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo Cinetag"></img>
      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
