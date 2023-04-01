import Header from "../component/header";
import Footer from "../component/footer";
import DaysBar from './daysBar'
import MovieList from "./MovieList";
import { Head } from "@inertiajs/react";
export default function Horaire({films}) {
    return (<>
        <Header />
        <DaysBar/>
        <MovieList data={films} />
        <Footer/> 
        {/* <App/> */}
    


    </>

    )
}