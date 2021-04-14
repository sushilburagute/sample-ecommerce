import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import asset1 from "../images/asset1.jpg";
import asset2 from "../images/asset2.jpg";
import asset3 from "../images/asset3.jpg";

export const Hero = () => {
  return (
    <div className="flex h-32 px-36">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        emulateTouch
        swipeable
      >
        <div className="h-[200px] md:h-[280px] overflow-hidden">
          <img src={asset1} alt="" />
          <p>Hello1</p>
        </div>
        <div className="h-[200px] md:h-[280px] overflow-hidden">
          <img src={asset2} alt="" />
          <p>Hello3</p>
        </div>
        <div className="h-[200px] md:h-[280px] overflow-hidden">
          <img src={asset3} alt="" />
          <p>Hello2</p>
        </div>
      </Carousel>
    </div>
  );
};
