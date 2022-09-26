function Button(props) {
  return (
    <>
      <button className="btn fade-in-bottom6">
        {props.phrase ? props.phrase : 'Order Now'}
      </button>
    </>
  );
}

export default Button;
