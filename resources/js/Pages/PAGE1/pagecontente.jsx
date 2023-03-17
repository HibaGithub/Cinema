import React from "react";
import Slideshow from "./MoviesSlideShow";
import SwipeToSlide from "./movieslide";
import Newmovie from "./newmovieslide";
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
            <SwipeToSlide />
            
            {/* <!-- new movie --> */}
            <Newmovie />
        </>
    );
}
