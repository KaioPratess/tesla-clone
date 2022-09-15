import { useEffect, useRef, useState } from 'react';
import Modal from './Modal';

function HomePage() {
  const [currentSec, setCurrentSec] = useState();
  const [modalInfo, setModalInfo] = useState({
    product: 'Model 3',
    cta: [
      'Order Online for ',
      <a href="#" className="modal-link" key="model3">
        Touchless Delivery
      </a>,
    ],
    btn1: 'Custom Order',
    btn2: 'Existing Inventory',
  });

  const main = useRef();
  const sec2 = useRef('');

  const goTo = () => {
    window.scrollTo({
      left: 0,
      top: sec2.current.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const product = entry.target.getAttribute('aria-label');
            setCurrentSec(product);
            setModalInfo(() => {
              switch (product) {
                case 'Solar Panels' || 'Solar Roof':
                  return {
                    product,
                    cta: 'Produce Clean Energy From Your Roof',
                    btn1: 'Order Now',
                    btn2: 'Learn More',
                    fade: true,
                  };
                case 'Accessories':
                  return {
                    product,
                    btn1: 'Shop Now',
                    fade: true,
                  };
                default:
                  return {
                    product,
                    cta: [
                      'Order Online for ',
                      <a href="#" className="modal-link" key="model3">
                        Touchless Delivery
                      </a>,
                    ],
                    btn1: 'Custom Order',
                    btn2: 'Existing Inventory',
                    fade: true,
                  };
              }
            });
            setTimeout(() => {
              setModalInfo((prev) => {
                return {
                  ...prev,
                  fade: false,
                };
              });
            }, 700);

            setTimeout(() => {
              window.scroll({
                left: 0,
                top: entry.target.offsetTop,
                behavior: 'smooth',
              });
            }, 500);
          }
        });
      },
      { threshold: 0.1 },
    );

    main.current.childNodes.forEach((sec) => {
      observer.observe(sec);
    });
  }, []);

  return (
    <main className="main" ref={main}>
      <Modal
        fade={modalInfo.fade}
        product={modalInfo.product}
        cta={modalInfo.cta}
        btn1={modalInfo.btn1}
        btn2={modalInfo.btn2}
        currentSec={currentSec}
        goTo={goTo}
      />
      <section aria-label="Model 3" className="model3-sec"></section>
      <section aria-label="Model Y" className="modelY-sec" ref={sec2}></section>
      <section aria-label="Model S" className="modelS-sec"></section>
      <section aria-label="Model X" className="modelX-sec"></section>
      <section aria-label="Solar Panels" className="solarPanels-sec"></section>
      <section aria-label="Solar Roof" className="solarRoof-sec"></section>
      <section aria-label="Accessories" className="accessories-sec"></section>
    </main>
  );
}

export default HomePage;
