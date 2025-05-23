import UserContext from "../context/UserContext";
import { useContext } from "react";

function UserInfo() {
  const { userName } = useContext(UserContext);

  return (
    // <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
    // Анологично consumer можно использовать хук useContext
    <h1>{userName}</h1>
  );
}

export default UserInfo;
