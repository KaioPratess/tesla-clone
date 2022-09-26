import { useRef, useState, useEffect } from 'react';
import modelSimg1 from '../../../../assets/modelS/modelS-img/model-s-performance-dual-motor-desktop_carousel-new.jpg';
import modelSimg2 from '../../../../assets/modelS/modelS-img/model-s-performance-tri-motor-desktop_carousel-new.jpg';

function Slide2() {
  const [currentImg, setCurrentImg] = useState(0);
  const images = useRef();
  const models = useRef();

  useEffect(() => {
    images.current.childNodes.forEach((img, index) => {
      if (index === currentImg) img.classList.add('show');
      else img.classList.remove('show');
    });

    models.current.childNodes.forEach((model, index) => {
      if (index === currentImg) {
        model.classList.add('show');
        model.childNodes.forEach((el) => {
          el.classList.add('show');
          if (el.childNodes.length > 1) {
            el.childNodes.forEach((subEl) => {
              subEl.classList.add('show');
              subEl.childNodes[2].classList.add('show');
            });
          }
        });
      } else {
        model.classList.remove('show');
        model.childNodes.forEach((el) => {
          if (el.childNodes.length > 1) {
            el.childNodes.forEach((subEl) => {
              subEl.classList.remove('show');
              subEl.childNodes[2].classList.remove('show');
            });
          }
          el.classList.remove('show');
        });
      }
    });
  }, [currentImg]);

  useEffect(() => {
    setInterval(() => {
      if (currentImg === 0) setCurrentImg(1);
      else setCurrentImg(0);
    }, 4000);
  }, []);

  return (
    <div className="slide2">
      <div className="slide2-img" ref={images}>
        <img src={modelSimg1} className="show fade-in" alt="Dual Motor" />
        <img src={modelSimg2} alt="Tri Motor" className="fade-in" />
      </div>
      <div className="slide2-models" ref={models}>
        <div className="model1" onClick={() => setCurrentImg(0)}>
          <h4>Model S</h4>
          <p>
            Dual Motor All-Wheel Drive unlocks more range than any other vehicle
            in our current lineup, with insane power and maximum control.
          </p>
          <ul>
            <li>
              3.1 <span>s</span>
              <p>0-60 mph</p>
            </li>
            <li>
              405 <span>mi</span>
              <p>Range (Epa est.)</p>
            </li>
            <li>
              670 <span>hp</span>
              <p>Peak Power</p>
            </li>
          </ul>
        </div>
        <div className="model2" onClick={() => setCurrentImg(1)}>
          <h4>Model S</h4>
          <p>
            Dual Motor All-Wheel Drive unlocks more range than any other vehicle
            in our current lineup, with insane power and maximum control.
          </p>
          <ul>
            <li>
              3.1 <span>s</span>
              <p>0-60 mph</p>
            </li>
            <li>
              405 <span>mi</span>
              <p>Range (Epa est.)</p>
            </li>
            <li>
              670 <span>hp</span>
              <p>Peak Power</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Slide2;
