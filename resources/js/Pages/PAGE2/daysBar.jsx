import React from "react";

export default function DaysBar(){
return(
    //  < !--calandre time day-- >
        <section class="calandre">
            {/* <!-- <h2>HORAIRE</h2> --> */}
            <div id="calandre-box">
                <span id="today">Today <p id="date">5 december</p></span>
                <span id="tmorrow">Tomorrow<p id="date">6 december</p></span>
                <span id="wendnesday">Wednesday<p id="date">7 december</p></span>
                <span id="thursday">Thursday<p id="date">8 december</p></span>
                <span id="friday">Friday<p id="date">9 december</p></span>
                <span id="saturday">Saturday<p id="date">10 december</p></span>
                <span id="sunday">Sunday<p id="date">11 december</p></span>
                <span id="spot"></span>

            </div>
        </section>
)
}