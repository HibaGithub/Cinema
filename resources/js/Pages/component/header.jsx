import React from "react";
// import '../css/app.css';
import { Link } from "@inertiajs/react"; 


export default function Header() {
    return (
        <header>
            <a href="#" class="logo">Cinimania</a>
            <ul class="navigation">
                <li id="movies">
                    <Link href="/">Accueil</Link>
                    {/* <div class="menu-contant">
                        <Link href="/categorie">CATEGORY</Link>

                        <Link href="/top-movie">TOP POPULARE MOVIES</Link>

                        <Link href="/new-movie">NEW MOVIES </Link>

                    </div> */}
                </li>
                <li><Link href="/horaire">Horairs</Link></li>
                <li><Link href="Tarif">Tarif</Link></li>
            </ul>
            <div class="search">
                <div className="search-bar">
                    <input type="text" placeholder="search" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <Link href="/log">
                <div class="login">
                    <i id="icon-login" class="fa-solid fa-circle-user"></i>
                </div>
            </Link>
        </header>

    )
}