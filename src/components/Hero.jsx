import heroImage from "../images/hero-img.jpg";

export const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div>
          <h1>Food Delivered.</h1>
          <h3>At Blazing Fast Speeds</h3>
        </div>
        <div className="container-image">
          <img className="hero-image" src={heroImage} alt="heroImage" />
        </div>
      </div>
    </div>
  );
};
