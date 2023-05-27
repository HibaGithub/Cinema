import React, { useContext, useRef, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { DateFilm } from "./Horaire";


export default function MovieList({data}) {
    const { currentDate }= useContext(DateFilm)
    
    // const fillter = (button)=>{
    //    const filterdata = document.getElementsByClassName('container')
    // .fillter(document.getElementsByClassName('container') =>
    //  document.getElementsByClassName('container').length(2)===button);
    // } 
    
    console.log(currentDate)
    return (
        <>
            <div className="container-movie">
                { 
                    data.map((film) =>
                        Date.parse(new Date(film['date-diffusion']).toLocaleDateString('en-us')) == currentDate &&
                    <section class="container">
                    {/* {console.log(Date.parse(film['date-diffusion']),'-', currentDate)} */}
                <div class="box-container">
                    <div class="box">
                        <div class="image">
                            <img src= {`allimage/${film.image}`} alt="image" />
                            <div class="buy">
                                <i class="fa-solid fa-ticket"></i>
                                             <Link href={`/tecket/${film.id}`}   ><a href="#">Buy ticket</a></Link>
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
                        {/* {salleinfo.map(()=>( */}
                            {/* <> */}
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
                                {/* </> */}
                        {/* ))} */}
                        </div>
                    </div>
                </div>
                </section>

                      
                )}</div>
                   
                
        </>
                  )
                }
                  