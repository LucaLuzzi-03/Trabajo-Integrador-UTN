import "./styles/carousel.css"
import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"

export const Carousel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block carrusel" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block carrusel" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block carrusel" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
