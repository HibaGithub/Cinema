import React from "react";
// import '../css/app.css';
import { Link, usePage } from "@inertiajs/react";

export default function Header() {
    const { auth } = usePage().props;
    return (
        <header>
            <a href="#" class="logo">
                Cinemania
            </a>
            <ul class="navigation">
                <li id="movies">
                    <Link href="/">Accueil</Link>
                    {/* <div class="menu-contant">
                        <Link href="/categorie">CATEGORY</Link>

                        <Link href="/top-movie">TOP POPULARE MOVIES</Link>

                        <Link href="/new-movie">NEW MOVIES </Link>

                    </div> */}
                </li>
                <li>
                    <Link href="/horaire">Horairs</Link>
                </li>
                <li>
                    <Link href="/tarif">Tarif</Link>
                </li>
            </ul>
            <div class="search">
                <div className="search-bar">
                    <input type="text" placeholder="search" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            {auth.user ? (
                <div className="profile">
                    <p>hey, { auth.user.name }</p>
                    <i id="icon-profile" className="fa-solid fa-circle-user"></i>
                    <div className="profile-menu">
                        <Link href="/logout" as="button" className="btn bg-secondary-dark hover:bg-none border-secondary-light border-2 hover:border-secondary hover:border-2 hover:text-secondary">Logout</Link>
                    </div>
                </div>
            ) : (
                <div className="space-x-3 text-white">
                    <Link href="/login">login</Link>
                    <Link href="/signup" as="button" className="btn bg-secondary-light hover:bg-secondary-dark hover:text-primary">sign up</Link>
                </div>
            )}
        </header>
    );
}
