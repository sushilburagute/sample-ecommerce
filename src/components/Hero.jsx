import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import asset1 from "../images/asset1.jpg";
import asset2 from "../images/asset2.jpg";
import asset3 from "../images/asset3.jpg";

export const Hero = () => {
  return (
    <div className="flex h-32 py-16 px-36">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        emulateTouch
        swipeable
        stopOnHover
      >
        <div className="overflow-hidden h-96">
          <img
            src={asset1}
            alt=""
            className="object-cover object-center h-full max-w-full"
          />
          <p>Hello1</p>
        </div>
        <div className="overflow-hidden h-96">
          <img
            src={asset2}
            alt=""
            className="object-cover object-center h-full max-w-full"
          />
          <p>Hello3</p>
        </div>
        <div className="overflow-hidden h-96">
          <img
            src={asset3}
            alt=""
            className="object-cover object-center h-full max-w-full"
          />
          <p>Hello2</p>
        </div>
      </Carousel>
    </div>
  );
};

// can optimize this code better
