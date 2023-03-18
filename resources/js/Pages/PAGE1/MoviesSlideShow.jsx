import React, { useRef, useState } from "react";

// Font awwesome library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faLock,
    faVideo,
    faClock,
    faFilm,
} from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import movie1 from '../../../css/image/slide1.png'
import movie2 from '../../../css/image/slide2.png'

let movies = [
    {
        title: "The Matrix Resurrections 3",
        image: movie1,
    },
    {
        title: "Titanic",
        image: movie2,
    },
];
export default function Slideshow() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="Slideshow-movies"
            >
                {movies.map((movie) => (
                    <SwiperSlide>
                        <div class="shadow"></div>
                        <img src={movie.image} alt="movie-poster" />
                        <div class="content">
                            <div class="label">
                                <FontAwesomeIcon icon={faVideo} />
                                <p class="film-status">Now in cinema</p>
                            </div>
                            <div class="title">
                                <h1>{ movie.title }</h1>
                            </div>
                            <div class="detail">
                                <div class="categorie">
                                    <FontAwesomeIcon icon={faFilm} />
                                    <p>Sci-fi/Action</p>
                                </div>
                                <div class="duration">
                                    <FontAwesomeIcon icon={faClock} />
                                    <p>2h 28m</p>
                                </div>
                                <div class="age">
                                    <FontAwesomeIcon icon={faUser} />
                                    <p>18+</p>
                                </div>
                            </div>
                            <button onclick="location.href='./index.html'">
                                Get your ticket
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
