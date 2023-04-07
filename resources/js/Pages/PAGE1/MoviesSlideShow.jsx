import React, { useRef, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
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
import movie3 from '../../../css/image/slidshow/1.jpg'
import movie4 from '../../../css/image/slidshow/2.jpg'
import movie5 from '../../../css/image/slidshow/3.jpg'
import movie6 from '../../../css/image/slidshow/4.jpg'


let movies = [
    {
        title: "The Matrix Resurrections 1",
        image: movie1,
    },
    {
        title: "Titanic",
        image: movie2,
    },
    {
        title: "The Pale Blue Eye ",
        image: movie3,
    },
    {
        title: "Vaincre ou mourir",
        image: movie4,
    },
    {
        title: "Tirailleurs",
        image: movie5,
    },
    {
        title: "Le Pire Voisin au monde ",
        image: movie6,
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
                                <h1>{movie.title}</h1>
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
                            < Link href="/tecket" >  <button class="ButtonTecket" >
                                Get your ticket
                            </button></Link>
                            
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
