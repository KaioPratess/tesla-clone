import { useEffect, useRef } from 'react';
import divisorImg1 from '../../../assets/modelS/modelS-img/Model-S-Performance-Hero-Desktop-LHD.jpg';
import Button from './otherComponents/Button';

function Divisor() {
  const img = useRef();
  const ul = useRef();
  const description = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ul.current.style.display = 'flex';
          description.current.style.display = 'grid';
        }
      },
      {
        threshold: 1,
      },
    );

    observer.observe(img.current);
  }, []);

  return (
    <div className="divisor">
      <div>
        <div className="divisor-img" ref={img}>
          <img src={divisorImg1} alt="Model-S-Performance-Hero-Desktop-LHD" />
        </div>
        <div>
          <ul ref={ul}>
            <li className="fade-in-bottom3">
              1,020<span>hp</span>
              <p>Peak Power</p>
            </li>
            <li className="fade-in-bottom4">
              9.23<span>s</span>
              <p>@155 mph 1/4 mile</p>
            </li>
            <li className="fade-in-bottom5">
              1.99<span>s</span>
              <p>0-60 mph*</p>
            </li>
          </ul>
        </div>
      </div>

      <div ref={description}>
        <div className="fade-in-bottom2">
          <span>Plaid</span>
          <h2>Beyond Ludicrous</h2>
        </div>
        <p className="fade-in-bottom">
          Model S Plaid has the quickest acceleration of any vehicle in
          production. Updated battery architecture for all Model S trims enables
          back-to-back track runs without performance degradation. Chat with a
          Tesla Advisor to learn more about Model S.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Divisor;
