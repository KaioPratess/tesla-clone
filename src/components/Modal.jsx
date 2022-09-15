import { useEffect, useRef } from 'react';
import ArrowDown from './ArrowDown';

function Modal(props) {
  const p = useRef();
  const btn = useRef();
  const modal = useRef();

  useEffect(() => {
    if (props.currentSec === 'Solar Roof') {
      p.current.classList.remove('fade-in-bottom2');
      btn.current.classList.remove('fade-in-right');
    }
  }, [props.currentSec]);

  useEffect(() => {
    if (props.fade) {
      modal.current.style.opacity = '0';
    } else {
      modal.current.style.opacity = '1';
    }
    console.log(props.fade);
  }, [props.fade]);

  return (
    <div className="home-modal" ref={modal}>
      <div>
        <h1 className="fade-in-bottom">{props.product}</h1>
        {props.cta && (
          <p className="fade-in-bottom2" ref={p}>
            {props.cta}
          </p>
        )}
      </div>
      <div>
        <button type="button" className="home-btn1 fade-in-left">
          {props.btn1}
        </button>
        {props.btn2 && (
          <button type="button" className="home-btn2 fade-in-right" ref={btn}>
            {props.btn2}
          </button>
        )}
      </div>
      <ArrowDown currentSec={props.currentSec} goTo={props.goTo} />
    </div>
  );
}

export default Modal;
