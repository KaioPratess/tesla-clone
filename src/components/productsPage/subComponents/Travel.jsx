import Slide3 from './otherComponents/Slide3';
import Button from './otherComponents/Button';

const Travel = () => {
  return (
    <section className="travel-sec">
      <h3>Freedom to Travel</h3>
      <p>
        Enter a destination on your touchscreen and Trip Planner will
        automatically calculate your route with Superchargers along the way.
      </p>
      <Slide3 />
      <Button phrase="Learn More" />
    </section>
  );
};

export default Travel;
