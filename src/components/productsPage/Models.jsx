import InitialSec from './subComponents/InitialSec';
import InteriorSec from './subComponents/InteriorSec';
import ElectricPowertrain from './subComponents/ElectricPowertrain';
import Divisor from './subComponents/Divisor';
import ExteriorSec from './subComponents/ExteriorSec';
import Range from './subComponents/Range';
import Travel from './subComponents/Travel';
import Safety from './subComponents/Safety';
import Autopilot from './subComponents/Autopilot';
import Features from './subComponents/Features';
import Specs from './subComponents/Specs';
import FinalSec from './subComponents/FinalSec';

function Models() {
  return (
    <section className="model" aria-label="model">
      <InitialSec />
      <InteriorSec />
      <Divisor />
      <ElectricPowertrain />
      <ExteriorSec />
      <Range />
      <Travel />
      <Safety />
      <Autopilot />
      <Features />
      <Specs />
      <FinalSec />
      <div className="disclaimer">
        <p>
          Certain high data usage vehicle features require at least Standard
          Connectivity, including maps, navigation and voice commands. Access to
          features that use cellular data and third-party licenses are subject
          to change. Learn more about Standard Connectivity and any limitations.
        </p>
      </div>
    </section>
  );
}

export default Models;
