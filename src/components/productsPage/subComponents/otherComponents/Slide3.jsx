import gif1 from '../../../../assets/modelS/modelS-img/sanfrancisco.gif';
import gif2 from '../../../../assets/modelS/modelS-img/berkeley.gif';
import gif3 from '../../../../assets/modelS/modelS-img/ny-boston.gif';
import gif4 from '../../../../assets/modelS/modelS-img/fort-lauderdale.gif';
import { useState, useRef, useEffect } from 'react';

const Slide3 = () => {
  const imgDiv = useRef();
  const slide3Nav = useRef();
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    imgDiv.current.childNodes.forEach((img, index) => {
      if (index === currentImg) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });

    slide3Nav.current.childNodes.forEach((div, index) => {
      if (index === currentImg) {
        div.classList.add('active');
      } else {
        div.classList.remove('active');
      }
    });
  }, [currentImg]);

  return (
    <div className="slide3">
      <div className="slide3-img" ref={imgDiv}>
        <img
          src={gif1}
          alt="San Francisco to Los Angeles"
          className="active fade-in"
        />
        <img src={gif2} alt="Berkeley to Lake Tahoe" className="fade-in" />
        <img src={gif3} alt="Manhattan to Boston" className="fade-in" />
        <img src={gif4} alt="Fort Lauderdale to Orlando" className="fade-in" />
      </div>
      <div className="slide3-nav" ref={slide3Nav}>
        <div onClick={() => setCurrentImg(0)}>
          <p>San Francisco to Los Angeles</p>
          <span>383 miles</span>
        </div>
        <div onClick={() => setCurrentImg(1)}>
          <p>Berkeley to Lake Tahoe</p>
          <span>178 miles</span>
        </div>
        <div onClick={() => setCurrentImg(2)}>
          <p>Manhattan to Boston</p>
          <span>211 miles</span>
        </div>
        <div onClick={() => setCurrentImg(3)}>
          <p>Fort Lauderdale to Orlando</p>
          <span>195 miles</span>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
