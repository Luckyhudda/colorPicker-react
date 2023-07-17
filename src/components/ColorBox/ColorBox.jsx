import style from "./ColorBox.module.css";
// eslint-disable-next-line react/prop-types
const ColorBox = ({ stylesheet }) => {
  return <div className={style.colorBox} style={stylesheet}></div>;
};

export default ColorBox;
