import React from 'react';

const BookCard = ({ book }) => {
  const openWebsite = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100">
        <img src={book.image} className="card-img-top" alt={book.title} />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">by {book.author}</p>
          <p className="card-text">{book.description}</p>
          <p className="card-price"><strong>${book.price}</strong></p>
          <div className="card-buttons">
            <button className="btn btn-primary">Add to Cart</button>
            <button
              onClick={() => openWebsite(book.website)}
              className="btn btn-secondary"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
