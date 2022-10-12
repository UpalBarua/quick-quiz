import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Questions from '../components/Questions/Questions';

const QuestionsPage = () => {
  return (
    <div>
      <Navbar />
      <Questions />
      <Footer />
    </div>
  );
};

export default QuestionsPage;
