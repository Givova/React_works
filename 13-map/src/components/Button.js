function Button({ onClick, text }) {
  console.log("btn rendeer");
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
