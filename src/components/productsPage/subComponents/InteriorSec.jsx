import Slide1 from './otherComponents/Slide1';
import interiorImg1 from '../../../assets/modelS/modelS-img/MS-Interior-Hero-Desktop.jpg';
import interiorVid from '../../../assets/modelS/modelS-videos/Model S  Tesla.mp4';
import interiorVid5 from '../../../assets/modelS/modelS-videos/Model S  Tesla (5).mp4';
import interiorVid6 from '../../../assets/modelS/modelS-videos/Model S  Tesla (6).mp4';
import interiorVid7 from '../../../assets/modelS/modelS-videos/Model S  Tesla (7).mp4';
import interiorVid9 from '../../../assets/modelS/modelS-videos/Model S  Tesla (9).mp4';
import interiorVid10 from '../../../assets/modelS/modelS-videos/Model S  Tesla (10).mp4';
import interiorVid11 from '../../../assets/modelS/modelS-videos/Model S  Tesla (11).mp4';

function InteriorSec() {
  return (
    <section className="interior-sec">
      <div className="interior-sec-title">
        <h2 className="fade-in-bottom3">Interior of the Future</h2>
      </div>
      <div>
        <img src={interiorImg1} alt="Interior Hero" />
      </div>
      <Slide1 />
    </section>
  );
}

export default InteriorSec;
