import React from "react";
import Slideshow from "./MoviesSlideShow";

export default function ContentPage1() {
    return (
        <>
            {/* <!-- slidshow --> */}
            <Slideshow />

            {/* <!-- category --> */}

            <div id="categorie" class="categorie-content">
                <div class="categorie-enf" id="mask-nav">
                    <div>
                        <div class="icon">
                            <i class="fa-solid fa-mask" id="econcat"></i>
                        </div>
                        <div id="descripte">
                            <p>Mestery</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div class="categorie-enf">
                    <div>
                        <div class="icon">
                            <i class="fa-solid fa-heart" id="econcat"></i>
                        </div>
                        <div id="descripte">
                            <p>Romance</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div class="categorie-enf">
                    <div>
                        <div class="icon">
                            <i class="fa-solid fa-ghost" id="econcat"></i>
                        </div>
                        <div id="descripte">
                            <p>Horror</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div class="categorie-enf">
                    <div>
                        <div class="icon">
                            <i
                                class="fa-solid fa-skull-crossbones"
                                id="econcat"
                            ></i>
                        </div>
                        <div id="descripte">
                            <p>Thriller</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div class="categorie-enf" id="contenu">
                    <div>
                        <div class="icon">
                            <i class="fa-solid fa-gun"></i>
                        </div>
                        <div id="descripte">
                            <p>Action</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div class="categorie-enf">
                    <div>
                        <div class="icon">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        <div id="descripte">
                            <p>Fantasy</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div class="categorie-enf">
                    <div>
                        <div class="icon">
                            <i class="fa-regular fa-face-laugh-squint"></i>
                        </div>
                        <div id="descripte">
                            <p>Comedy</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div class="categorie-enf">
                    <div>
                        <div class="icon">
                            <i class="fa-solid fa-masks-theater"></i>
                        </div>
                        <div id="descripte">
                            <p>Drama</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- top movies--> */}
            <section id="Topmovie" class="top-movies-section">
                <div class="top-movies">
                    <div class="section-title">
                        <h1>TOP POPULARE WATCHED MOVIES</h1>
                    </div>
                    <div class="slider">
                        <div class="film-poster">
                            <div class="poster">
                                <img alt="" src="./images/topmovie/acream.jfif" />
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
                        <div class="film-poster">
                            <div class="poster">
                                <img alt="" src="./images/topmovie/Amsterdam_(2022_film).jpg" />
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
                        <div class="film-poster">
                            <div class="poster">
                                <img alt="" src="./images/topmovie/black-adam.jpg" />
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

                        <div class="film-poster">
                            <div class="poster">
                                <img alt="" src="" />
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
                        <div class="film-poster">
                            <div class="poster">
                                <img alt="" src="" />
                            </div>
                            <div class="detail">
                                <h2>DC_League_of_Super_Pets</h2>
                                <p>
                                    <span>Sci-fi/Action</span>
                                    <span>2h 28m</span>
                                    <span>13+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="pre">
                        <ion-icon class="prev" name="ios-arrow-back">
                            ‹
                        </ion-icon>
                    </div>
                    <div class="next">
                        <ion-icon class="nex" name="ios-arrow-forward">
                            ›
                        </ion-icon>
                    </div>
                </div>
            </section>

            {/* <!-- new movie --> */}
            <div id="Newmovie">
                <section class="new-movies-section">
                    <div class="new-movies">
                        <div class="section-title">
                            <h1>NEW MOVIES YOU MAY LIKE</h1>
                        </div>
                        <div class="slider">
                            <div class="film-poster">
                                <div class="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
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
                            <div class="film-poster">
                                <div class="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
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
                            <div class="film-poster">
                                <div class="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
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
                            <div class="film-poster">
                                <div class="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
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
                            <div class="film-poster">
                                <div class="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
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
                            <div class="film-poster">
                                <div class="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
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
                            <div class="film-poster">
                                <div class="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
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
                            <div class="film-poster">
                                <div class="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
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
                            <div class="film-poster">
                                <div class="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
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
                            <div class="film-poster">
                                <div class="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
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
                        <div class="pre">
                            <ion-icon class="prev" name="ios-arrow-back">
                                ‹
                            </ion-icon>
                        </div>
                        <div class="next">
                            <ion-icon class="nex" name="ios-arrow-forward">
                                ›
                            </ion-icon>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
