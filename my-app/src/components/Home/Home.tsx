import React from 'react';
import Carousel from '../Carousel/Carousel';
import Head from '../Head/Head';
import RecommendedList from '../RecommendedList/RecommendedList';

export default function Home() {
    return (
        <>
            <Head />
            <RecommendedList coverPath="../assets/img/rhcp.jpg" alt="Red Hot Chili Peppers - By The Way" />
            <Carousel title="New episodes" />
            <Carousel title="For you!" />
        </>
    )
}