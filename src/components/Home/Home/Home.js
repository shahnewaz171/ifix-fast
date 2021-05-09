import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Project></Project>
            <Testimonials></Testimonials>
            <LatestNews></LatestNews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;