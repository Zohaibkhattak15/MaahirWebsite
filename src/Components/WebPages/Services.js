import React from 'react';
import '../../App.css';
import SubCat from '../Cards/SubCat';
import Footer from '../Footer/Footer';
import HeaderHeading from '../Header/HeaderHeading';

export default function Services() {
  return (
    <>
      <HeaderHeading heading="Services" />
      <SubCat />
      <Footer />
    </>
  );
}