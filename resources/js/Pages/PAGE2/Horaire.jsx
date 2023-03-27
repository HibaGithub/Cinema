import Header from "../component/header";
import Footer from "../component/footer";
import MovieList from "./MovieList";
import { Head } from "@inertiajs/react";
export default function Horaire({films}) {
    return (<>
        <Header />
        <MovieList data={films} />
        <Footer/>

    


    </>

    )
}