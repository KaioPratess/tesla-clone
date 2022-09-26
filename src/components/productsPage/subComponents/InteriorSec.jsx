import { useEffect, useRef } from 'react';
import Slide1 from './otherComponents/Slide1';
import interiorImg1 from '../../../assets/modelS/modelS-img/MS-Interior-Hero-Desktop.jpg';
import interiorImg2 from '../../../assets/modelS/modelS-img/MS-Interior-Grid-A-Desktop.jpg';
import interiorImg3 from '../../../assets/modelS/modelS-img/MS-Interior-Grid-D-Desktop.jpg';
import interiorVid from '../../../assets/modelS/modelS-videos/Model S  Tesla.mp4';
import interiorVid5 from '../../../assets/modelS/modelS-videos/Model S  Tesla (5).mp4';
import interiorVid6 from '../../../assets/modelS/modelS-videos/Model S  Tesla (6).mp4';
import interiorVid7 from '../../../assets/modelS/modelS-videos/Model S  Tesla (7).mp4';
import interiorVid9 from '../../../assets/modelS/modelS-videos/Model S  Tesla (9).mp4';
import interiorVid11 from '../../../assets/modelS/modelS-videos/Model S  Tesla (11).mp4';

function InteriorSec() {
  const title = useRef();
  const h2 = useRef();
  const perks = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) h2.current.classList.add('show');
      },
      {
        threshold: 1,
      },
    );

    observer.observe(title.current);

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
  }, []);

  return (
    <section className="interior-sec">
      <div className="interior-sec-title" ref={title}>
        <h2 className="fade-in-bottom9" ref={h2}>
          Interior of the Future
        </h2>
      </div>
      <div className="interior-hero">
        <img src={interiorImg1} alt="Interior Hero" />
      </div>

      <Slide1 />

      <div className="interior-perks" ref={perks}>
        <div className="perk-1-bg">
          <div className="perk-1">
            <div className="fade-in-bottom4">
              <img src={interiorImg2} alt="Connection" />
            </div>
            <div className="fade-in-bottom5">
              <strong>Stay Connected</strong>
              <p>
                Instantly connect with multi-device Bluetooth, or fast charge
                devices with wireless and 36-watt USB-C charging.
              </p>
            </div>
          </div>
        </div>

        <div className="perk-2-bg">
          <div className="perk-2">
            <div className="fade-in-bottom5">
              <strong>Immersive Sound</strong>
              <p>
                A 22-speaker, 960-watt audio system with Active Road Noise
                Reduction offers immersive listening and studio-grade sound
                quality.
              </p>
            </div>
            <div className="fade-in-bottom4">
              <video src={interiorVid9} muted={true} autoPlay={true}></video>
            </div>
          </div>
        </div>

        <div className="perk-3-bg">
          <div className="perk-3">
            <div className="fade-in-bottom4">
              <img src={interiorImg3} alt="Trunk" />
            </div>
            <div className="fade-in-bottom5">
              <strong>Room for Everything</strong>
              <p>
                With front and rear trunks and fold-flat seats you can fit your
                bike without taking the wheel off—and your luggage too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteriorSec;
