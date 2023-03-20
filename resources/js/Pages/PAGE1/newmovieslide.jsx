import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// import images
import movie1 from "../../../css/image/newmivie/A Night Without Tears (2023)_files.jpg";
import movie2 from "../../../css/image/newmivie/From the Ashes (2023).jpg";
import movie3 from "../../../css/image/newmivie/I'll Be There (2023).jpg";
import movie4 from "../../../css/image/newmivie/Journey  (2023).jpg";
import movie5 from "../../../css/image/newmivie/chess.jfif";
import movie6 from "../../../css/image/newmivie/insidious.jfif";
import movie7 from "../../../css/image/newmivie/teen wolf 2023.jpg";
import movie8 from "../../../css/image/newmivie/The Hill (2023).jpg";
import movie9 from "../../../css/image/newmivie/The Lost (2023)_files.jpg";
import movie10 from "../../../css/image/newmivie/Welcome to Kashmir (2023)_files.jpg";
import movie11 from "../../../css/image/newmivie/Listen Carefully (2023).jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

let movies = [
    {
        title: "A Night Without Tears",
        image: movie1,
        category: "Sci-fi/Horror",
        duration: "2h 10m",
        ageRating: "18+",
    },
    {
        title: "From the Ashes",
        image: movie2,
        category: "Sci-fi/Drama",
        duration: "1h 30m",
        ageRating: "12+",
    },
    {
        title: "I'll Be There",
        image: movie3,
        category: "Sci-fi/Comedy",
        duration: "2h 00m",
        ageRating: "10+",
    },
    {
        title: " Journey",
        image: movie4,
        category: "Sci-fi/Fantasy",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "Chess",
        image: movie5,
        category: "Sci-fi/Action",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "insidious",
        image: movie6,
        category: "Sci-fi/Thriller",
        duration: "1h 30m",
        ageRating: "18+",
    },
    {
        title: "teen wolf",
        image: movie7,
        category: "Sci-fi/Thriller",
        duration: "2h 15m",
        ageRating: "18+",
    },
    {
        title: "The Hill ",
        image: movie8,
        category: "Sci-fi/Action",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "The Lost",
        image: movie9,
        category: "Sci-fi/Fantasy",
        duration: "2h 28m",
        ageRating: "13+",
    }, {
        title: "welcome to kashmir",
        image: movie10,
        category: "Sci-fi/Mestery",
        duration: "2h 28m",
        ageRating: "13+",
    },
    {
        title: "Listen Carefully ",
        image: movie11,
        category: "Sci-fi/Action",
        duration: "1h 30m",
        ageRating: "18+",
    },
];

export default function NewMovieSlide() {
    return (
        <div className="new-movies-section">
            <h3>NEW IN CINEMA</h3>
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
