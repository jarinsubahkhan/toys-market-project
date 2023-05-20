/* eslint-disable*/
import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
    <Category></Category>
    <SectionTwo></SectionTwo>
    <SectionOne></SectionOne>       
        </div>
    );
};

export default Home;