import React, { useContext, useEffect, useRef, useState } from "react";
import { DateFilm } from "./Horaire";

export default function DaysBar() {
    const { currentDate, setCurrentDate } = useContext(DateFilm)
    const [previousPosition, setPreviousPosition] = useState(0);
    let datebar = useRef();
    let spot = useRef();
    let date = new Date();

    useEffect(() => {
        setCurrentDate(Date.parse(datebar.current.childNodes[0].childNodes[1].dataset.date));
    },[])
    const handelSpotPosition = (e) => {
        spot.current.style.translate = `${162 * e.target.dataset.id}px`
        // console.log(e.target.dataset.id > 0 && e.target.dataset.id - 1);
        // console.log(e.target.dataset.id > previousPosition);

        if (e.target.dataset.id >= 0) {
            // console.log(datebar.current.childNodes[previousPosition]);
            datebar.current.childNodes[previousPosition].classList.remove('focus'); 
            e.target.classList.add('focus');
            setCurrentDate(Date.parse(e.target.childNodes[1].dataset.date));
            console.log(e.target.childNodes[1].dataset.date);
        }

        setPreviousPosition(e.target.dataset.id)
        // console.log(parseInt(window.getComputedStyle(spot.current).padding));
    }

    return (
        //  < !--calandre time day-- >
        <section class="calandre">
     {/* <h2>HORAIRE</h2> */}
            <div id="calandre-box" ref={datebar} className="cursor-pointer">
                <span id="today" data-id="0" className="focus transition-all ease-in-out duration-200" onClick={handelSpotPosition}>Aujourd'huit <p id="date" data-date={(new Date(new Date().setDate(new Date().getDate())).toLocaleDateString())} style={{pointerEvents:'none'}}>{(new Date(new Date().setDate(new Date().getDate())).toLocaleDateString('fr-us',{day:'numeric', month:'long'}))}</p></span>
                <span id="tmorrow" data-id="1" className="transition-all ease-in-out duration-200" onClick={handelSpotPosition}>Demain<p id="date" data-date={(new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString())} style={{pointerEvents:'none'}}>{(new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString('fr-us',{day:'numeric', month:'long'}))}</p></span>
                <span id="wendnesday" data-id="2" className="transition-all ease-in-out duration-200 capitalize" onClick={handelSpotPosition}>{(new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString('fr-us',{weekday:'long'}))}<p id="date" data-date={(new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString())} style={{pointerEvents:'none'}}>{(new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString('fr-us',{day:'numeric', month:'long'}))}</p></span>
                <span id="thursday" data-id="3" className="transition-all ease-in-out duration-200 capitalize" onClick={handelSpotPosition}>{(new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleDateString('fr-us',{weekday:'long'}))}<p id="date" data-date={(new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleDateString())} style={{pointerEvents:'none'}}>{(new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleDateString('fr-us',{day:'numeric', month:'long'}))}</p></span>
                <span id="friday" data-id="4" className="transition-all ease-in-out duration-200 capitalize" onClick={handelSpotPosition}>{(new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleDateString('fr-us',{weekday:'long'}))}<p id="date" data-date={(new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleDateString())}style={{pointerEvents:'none'}}>{(new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleDateString('fr-us',{day:'numeric', month:'long'}))}</p></span>
                <span id="saturday" data-id="5" className="transition-all ease-in-out duration-200 capitalize" onClick={handelSpotPosition}>{(new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString('fr-us',{weekday:'long'}))}<p id="date"data-date={(new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString())}  style={{pointerEvents:'none'}}>{(new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString('fr-us',{day:'numeric', month:'long'}))}</p></span>
                <span id="sunday" data-id="6" className="transition-all ease-in-out duration-200 capitalize" onClick={handelSpotPosition}>{(new Date(new Date().setDate(new Date().getDate() + 6)).toLocaleDateString('fr-us',{weekday:'long'}))}<p id="date" data-date={(new Date(new Date().setDate(new Date().getDate() + 6)).toLocaleDateString())} style={{pointerEvents:'none'}}>{(new Date(new Date().setDate(new Date().getDate() + 6)).toLocaleDateString('fr-us',{day:'numeric', month:'long'}))}</p></span>
                <span id="spot" className="transition-all ease-in-out duration-300" ref={spot}></span>
            </div>
        </section>
    )
}