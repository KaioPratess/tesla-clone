import Button from './otherComponents/Button';
import finalSecImg from '../../../assets/modelS/modelS-img/Model-S-Order-Hero-Desktop-Mobile-Global.jpg';

function FinalSec() {
  return (
    <section className="final-sec">
      <div>
        <h2>Model S</h2>
        <Button />
        <Button phrase={'Compare'} />
      </div>
      <div className="final-sec-img">
        <img src={finalSecImg} alt="Model" />
      </div>
    </section>
  );
}

export default FinalSec;
