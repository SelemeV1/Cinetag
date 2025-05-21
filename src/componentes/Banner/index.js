import Styles from "./Banner.module.css";

function Banner({ imagem }) {
  return (
    <div
      className={Styles.capa}
      style={{ backgroundImage: `url('./imagens/banner-${imagem}.png')` }}
    ></div>
  );
}

export default Banner;
