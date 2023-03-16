import React from "react";
// Import Swiper style

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faLock,
    faVideo,
    faClock,
    faFilm,
} from "@fortawesome/free-solid-svg-icons";
import moviePoster1 from '../../../css/image/slide1.png'
import moviePoster2 from '../../../css/image/slide2.png'
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
                // pagination={{
                //   clickable: true,
                // }}
                // navigation={true}
                modules={[
                    Autoplay,
                    //   Pagination,
                    //   Navigation
                ]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="shadow"></div>
                    <img src={moviePoster1} alt="movie-poster" />
                    <div class="content">
                        <div class="label">
                            {/* <i class="fa-solid fa-video"></i> */}
                            <FontAwesomeIcon icon={faVideo} />
                            <p class="film-status">Now in cinema</p>
                        </div>
                        <div class="title">
                            <h1>The Matrix Resurrections 3</h1>
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
                <SwiperSlide>
                    <div class="shadow"></div>
                    <img src={moviePoster2} alt="movie-poster" />
                    <div class="content">
                        <div class="label">
                            {/* <i class="fa-solid fa-video"></i> */}
                            <FontAwesomeIcon icon={faVideo} />
                            <p class="film-status">Now in cinema</p>
                        </div>
                        <div class="title">
                            <h1>The Matrix Resurrections 3</h1>
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
                <SwiperSlide>
                    <div class="shadow"></div>
                    <img src={moviePoster2} alt="movie-poster" />
                    <div class="content">
                        <div class="label">
                            {/* <i class="fa-solid fa-video"></i> */}
                            <FontAwesomeIcon icon={faVideo} />
                            <p class="film-status">Now in cinema</p>
                        </div>
                        <div class="title">
                            <h1>The Matrix Resurrections 3</h1>
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
            </Swiper>
        </>
    );
}
