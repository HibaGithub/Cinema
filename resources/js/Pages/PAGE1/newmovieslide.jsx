// import React, { Component } from "react";
// import Slider from "react-slick";
// import movie1 from '../../../css/image/slide1.png'
// import movie2 from '../../../css/image/slide2.png'
// import movie3 from '../../../css/image/slide1.png'
// import movie4 from '../../../css/image/slide2.png'
// import movie5 from '../../../css/image/slide1.png'
// import movie6 from '../../../css/image/slide2.png'
// import movie7 from '../../../css/image/slide1.png'
// import movie8 from '../../../css/image/slide2.png'
import movie9 from '../../../css/image/slide1.png'

// export default class Newmovie extends Component {
//     render() {
//         const settings = {
//             className: "center",
//             infinite: true,
//             centerPadding: "30px",
//             slidesToShow: 5,
//             swipeToSlide: true,
//             afterChange: function (index) {
//                 console.log(
//                     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
//                 );
//             }
//         };
//         return (
//             <div >

//                 <div className="section-title">
//                     <h3>NEW MOVIES</h3>
//                 </div>
//                 <Slider {...settings} >
//                     <div >
//                         <div className="film-poster">
//                             <div class="poster">
//                                 <img alt="" src={movie9} />
//                             </div>
//                             <div class="detail">
//                                 <h2>Black Adam</h2>
//                                 <p>
//                                     <span>Sci-fi/Action</span>
//                                     <span>2h 28m</span>
//                                     <span>13+</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div class="film-poster">
//                             <div class="poster">
//                                 <img alt="" src={movie1} />
//                             </div>
//                             <div class="detail">
//                                 <h2>Black Adam</h2>
//                                 <p>
//                                     <span>Sci-fi/Action</span>
//                                     <span>2h 28m</span>
//                                     <span>13+</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div class="film-poster">
//                             <div class="poster">
//                                 <img alt="" src={movie2} />
//                             </div>
//                             <div class="detail">
//                                 <h2>Black Adam</h2>
//                                 <p>
//                                     <span>Sci-fi/Action</span>
//                                     <span>2h 28m</span>
//                                     <span>13+</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div class="film-poster">
//                             <div class="poster">
//                                 <img alt="" src={movie3} />
//                             </div>
//                             <div class="detail">
//                                 <h2>Black Adam</h2>
//                                 <p>
//                                     <span>Sci-fi/Action</span>
//                                     <span>2h 28m</span>
//                                     <span>13+</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div class="film-poster">
//                             <div class="poster">
//                                 <img alt="" src={movie4} />
//                             </div>
//                             <div class="detail">
//                                 <h2>Black Adam</h2>
//                                 <p>
//                                     <span>Sci-fi/Action</span>
//                                     <span>2h 28m</span>
//                                     <span>13+</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div class="film-poster">
//                             <div class="poster">
//                                 <img alt="" src={movie5} />
//                             </div>
//                             <div class="detail">
//                                 <h2>Black Adam</h2>
//                                 <p>
//                                     <span>Sci-fi/Action</span>
//                                     <span>2h 28m</span>
//                                     <span>13+</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div class="film-poster">
//                             <div class="poster">
//                                 <img alt="" src={movie6} />
//                             </div>
//                             <div class="detail">
//                                 <h2>Black Adam</h2>
//                                 <p>
//                                     <span>Sci-fi/Action</span>
//                                     <span>2h 28m</span>
//                                     <span>13+</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div class="film-poster">
//                             <div class="poster">
//                                 <img alt="" src={movie7} />
//                             </div>
//                             <div class="detail">
//                                 <h2>Black Adam</h2>
//                                 <p>

//                                     <span>Sci-fi/Action</span>
//                                     <span>2h 28m</span>
//                                     <span>13+</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div class="film-poster">
//                             <div class="poster">
//                                 <img alt="" src={movie8} />
//                             </div>
//                             <div class="detail">
//                                 <h2>Black Adam</h2>
//                                 <p>
//                                     <span>Sci-fi/Action</span>
//                                     <span>2h 28m</span>
//                                     <span>13+</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </Slider>

//             </div>
//         );
//     }
// }

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function NewMovieSlide() {
    return (
        <div className="new-movies-section">
            <h3>NEW IN CINEMA</h3>
            <Swiper
                slidesPerView={2}
                spaceBetween={50}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                modules={[Navigation]}
                className="new-movies"
            >
                <SwiperSlide>
                    <div>
                        <div className="film-poster">
                            <div class="poster">
                                <img alt="" src={movie9} />
                            </div>

                            <div class="detail">
                                <h2>Black Adam</h2>

                                <p>
                                    <span>Sci-fi/Action</span>
                                    <span>2h 28m</span>
                                    <span>13+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="film-poster">
                            <div class="poster">
                                <img alt="" src={movie9} />
                            </div>

                            <div class="detail">
                                <h2>Black Adam</h2>

                                <p>
                                    <span>Sci-fi/Action</span>
                                    <span>2h 28m</span>
                                    <span>13+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="film-poster">
                            <div class="poster">
                                <img alt="" src={movie9} />
                            </div>

                            <div class="detail">
                                <h2>Black Adam</h2>

                                <p>
                                    <span>Sci-fi/Action</span>
                                    <span>2h 28m</span>
                                    <span>13+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="film-poster">
                            <div class="poster">
                                <img alt="" src={movie9} />
                            </div>

                            <div class="detail">
                                <h2>Black Adam</h2>

                                <p>
                                    <span>Sci-fi/Action</span>
                                    <span>2h 28m</span>
                                    <span>13+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="film-poster">
                            <div class="poster">
                                <img alt="" src={movie9} />
                            </div>

                            <div class="detail">
                                <h2>Black Adam</h2>

                                <p>
                                    <span>Sci-fi/Action</span>
                                    <span>2h 28m</span>
                                    <span>13+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}


