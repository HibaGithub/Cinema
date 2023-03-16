import React from "react";
import Slideshow from "./MoviesSlideShow";

const categorieStyle = {
    'padding': '88px 120px 0',
    'width': '100%',
    'box-sizing': 'border-box',
    'height': 'max-content',
    'display': 'grid',
    'grid-template-columns': 'repeat(4, max-content)',
    'justify-content': 'center',
    'gap': '2em',
    'justify-self': 'center',
}

export default function ContentPage1() {
    return (
        <>
            {/* <!-- slidshow --> */}
            <Slideshow />

            {/* <!-- category --> */}

            <div id="categories" className="categories" >
                <div className="categorie-enf" id="mask-nav">
                    <div>
                        <div className="icon">
                            <i className="fa-solid fa-mask" id="econcat"></i>
                        </div>
                        <div id="descripte">
                            <p>Mestery</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div className="categorie-enf">
                    <div>
                        <div className="icon">
                            <i className="fa-solid fa-heart" id="econcat"></i>
                        </div>
                        <div id="descripte">
                            <p>Romance</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div className="categorie-enf">
                    <div>
                        <div className="icon">
                            <i className="fa-solid fa-ghost" id="econcat"></i>
                        </div>
                        <div id="descripte">
                            <p>Horror</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div className="categorie-enf">
                    <div>
                        <div className="icon">
                            <i
                                className="fa-solid fa-skull-crossbones"
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

                <div className="categorie-enf" id="contenu">
                    <div>
                        <div className="icon">
                            <i className="fa-solid fa-gun"></i>
                        </div>
                        <div id="descripte">
                            <p>Action</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div className="categorie-enf">
                    <div>
                        <div className="icon">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        <div id="descripte">
                            <p>Fantasy</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div className="categorie-enf">
                    <div>
                        <div className="icon">
                            <i className="fa-regular fa-face-laugh-squint"></i>
                        </div>
                        <div id="descripte">
                            <p>Comedy</p>
                            <span>1800 movies</span>
                            <a href="">See all movies</a>
                        </div>
                    </div>
                </div>

                <div className="categorie-enf">
                    <div>
                        <div className="icon">
                            <i className="fa-solid fa-masks-theater"></i>
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
            <section id="Topmovie" className="top-movies-section">
                <div className="top-movies">
                    <div className="section-title">
                        <h1>TOP POPULARE WATCHED MOVIES</h1>
                    </div>
                    <div className="slider">
                        <div className="film-poster">
                            <div className="poster">
                                <img alt="" src="" />
                            </div>
                            <div className="detail">
                                <h2>Black Adam</h2>
                                <p>
                                    <span>Sci-fi/Action</span>
                                    <span>2h 28m</span>
                                    <span>13+</span>
                                </p>
                            </div>
                        </div>
                        <div className="film-poster">
                            <div className="poster">
                                <img alt="" src="./assets/img/black-adam.jpg" />
                            </div>
                            <div className="detail">
                                <h2>Black Adam</h2>
                                <p>
                                    <span>Sci-fi/Action</span>
                                    <span>2h 28m</span>
                                    <span>13+</span>
                                </p>
                            </div>
                        </div>
                        <div className="film-poster">
                            <div className="poster">
                                <img alt="" src="./assets/img/black-adam.jpg" />
                            </div>
                            <div className="detail">
                                <h2>Black Adam</h2>
                                <p>
                                    <span>Sci-fi/Action</span>
                                    <span>2h 28m</span>
                                    <span>13+</span>
                                </p>
                            </div>
                        </div>

                        <div className="film-poster">
                            <div className="poster">
                                <img alt="" src="./assets/img/black-adam.jpg" />
                            </div>
                            <div className="detail">
                                <h2>Black Adam</h2>
                                <p>
                                    <span>Sci-fi/Action</span>
                                    <span>2h 28m</span>
                                    <span>13+</span>
                                </p>
                            </div>
                        </div>
                        <div className="film-poster">
                            <div className="poster">
                                <img alt="" src="./assets/img/black-adam.jpg" />
                            </div>
                            <div className="detail">
                                <h2>Black Adam</h2>
                                <p>
                                    <span>Sci-fi/Action</span>
                                    <span>2h 28m</span>
                                    <span>13+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pre">
                        <ion-icon className="prev" name="ios-arrow-back">
                            ‹
                        </ion-icon>
                    </div>
                    <div className="next">
                        <ion-icon className="nex" name="ios-arrow-forward">
                            ›
                        </ion-icon>
                    </div>
                </div>
            </section>

            {/* <!-- new movie --> */}
            <div id="Newmovie">
                <section className="new-movies-section">
                    <div className="new-movies">
                        <div className="section-title">
                            <h1>NEW MOVIES YOU MAY LIKE</h1>
                        </div>
                        <div className="slider">
                            <div className="film-poster">
                                <div className="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
                                </div>
                                <div className="detail">
                                    <h2>Black Adam</h2>
                                    <p>
                                        <span>Sci-fi/Action</span>
                                        <span>2h 28m</span>
                                        <span>13+</span>
                                    </p>
                                </div>
                            </div>
                            <div className="film-poster">
                                <div className="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
                                </div>
                                <div className="detail">
                                    <h2>Black Adam</h2>
                                    <p>
                                        <span>Sci-fi/Action</span>
                                        <span>2h 28m</span>
                                        <span>13+</span>
                                    </p>
                                </div>
                            </div>
                            <div className="film-poster">
                                <div className="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
                                </div>
                                <div className="detail">
                                    <h2>Black Adam</h2>
                                    <p>
                                        <span>Sci-fi/Action</span>
                                        <span>2h 28m</span>
                                        <span>13+</span>
                                    </p>
                                </div>
                            </div>
                            <div className="film-poster">
                                <div className="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
                                </div>
                                <div className="detail">
                                    <h2>Black Adam</h2>
                                    <p>
                                        <span>Sci-fi/Action</span>
                                        <span>2h 28m</span>
                                        <span>13+</span>
                                    </p>
                                </div>
                            </div>
                            <div className="film-poster">
                                <div className="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
                                </div>
                                <div className="detail">
                                    <h2>Black Adam</h2>
                                    <p>
                                        <span>Sci-fi/Action</span>
                                        <span>2h 28m</span>
                                        <span>13+</span>
                                    </p>
                                </div>
                            </div>
                            <div className="film-poster">
                                <div className="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
                                </div>
                                <div className="detail">
                                    <h2>Black Adam</h2>
                                    <p>
                                        <span>Sci-fi/Action</span>
                                        <span>2h 28m</span>
                                        <span>13+</span>
                                    </p>
                                </div>
                            </div>
                            <div className="film-poster">
                                <div className="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
                                </div>
                                <div className="detail">
                                    <h2>Black Adam</h2>
                                    <p>
                                        <span>Sci-fi/Action</span>
                                        <span>2h 28m</span>
                                        <span>13+</span>
                                    </p>
                                </div>
                            </div>
                            <div className="film-poster">
                                <div className="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
                                </div>
                                <div className="detail">
                                    <h2>Black Adam</h2>
                                    <p>
                                        <span>Sci-fi/Action</span>
                                        <span>2h 28m</span>
                                        <span>13+</span>
                                    </p>
                                </div>
                            </div>
                            <div className="film-poster">
                                <div className="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
                                </div>
                                <div className="detail">
                                    <h2>Black Adam</h2>
                                    <p>
                                        <span>Sci-fi/Action</span>
                                        <span>2h 28m</span>
                                        <span>13+</span>
                                    </p>
                                </div>
                            </div>
                            <div className="film-poster">
                                <div className="poster">
                                    <img
                                        alt=""
                                        src="./assets/img/black-adam.jpg"
                                    />
                                </div>
                                <div className="detail">
                                    <h2>Black Adam</h2>
                                    <p>
                                        <span>Sci-fi/Action</span>
                                        <span>2h 28m</span>
                                        <span>13+</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pre">
                            <ion-icon className="prev" name="ios-arrow-back">
                                ‹
                            </ion-icon>
                        </div>
                        <div className="next">
                            <ion-icon className="nex" name="ios-arrow-forward">
                                ›
                            </ion-icon>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
