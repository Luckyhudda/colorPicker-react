import { useState } from "react";
import ColorBox from "../ColorBox/ColorBox";
import ColorList from "../ColorList/ColorList";
import Input from "../Input/Input";
import Button from "../Button/Button";
import style from "./ColorPicker.module.css";
import { colorsFamily, hexColor } from "../../service/colorsPackage";
const ColorPicker = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState(["gold", "gray", "blue", "skyblue"]);
  const [boxColor, setBoxColor] = useState(color[3]);
  const [isDisable, setIsDisable] = useState(false);
  const aColor = [...colorsFamily];
  // const hexColor = ^#[0-9a-fA-F]{6}

  const updateText = (onChangeValue) => {
    onChangeValue ? setIsDisable(true) : setIsDisable(false);
    setText(onChangeValue);
  };

  const updateColor = () => {
    setIsDisable(false);
    let finalColor = text.toUpperCase();

    if (finalColor && finalColor.trim()) {
      let result = aColor.some((el) => el.name == finalColor || hexColor(text));
      if (result) {
        setBoxColor(finalColor);
        let colors = [...color];
        if (colors[colors.length - 1] !== finalColor) {
          colors.push(finalColor);
          setColor(colors);
        }
      }
      setText("");
    }
  };
  //  Enter Key
  const clickEnter = (e) => {
    if (e.key === "Enter") {
      updateColor();
    }
  };

  const updateBoxColor = (color) => {
    setBoxColor(color);
  };
  return (
    <>
      <div className={style.inputBox}>
        <Input
          onChangeHandler={updateText}
          updateValue={text}
          enterKeyHandler={clickEnter}
        />
        <Button onClickHandler={updateColor} isDisable={isDisable} />
      </div>
      <ColorBox stylesheet={{ backgroundColor: boxColor }} />
      <ColorList displayColors={color} clickOnList={updateBoxColor} />
    </>
  );
};

export default ColorPicker;
