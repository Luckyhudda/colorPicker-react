import style from "./Input.module.css";
// eslint-disable-next-line react/prop-types
const Input = ({ onChangeHandler, updateValue, enterKeyHandler }) => {
  const getInput = (e) => {
    onChangeHandler(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter Color Name"
      className={style.inputField}
      onChange={getInput}
      value={updateValue}
      onKeyUp={enterKeyHandler}
    />
  );
};

export default Input;
