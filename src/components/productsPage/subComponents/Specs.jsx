import { useEffect, useState, useRef } from 'react';
import SpecsImg1 from '../../../assets/modelS/modelS-img/Model-S-Specs-Hero-Desktop-LHD.jpg';

function Specs() {
  const list1 = useRef();
  const list2 = useRef();
  const btn1 = useRef();
  const btn2 = useRef();
  const [currentModel, setCurrentModel] = useState('model-s-plaid');

  useEffect(() => {
    const plaid = list1.current.getAttribute('data-model');
    if (currentModel === plaid) {
      btn1.current.style.border = '3px solid white';
      btn2.current.style.border = '3px solid #222';
      list1.current.style.display = 'flex';
      list2.current.style.display = 'none';
    } else {
      btn1.current.style.border = '3px solid #222';
      btn2.current.style.border = '3px solid white';
      list2.current.style.display = 'flex';
      list1.current.style.display = 'none';
    }
  }, [currentModel]);

  return (
    <section className="specs-sec">
      <div className="specs-img">
        <img src={SpecsImg1} alt="Car" />
      </div>
      <div className="specs-desc">
        <h3>
          Model S <span className="specs-span">Specs</span>
        </h3>
        <button
          type="button"
          onClick={() => setCurrentModel('model-s-plaid')}
          ref={btn1}
        >
          Model S Plaid
        </button>
        <button
          type="button"
          onClick={() => setCurrentModel('model-s')}
          ref={btn2}
        >
          Model S
        </button>
        <div className="list-1" ref={list1} data-model="model-s-plaid">
          <div>
            <ul>
              <li>
                <strong>Range (EPA est.)</strong>
                <span>396 mi</span>
              </li>
              <li>
                <strong>1/4 Mile</strong>
                <span>9.23@155 mph trap speed</span>
              </li>
              <li>
                <strong>Peak Power</strong>
                <span>1,020 hp</span>
              </li>
              <li>
                <strong>Wheels</strong>
                <span>19" or 21"</span>
              </li>
              <li>
                <strong>Cargo</strong>
                <span>28 cu ft</span>
              </li>
              <li>
                <strong>Weight</strong>
                <span>4,766 lbs</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <strong>*Acceleration</strong>
                <span>
                  1.99 s 0-60 mph
                  <i>with rollout subtracted</i>
                </span>
              </li>
              <li>
                <strong>†Top Speed</strong>
                <span>200 mph</span>
                <i>when equipped with paid hardware upgrades</i>
              </li>
              <li>
                <strong>Drag Coefficient</strong>
                <span>0.208 Cd</span>
              </li>
              <li>
                <strong>Powertrain</strong>
                <span>Tri Motor</span>
              </li>
              <li>
                <strong>Supercharging Max</strong>
                <span>250 kW</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="list-2" ref={list2} data-model="model-s">
          <div>
            <ul>
              <li>
                <strong>Range (EPA est.)</strong>
                <span>405 mi</span>
              </li>
              <li>
                <strong>Peak Power</strong>
                <span>670 hp</span>
              </li>
              <li>
                <strong>Wheels</strong>
                <span>19" or 21"</span>
              </li>
              <li>
                <strong>Cargo</strong>
                <span>28 cu ft</span>
              </li>
              <li>
                <strong>*Acceleration</strong>
                <span>3.1 s 0-60 mph</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <strong>†Top Speed</strong>
                <span>149 mph</span>
              </li>
              <li>
                <strong>Drag Coefficient</strong>
                <span>0.208 Cd</span>
              </li>
              <li>
                <strong>Weight</strong>
                <span>4,561 lbs</span>
              </li>
              <li>
                <strong>Powertrain</strong>
                <span>Dual Motor</span>
              </li>
              <li>
                <strong>Supercharging Max</strong>
                <span>250 kW</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specs;
