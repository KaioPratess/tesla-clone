import Button from './otherComponents/Button';
import safetyImg from '../../../assets/modelS/modelS-img/Model-S-Safety-Hero-Desktop-Global.jpg';
import { useRef } from 'react';
import { useEffect } from 'react';

function Safety() {
  const safetySec = useRef();
  const safetyUl = useRef();
  const safetyDiv2 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        safetyDiv2.current.style.display = 'flex';
        safetyUl.current.style.display = 'flex';
      }
    });

    observer.observe(safetySec.current);
  }, []);

  return (
    <section className="safety" ref={safetySec}>
      <div className="safety-div-1">
        <div>
          <img src={safetyImg} alt="car" />
        </div>
      </div>
      <div className="safety-div-2" ref={safetyDiv2}>
        <div>
          <span className="fade-in-bottom">Safety</span>
          <h4 className="fade-in-bottom">Go Anywhere</h4>
          <p className="fade-in-bottom3">
            With up to 405 miles of estimated safety and access to the world’s
            largest and most powerful fast charging network, you’ll spend less
            time plugged in and more time on the road.{' '}
            <a href="#">Chat with a Tesla Advisor</a> to learn more about Model
            S.
          </p>
        </div>
        <Button />
      </div>
    </section>
  );
}

export default Safety;
