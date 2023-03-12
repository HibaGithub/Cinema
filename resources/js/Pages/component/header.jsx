import React from "react";
// import '../css/app.css';


export default function Header(){
    return(
        <header>
            <a href="#" class="logo">Cinimania</a>
            <ul class="navigation">
                <li id="movies">
                    <a href="#">Accueil </a>
                    <div class="menu-contant">
                        <a href="#categorie">CATEGORY</a>

                        <a href="#Topmovie">TOP POPULARE MOVIES </a>

                        <a href="#Newmovie">NEW MOVIES </a>

                    </div>
                </li>
                <li><a href="page2.html">Horairs</a></li>
                <li><a href="#">Tarif</a></li>
            </ul>
            <div class="search">
                <input type="text" placeholder="search" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <a href="./cenimanialogin/index.html">
                <div class="login">
                    <i id="icon-login" class="fa-solid fa-circle-user"></i>
                </div>
            </a>
        </header>
        
    )
}