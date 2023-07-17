import style from "./Button.module.css";
// eslint-disable-next-line react/prop-types
const Button = ({ onClickHandler, isDisable }) => {
  const addColor = () => onClickHandler();
  return (
    <button
      onClick={addColor}
      className={isDisable ? style.btn : style.disableBtn}
    >
      Add Color
    </button>
  );
};

export default Button;
