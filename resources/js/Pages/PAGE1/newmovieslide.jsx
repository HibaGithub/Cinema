import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// import images
import movie1 from '../../../css/image/slide1.png'
import movie2 from '../../../css/image/slide2.png'
import movie3 from '../../../css/image/slide1.png'
import movie4 from '../../../css/image/slide2.png'
import movie5 from '../../../css/image/slide1.png'
import movie6 from '../../../css/image/slide2.png'
import movie7 from '../../../css/image/slide1.png'
import movie8 from '../../../css/image/slide2.png'
import movie9 from '../../../css/image/slide1.png'

let movies = [
    {
        title: "Black Adam",
        image: movie1,
        category: "Sci-fi/Action",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "Black Adam",
        image: movie2,
        category: "Sci-fi/Action",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "Black Adam",
        image: movie3,
        category: "Sci-fi/Action",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "Black Adam",
        image: movie4,
        category: "Sci-fi/Action",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "Black Adam",
        image: movie5,
        category: "Sci-fi/Action",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "Black Adam",
        image: movie6,
        category: "Sci-fi/Action",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "Black Adam",
        image: movie7,
        category: "Sci-fi/Action",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "Black Adam",
        image: movie8,
        category: "Sci-fi/Action",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "Black Adam",
        image: movie9,
        category: "Sci-fi/Action",
        duration: "2h 28m",
        ageRating: "13+",
    },
];


export default function NewMovieSlide() {
    return (
        <div className="new-movies-section">
            <h3>NEW IN CINEMA</h3>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    }
                }}
                modules={[Navigation]}
                className="new-movies"
            >
                             {movies.map((movie) => (
                    <SwiperSlide>
                        <div className="film-poster">
                            <div class="poster">
                                <img alt="" src={movie.image} />
                            </div>

                            <div class="detail">
                                <h2>{movie.title}</h2>

                                <p>
                                    <span>{movie.category} </span>
                                    <span>{movie.duration} </span>
                                    <span> {movie.ageRating} </span>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}


