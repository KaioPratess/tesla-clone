import { useEffect, useRef } from 'react';
import exteriorImg from '../../../assets/modelS/modelS-img/Model-S-Exterior-Hero-Desktop-Global.jpg';
import exteriorImg2 from '../../../assets/modelS/modelS-img/Model-S-Exterior-Grid-A-Desktop-Global.jpg';
import exteriorImg3 from '../../../assets/modelS/modelS-img/Model-S-Exterior-Grid-B-Desktop-Global.jpg';
import exteriorImg4 from '../../../assets/modelS/modelS-img/Model-S-Exterior-Grid-C-Desktop-Global.jpg';
import Button from './otherComponents/Button';

function ExteriorSec() {
  const perks = useRef();
  const extImg = useRef();
  const extDescription = useRef();

  useEffect(() => {
    const observePerks = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.childNodes[0].style.display = 'grid';
        }
      });
    });

    perks.current.childNodes.forEach((perk) => {
      observePerks.observe(perk);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          extDescription.current.style.display = 'grid';
        }
      },
      {
        threshold: 1,
      },
    );

    observer.observe(extImg.current);
  }, []);

  return (
    <section className="exterior-sec">
      <div className="exterior-img" ref={extImg}>
        <img src={exteriorImg} alt="Model-S-Performance-Hero-Desktop-LHD" />
      </div>

      <div className="desc" ref={extDescription}>
        <div className="fade-in-bottom2">
          <span>Exterior</span>
          <h2>Designed for Efficiency</h2>
        </div>
        <p className="fade-in-bottom">
          With a drag coefficient of just .208 Cd, the lowest on the planet,
          Model S is built for speed, endurance and range. Improved aerodynamics
          and a wider chassis offer more responsive performance so you can take
          corners quicker and with more confidence.
        </p>
        <Button />
      </div>

      <div className="exterior-perks" ref={perks}>
        <div className="perk-1-bg">
          <div className="perk-1">
            <div className="fade-in-bottom5">
              <strong>Relentless Performance</strong>
              <p>
                Staggered, performance wheels and tires keep the car planted and
                help transfer maximum power down to the road.
              </p>
            </div>
            <div className="fade-in-bottom4">
              <img src={exteriorImg2} alt="a" />
            </div>
          </div>
        </div>

        <div className="perk-2-bg">
          <div className="perk-2">
            <div className="fade-in-bottom4">
              <img src={exteriorImg3} alt="b" />
            </div>
            <div className="fade-in-bottom5">
              <strong>Optimized Aerodynamics</strong>
              <p>
                Attention to detail on all exterior surfaces makes Model S the
                most aerodynamic production car on Earth.
              </p>
            </div>
          </div>
        </div>

        <div className="perk-3-bg">
          <div className="perk-3">
            <div className="fade-in-bottom5">
              <strong>Refined Styling</strong>
              <p>An iconic silhouette meets refreshed, elegant proportions.</p>
            </div>
            <div className="fade-in-bottom4">
              <img src={exteriorImg4} alt="c" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExteriorSec;
