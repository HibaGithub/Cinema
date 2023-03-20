import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modulesUncharted
import { Navigation } from "swiper";

// import images
import movie1 from "../../../css/image/topmovie/acream.jfif";
import movie2 from "../../../css/image/topmovie/Amsterdam_(2022_film).jpg";
import movie3 from "../../../css/image/topmovie/lely lely crocodile.jfif";
import movie4 from "../../../css/image/topmovie/black-adam.jpg";
import movie5 from "../../../css/image/topmovie/call jane.jpg";
import movie6 from "../../../css/image/topmovie/DC_League_of_Super-Pets.jpg";
import movie7 from "../../../css/image/topmovie/Il faut sauver le soldat Ryan (1998)_files.jpg";
import movie8 from "../../../css/image/topmovie/Interstellar (2014)_files.jpg";
import movie9 from "../../../css/image/topmovie/Uncharted.jpg";
import movie10 from "../../../css/image/topmovie/Terminator (1991)_files.jpg";
let movies = [
    {
        title: "Acream",
        image: movie1,
        category: "Sci-fi/horror",
        duration: "2h 10m",
        ageRating: "18+",
    },
    {
        title: "Amsterdam",
        image: movie2,
        category: "Sci-fi/Fantisy",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "lely lely crocodile",
        image: movie3,
        category: "Sci-fi/Comedy",
        duration: "2h 20m",
        ageRating: "10+",
    },
    {
        title: "black adame",
        image: movie4,
        category: "Sci-fi/Comedy",
        duration: "2h 15m",
        ageRating: "10+",
    },
    {
        title: "call me jane ",
        image: movie5,
        category: "Sci-fi/Mestery",
        duration: "1h 30m",
        ageRating: "18+",
    },
    {
        title: "DC_League_of_Super-Pets",
        image: movie6,
        category: "Sci-fi/Fantasy",
        duration: "1h 20m",
        ageRating: "15+",
    },
    {
        title: "Il faut sauver le soldat ",
        image: movie7,
        category: "Sci-fi/Action",
        duration: "1h 28m",
        ageRating: "14+",
    },
    {
        title: "Terminator",
        image: movie8,
        category: "Sci-fi/Comedy",
        duration: "2h 20m",
        ageRating: "14+",
    },
    {
        title: "Uncharted",
        image: movie9,
        category: "Sci-fi/",
        duration: "1h 28m",
        ageRating: "10+",
    },
    {
        title: "Terminator",
        image: movie10,
        category: "Sci-fi/Thriller",
        duration: "2h 00m",
        ageRating: "18+",
    },
];

export default function TopMovieSlide() {
    return (
        <div className="top-movies-section">
            <h3>TOP POPULARE WATCHED MOVIES</h3>
            <Swiper
                slidesPerView={2}
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
                    },
                }}
                modules={[Navigation]}
                className="top-movies"
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
