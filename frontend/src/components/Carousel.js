import React from 'react';

function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            style={{ maxWidth: "100%", height: "400px", objectFit: "cover" }}
            src="https://media.istockphoto.com/id/1296190312/photo/shopping-cart-with-boxes-white-laptop-on-yellow-backround-internet-online-shopping-concept.webp?b=1&s=612x612&w=0&k=20&c=J9PANiS8B6Dc2DHQH7-z98WJubKIS0CB043k2TviV4M="
            className="d-block w-100"
            alt="Computer service concept"
          />
        </div>
        <div className="carousel-item">
          <img
            style={{ maxWidth: "100%", height: "400px", objectFit: "cover" }}
            src="https://media.istockphoto.com/id/831640620/photo/e-commerce-concept.webp?b=1&s=612x612&w=0&k=20&c=BNrzzEYwfXum3WeyJ6NTwS_kpFhtp33YCZ4PwbREtIY="
            className="d-block w-100"
            alt="E-commerce concept"
          />
        </div>
        <div className="carousel-item">
          <img
            style={{ maxWidth: "100%", height: "400px", objectFit: "cover" }}
            src="https://media.istockphoto.com/id/839427770/photo/online-shopping-concept-in-color-background.webp?b=1&s=612x612&w=0&k=20&c=0XaSArO187Ak4lum21Lzy9vbguSbVLv0RuLkqzDhdcY="
            className="d-block w-100"
            alt="Online shopping concept"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
