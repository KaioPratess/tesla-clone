import Button from './otherComponents/Button';
import interiorVid10 from '../../../assets/modelS/modelS-videos/Model S  Tesla (10).mp4';
import { useRef } from 'react';
import { useEffect } from 'react';

function Range() {
  const rangeSec = useRef();
  const rangeUl = useRef();
  const rangeDiv2 = useRef();
  const rangeVideo = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        rangeDiv2.current.style.display = 'flex';
        rangeUl.current.style.display = 'flex';
        rangeVideo.current.autoplay = true;
        rangeVideo.current.loop = true;
        rangeVideo.current.load();
      }
    });

    observer.observe(rangeSec.current);
  }, []);

  return (
    <section className="range" ref={rangeSec}>
      <div className="range-div-1">
        <div>
          <video src={interiorVid10} ref={rangeVideo} muted={true}></video>
        </div>
        <div>
          <ul ref={rangeUl}>
            <li className="fade-in-bottom4">
              405<span>mi</span>
              <p>
                Go anywhere with up to 405 miles of estimated range on a single
                charge
              </p>
            </li>
            <li className="fade-in-bottom5">
              15<span>min</span>
              <p>
                Recharge up to 200 miles in 15 minutes at Supercharger locations
              </p>
            </li>
            <li className="fade-in-bottom6">
              35,000<span>+</span>
              <p>Superchargers placed along popular routes</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="range-div-2" ref={rangeDiv2}>
        <div>
          <span className="fade-in-bottom">Range</span>
          <h4 className="fade-in-bottom">Go Anywhere</h4>
          <p className="fade-in-bottom3">
            With up to 405 miles of estimated range and access to the world’s
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

export default Range;
