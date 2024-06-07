import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg" className="d-block w-100" alt="To Kill a Mockingbird"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>To Kill a Mockingbird</h5>
            <p>A novel about the serious issues of rape and racial inequality.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images-na.ssl-images-amazon.com/images/I/71Q1Iu4suSL.jpg" className="d-block w-100" alt="The Catcher in the Rye"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>The Catcher in the Rye</h5>
            <p>A story about the events leading up to the nervous breakdown of a teenage boy.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL.jpg" className="d-block w-100" alt="Pride and Prejudice"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Pride and Prejudice</h5>
            <p>A romantic novel of manners written by Jane Austen.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
