import { useRef, useEffect } from 'react';
import Button from './otherComponents/Button';
import autoPilotImg1 from '../../../assets/modelS/modelS-img/Autopilot-Hero-Vision-Desktop.jpg';
import autoPilotImg2 from '../../../assets/modelS/modelS-img/tesla-vision.png';

const Autopilot = () => {
  const autoDesc = useRef();
  const autoUl = useRef();
  const autopilotSec = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          autoUl.current.style.display = 'flex';
          autoDesc.current.style.display = 'grid';
        }
      },
      {
        threshold: 1,
      },
    );

    observer.observe(autopilotSec.current);
  });

  return (
    <section className="autopilot-sec" ref={autopilotSec}>
      <div className="autopilot-div-1">
        <div>
          <img src={autoPilotImg1} alt="" />
        </div>
        <div>
          <ul ref={autoUl}>
            <li className="fade-in-bottom3">
              360°
              <p>
                Rear, side and forward-facing cameras provide maximum visibility
              </p>
            </li>
            <li className="fade-in-bottom4">
              250<span>m</span>
              <p>Powerful visual processing at up to 250 meters of range</p>
            </li>
            <li className="fade-in-bottom5">
              <div className="tesla-vision">
                <img src={autoPilotImg2} alt="Tesla Vision" />
              </div>
              <p>
                Tesla Vision detects nearby cars, helps prevent potential
                collisions and assists with parking
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div ref={autoDesc} className="autopilot-div-2">
        <div className="fade-in-bottom2">
          <span>Autopilot</span>
          <h2>Future of Driving</h2>
        </div>
        <p className="fade-in-bottom">
          Autopilot enables your car to steer, accelerate and brake
          automatically within its lane under your active supervision, assisting
          with the most burdensome parts of driving. With over-the-air software
          updates, the latest enhancements are available instantly.{' '}
          <a href="#">Chat with a Tesla Advisor</a> to learn more about Model S.
          Autopilot Future of Driving Order Now
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Autopilot;
