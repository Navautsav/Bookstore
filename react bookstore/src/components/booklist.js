import React from 'react';
import BookCard from './bookcard';

const books = [
  {
    id: 1,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A novel about the serious issues of rape and racial inequality.',
    price: 14.99,
    website: 'https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0061120081'
  },
  {
    id: 2,
    image: 'https://images-na.ssl-images-amazon.com/images/I/91zrK-hB4LL.jpg',
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian social science fiction novel and cautionary tale.',
    price: 19.99,
    website: 'https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934'
  },
  {
    id: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/91S4xk70f0L.jpg',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A story of the young and mysterious millionaire Jay Gatsby.',
    price: 10.99,
    website: 'https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567'
  },
  {
    id: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL.jpg',
    title: 'Moby Dick',
    author: 'Herman Melville',
    description: 'The saga of Captain Ahab and his relentless pursuit of Moby Dick.',
    price: 11.99,
    website: 'https://www.amazon.com/Moby-Dick-Herman-Melville/dp/1503280780'
  },
  {
    id: 5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL.jpg',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'A romantic novel of manners written by Jane Austen.',
    price: 12.99,
    website: 'https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/1503290565'
  },
  {
    id: 6,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71Q1Iu4suSL.jpg',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'A story about the events leading up to the nervous breakdown of a teenage boy.',
    price: 9.99,
    website: 'https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487'
  },
  {
    id: 7,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'A fantasy novel and children\'s book by English author J.R.R. Tolkien.',
    price: 14.49,
    website: 'https://www.amazon.com/Hobbit-J-R-R-Tolkien/dp/054792822X'
  },
  {
    id: 8,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    description: 'The first novel in the Harry Potter series and Rowling\'s debut novel.',
    price: 24.99,
    website: 'https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X'
  },
  {
    id: 9,
    image: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'A novel about a young Andalusian shepherd on his journey to the pyramids of Egypt.',
    price: 16.99,
    website: 'https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005'
  },
  {
    id: 10,
    image: 'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    description: 'A dystopian social science fiction novel by English author Aldous Huxley.',
    price: 18.99,
    website: 'https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523'
  },
  {
    id: 11,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg',
    title: 'The Book Thief',
    author: 'Markus Zusak',
    description: 'A historical novel that takes place during World War II in Nazi Germany.',
    price: 13.99,
    website: 'https://www.amazon.com/Book-Thief-Markus-Zusak/dp/0375842209'
  },
  {
    id: 12,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg',
    title: 'The Road',
    author: 'Cormac McCarthy',
    description: 'A novel that tells the story of a father and son journeying through a post-apocalyptic America.',
    price: 15.99,
    website: 'https://www.amazon.com/Road-Cormac-McCarthy/dp/0307387895'
  }
];

const BookList = () => {
  return (
    <div className="container">
      <div className="row">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
