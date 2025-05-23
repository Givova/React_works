function Reset({ count, resetCount, buttonStyle }) {
  return (
    count !== 0 && (
      <div>
        <button style={buttonStyle} onClick={resetCount}>
          Reset
        </button>
      </div>
    )
  );
}

export default Reset;
