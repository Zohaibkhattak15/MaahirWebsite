import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SubCat from '../Cards/SubCat';
import AboutUs from '../AboutUs/AboutUs';


const  Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <SubCat />
      <Footer />
    </>
  );
}

export default Home;