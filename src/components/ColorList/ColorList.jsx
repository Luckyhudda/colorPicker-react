import style from "./ColorList.module.css";
// eslint-disable-next-line react/prop-types
const ColorList = ({ displayColors, clickOnList }) => {
  // eslint-disable-next-line react/prop-types
  const finalList = displayColors.map((color, index) => {
    return (
      <li
        key={index}
        className={style.colorList}
        style={{ backgroundColor: color }}
        onClick={() => clickOnList(color)}
      ></li>
    );
  });
  return (
    <ul className={style.lists}>
      {finalList}
      {/* <li className={style.colorList}></li>
       */}
    </ul>
  );
};
export default ColorList;
