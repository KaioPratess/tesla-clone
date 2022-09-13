import ArrowDown from './ArrowDown';

function Modal(props) {
  return (
    <div className="home-modal">
      <div>
        <h1 className="fade-in-bottom">{props.product}</h1>
        {props.cta && <p className="fade-in-bottom2">{props.cta}</p>}
      </div>
      <div>
        <button type="button" className="home-btn1 fade-in-left">
          {props.btn1}
        </button>
        {props.btn2 && (
          <button type="button" className="home-btn2 fade-in-right">
            {props.btn2}
          </button>
        )}
      </div>
      <ArrowDown />
    </div>
  );
}

export default Modal;
