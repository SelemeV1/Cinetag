import Cabecalho from "componentes/Cabecalho";
import styles from "./PaginaBase.module.css";
import FavoritosProvider from "Contextos/Favoritos";
import Container from "componentes/Container";
import { Outlet } from "react-router-dom";
import Rodape from "componentes/Rodape";

function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}

export default PaginaBase;
