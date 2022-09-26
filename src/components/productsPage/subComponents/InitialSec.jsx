import Button from './otherComponents/Button';

function InitialSec() {
  return (
    <section className="initial-sec">
      <div>
        <h1>Model S</h1>
        <p>Plaid</p>
      </div>
      <div>
        <ul>
          <li className="fade-in-bottom2">
            396<span>mi</span>
            <p>Range (EPA est.)</p>
          </li>
          <li className="fade-in-bottom3">
            1.99<span>s</span>
            <p>0-60 mph*</p>
          </li>
          <li className="fade-in-bottom4">
            200<span>mph</span>
            <p>Top Speed†</p>
          </li>
          <li className="fade-in-bottom5">
            1,020<span>hp</span>
            <p>Peak Power</p>
          </li>
        </ul>
        <Button />
      </div>
    </section>
  );
}

export default InitialSec;
