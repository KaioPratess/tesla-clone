import { useRef } from 'react';
import { useEffect } from 'react';
import Slide2 from './otherComponents/Slide2';

function ElectricPowertrain() {
  const sec = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sec.current.childNodes[0].style.display = 'block';
          sec.current.childNodes[1].style.display = 'block';
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(sec.current);
  }, []);
  return (
    <section className="electric-powertrain" ref={sec}>
      <h2 className="fade-in-bottom2">Electric Powertrain</h2>
      <p className="fade-in-bottom2">
        Model S platforms unite powertrain and battery technologies for
        unrivaled performance, range and efficiency. New module and pack thermal
        architecture allows faster charging and gives you more power and
        endurance in all conditions.
      </p>
      <Slide2 />
      <p>* With rollout subtracted</p>
    </section>
  );
}

export default ElectricPowertrain;
