import { useEffect } from 'react';
import Modal from './Modal';

function HomePage() {
  return (
    <main className="main">
      <section aria-label="model3" className="model3-sec">
        <Modal
          product="Model 3"
          cta={[
            'Order Online for ',
            <a href="#" className="modal-link" key="model3">
              Touchless Delivery
            </a>,
          ]}
          btn1="Custom Order"
          btn2="Existing Inventory"
        />
      </section>
      <section aria-label="modelY" className="modelY-sec">
        <Modal
          product="Model Y"
          cta={[
            'Order Online for ',
            <a href="#" className="modal-link" key="modelY">
              Touchless Delivery
            </a>,
          ]}
          btn1="Custom Order"
          btn2="Existing Inventory"
        />
      </section>
      <section aria-label="modelS" className="modelS-sec">
        <Modal
          product="Model S"
          cta={[
            'Order Online for ',
            <a href="#" className="modal-link" key="modelS">
              Touchless Delivery
            </a>,
          ]}
          btn1="Custom Order"
          btn2="Existing Inventory"
        />
      </section>
      <section aria-label="modelX" className="modelX-sec">
        <Modal
          product="Model X"
          cta={[
            'Order Online for ',
            <a href="#" className="modal-link" key="modelX">
              Touchless Delivery
            </a>,
          ]}
          btn1="Custom Order"
          btn2="Existing Inventory"
        />
      </section>
      <section aria-label="solarPanels" className="solarPanels-sec">
        <Modal
          product="Solar Panels"
          cta={`Lowest Cost Solar Panels in America`}
          btn1="Order Now"
          btn2="Learn More"
        />
      </section>
      <section aria-label="solarRoof" className="solarRoof-sec">
        <Modal
          product="Solar Roof"
          cta={`Produce Clean Energy From Your Roof`}
          btn1="Order Now"
          btn2="Learn More"
        />
      </section>
      <section aria-label="accessories" className="accessories-sec">
        <Modal product="Accessories" btn1="Shop Now" />
      </section>
    </main>
  );
}

export default HomePage;
