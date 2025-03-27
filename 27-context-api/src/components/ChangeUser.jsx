import UserContext from "../context/UserContext";
import { useContext, useState } from "react";

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext);
  const [inputName, setInputName] = useState();

  function handleInputChange(e) {
    setInputName(e.target.value);
  }

  function handleButtonClick() {
    if (inputName.trim()) {
      // Проверка на пустую строку
      changeUserName(inputName); // Устанавливаем новое имя из input
      setInputName(""); // Очищаем поле ввода
    }
  }

  return (
    <>
      <input
        type="text"
        value={inputName}
        onChange={handleInputChange}
        placeholder="Введите имя пользователя"
      ></input>
      <button onClick={handleButtonClick}>
        {/* // onClick={() => changeUserName(userName === "Ilya" ? "Kira" : "Ilya")} */}
        Change user
      </button>
    </>
  );
}

export default ChangeUser;
