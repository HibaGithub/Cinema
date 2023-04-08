import React  from "react";

export default function  Gallry({datag}){
    
    return (
<div className='gallry-container'>
            <div class="titleGallry">
                <h1>The Matrix Resurrections</h1>
            </div>
            <div class="detailGallry">
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
            <section class='sectionGallry '>
                    { datag.map((f)=>
                        <article>
                             <div>
                                {/* <img src={`BlackAdam/${f.image}`} alt="image" /> */}
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </article>
                    )}
                   
            </section>
            </div>
    )
}