import React, { useRef, useState } from "react";

// import images
// import movie1 from "../../../css/image/topmovie/acream.jfif";
// import movie2 from "../../../css/image/topmovie/Amsterdam_(2022_film).jpg";
// import movie3 from "../../../css/image/topmovie/lely lely crocodile.jfif";
// import movie4 from "../../../css/image/topmovie/black-adam.jpg";

// let datamovie = [
//     {
//         image: movie1,
//     },
    
//     { 
//         image: movie2,
//     },
//     {
//         image: movie3,
//     },
//     {
//         image: movie4, 
//     },
// ];
export default function  MovieList() {
    return(
        // {datamovie.map((data) => (
        
        <section class="container">
            <div class="box-container">
                <div class="box">
                    <div class="image">
                        <img src='' alt=""/>
                            <div class="buy">
                                <i class="fa-solid fa-ticket"></i>
                                <a href="#">Buy ticket</a>
                            </div>
                    </div>
                    <div class="contant">
                        <div class="title">
                            <h2>Bullet Train</h2>
                            <span>VF</span>
                            <span>ST</span>
                        </div>
                        <div class="info">
                            <div><i class="fa-solid fa-film"></i>
                                <span> Sci-fi/Action </span>
                            </div>
                            <div><i class="fa-regular fa-clock"></i>
                                <span> 2h 28 min</span>
                            </div>
                            <div><i class="fa-regular fa-user"></i>
                                <span>+18</span>
                            </div>
                        </div>
                        <div class="salle1">
                            <h3>salle1</h3>
                            <div>
                                <span>14:30</span><span>18:30</span><span>20:30</span><span>22:30</span>
                            </div>
                        </div>
                        <div class="salle2">
                            <h3>salle3</h3>
                            <div>
                                <span>12:30</span><span>14:00</span><span>17:30</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // ))}
    )
}