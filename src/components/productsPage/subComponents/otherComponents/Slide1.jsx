import { useEffect, useRef, useState } from 'react';
import interiorVid1 from '../../../../assets/modelS/modelS-videos/Model S  Tesla (1).mp4';
import interiorVid2 from '../../../../assets/modelS/modelS-videos/Model S  Tesla (2).mp4';
import interiorVid3 from '../../../../assets/modelS/modelS-videos/Model S  Tesla (3).mp4';
import interiorVid4 from '../../../../assets/modelS/modelS-videos/Model S  Tesla (4).mp4';
import interiorVid8 from '../../../../assets/modelS/modelS-videos/Model S  Tesla (8).mp4';

function Slide1() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const circles = useRef();
  const carousel = useRef();
  const list = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const video = carousel.current.childNodes[0];
          video.autoplay = true;
          video.load();
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(carousel.current);
  }, []);

  useEffect(() => {
    circles.current.childNodes.forEach((circle, index) => {
      if (index === currentVideo) circle.style.background = 'white';
      else circle.style.background = '#5c5e62';
      circle.addEventListener('click', () => {
        setCurrentVideo(index);
      });
    });

    carousel.current.childNodes.forEach((video, index) => {
      if (index === currentVideo) {
        video.classList.add('active');
        video.autoplay = true;
        video.load();
      } else video.classList.remove('active');

      video.addEventListener('ended', () => {
        if (index === carousel.current.childNodes.length - 1) {
          setCurrentVideo(0);
        } else {
          setCurrentVideo(index + 1);
        }
      });
    });

    list.current.childNodes.forEach((item, index) => {
      if (index === currentVideo) item.classList.add('active');
      else item.classList.remove('active');
    });
  }, [currentVideo]);

  return (
    <div className="slide">
      <div className="slide-carousel" ref={carousel}>
        <video src={interiorVid8} className="active  fade-in" muted={true} />
        <video src={interiorVid1} className="fade-in" muted={true} />
        <video src={interiorVid2} className="fade-in" muted={true} />
        <video src={interiorVid3} className="fade-in" muted={true} />
        <video src={interiorVid4} className="fade-in" muted={true} />
      </div>
      <div className="slide-nav">
        <div className="circles" ref={circles}>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="slide-list">
          <ul ref={list}>
            <li className="active">
              <h3>Cinematic Experience</h3>
              <p>
                A 17” touchscreen with left-right tilt offers 2200 x 1300
                resolution, true colors and exceptional responsiveness for
                gaming, movies and more.
              </p>
            </li>
            <li>
              <h3>Yoke Steering</h3>
              <p>
                A bold new approach gives you a true connection to Model S,
                offering better steering feel and unobstructed views of your
                dash and the road ahead. Tap the brake and Model S automatically
                selects the correct direction to start your trip.
              </p>
            </li>
            <li>
              <h3>Perfect Environment</h3>
              <p>
                Air vents are hidden throughout the cabin, while tri-zone
                temperature controls, ventilated seats and HEPA filtration
                deliver the perfect environment.
              </p>
            </li>
            <li>
              <h3>Redesigned Second Row</h3>
              <p>
                Seating for three adults, with extra legroom, headroom and a
                stowable armrest with integrated storage and wireless charging.
              </p>
            </li>
            <li>
              <h3>Console-Grade Gaming</h3>
              <p>
                Up to 10 teraflops of processing power unlock in-car gaming
                on-par with today’s newest consoles. Play from any seat with
                wireless controller and headset compatibility.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Slide1;
