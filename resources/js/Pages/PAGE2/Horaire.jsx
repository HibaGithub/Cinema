import Header from "../component/header";
import Footer from "../component/footer";
import DaysBar from './daysBar'
import MovieList from "./MovieList";
import { Head } from "@inertiajs/react";
import { createContext, useEffect, useState } from "react";

export const DateFilm = createContext({date:'', setDate:() => {}})
export default function Horaire({ films, salle }) {
    const [currentDate, setCurrentDate] = useState()
    const value = { currentDate, setCurrentDate };

    useEffect(() => {
        fetch('')
    })
    return (<>
        <Header />
        <DateFilm.Provider value={value}>
            <DaysBar/>
            <MovieList data={films} salleinfo={salle} />
        </DateFilm.Provider>
        <Footer/> 
        {/* <App/> */}
    


    </>

    )
}