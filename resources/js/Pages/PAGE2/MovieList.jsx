import React from "react";
// import movie1 from "../../../css/image/newmivie/A Night Without Tears (2023)_files.jpg";
// import movie2 from "../../../css/image/newmivie/From the Ashes (2023).jpg";
// import movie3 from "../../../css/image/newmivie/I'll Be There (2023).jpg";
// import movie4 from "../../../css/image/newmivie/Journey  (2023).jpg";
// import movie5 from "../../../css/image/newmivie/chess.jfif";

export default function MovieList({data}) {
    console.log(data)
    return (
        
        <div className="container-movie"> { 
        data.map((film)=>
            <section class="container">
                <div class="box-container">
                    <div class="box">
                        <div class="image">
                            <img src={(`../../../ css / image / allimage / ${film.image}`)}alt="image" />
                            <div class="buy">
                                <i class="fa-solid fa-ticket"></i>
                                <a href="#">Buy ticket</a>
                            </div>
                        </div>
                        <div class="contant">
                            <div class="title">
                                <h2>{film.titre}</h2>
                                <span>VF</span>
                                <span>ST</span>
                            </div>
                            <div class="info">
                                <div><i class="fa-solid fa-film"></i>
                                    <span> Sci-fi/{film.categorie} </span>
                                </div>
                                <div><i class="fa-regular fa-clock"></i>
                                    <span> 2h 28 min</span>
                                </div>
                                <div><i class="fa-regular fa-user"></i>
                                    <span>+{film.age}</span>
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
                )}</div>
                  )
                }
                  