import React from 'react';
import './App.css';
import Header from './components/header';
import Carousel from './components/carousel';
import BookList from './components/booklist';
import BookCard from './components/bookcard';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <BookList />
      <Footer />
    </div>
  );
};

export default App;
