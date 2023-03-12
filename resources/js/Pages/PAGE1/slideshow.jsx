import React from "react";


export default function SlideShow(){
    return(
        //  < !--slidshow -- >
        <div class="slideshow">
            <div class="film">
                <div class="shadow"></div>
                <div class="content">
                    <div class="label">
                        <i class="fa-solid fa-video"></i>
                        <p class="film-status">Now in cinema</p>
                    </div>
                    <div class="title">
                        <h1>The Matrix Resurrections</h1>
                    </div>
                    <div class="detail">
                        <div class="categorie">
                            <i class="fa-solid fa-film"></i>
                            <p>Sci-fi/Action</p>
                        </div>
                        <div class="duration">
                            <i class="fa-regular fa-clock"></i>
                            <p>2h 28m</p>
                        </div>
                        <div class="age">
                            <i class="fa-solid fa-user"></i>
                            <p>18+</p>
                        </div>
                    </div>
                    <button onclick="location.href='./index.html'">
                        Get your ticket
                    </button>
                </div>
            </div>

            <div class="film">
                <div class="shadow"></div>
                <div class="content">
                    <div class="label">
                        <i class="fa-solid fa-video"></i>
                        <p class="film-status">Now in cinema</p>
                    </div>
                    <div class="title">
                        <h1>The Matrix Resurrections 2</h1>
                    </div>
                    <div class="detail">
                        <div class="categorie">
                            <i class="fa-solid fa-film"></i>
                            <p>Sci-fi/Action</p>
                        </div>
                        <div class="duration">
                            <i class="fa-regular fa-clock"></i>
                            <p>2h 28m</p>
                        </div>
                        <div class="age">
                            <i class="fa-solid fa-user"></i>
                            <p>18+</p>
                        </div>
                    </div>
                    <button onclick="location.href='./index.html'">
                        Get your ticket
                    </button>
                </div>
            </div>

            <div class="film">
                <div class="shadow"></div>
                <div class="content">
                    <div class="label">
                        <i class="fa-solid fa-video"></i>
                        <p class="film-status">Now in cinema</p>
                    </div>
                    <div class="title">
                        <h1>The Matrix Resurrections 3</h1>
                    </div>
                    <div class="detail">
                        <div class="categorie">
                            <i class="fa-solid fa-film"></i>
                            <p>Sci-fi/Action</p>
                        </div>
                        <div class="duration">
                            <i class="fa-regular fa-clock"></i>
                            <p>2h 28m</p>
                        </div>
                        <div class="age">
                            <i class="fa-solid fa-user"></i>
                            <p>18+</p>
                        </div>
                    </div>
                    <button onclick="location.href='./index.html'">
                        Get your ticket
                    </button>
                </div>
            </div>
        </div>
    )
}

