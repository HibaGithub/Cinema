import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Gallry from './gallry';
import Description from './description';
import Team from './team-section';
import Reservation from './Reservation';
import { Head } from "@inertiajs/react";
export default function Tecket({ filmInfo, imageGallry, teamMembers, formInfo }){
    return(<>
        <Header />
        <Gallry datag={imageGallry} dataf={filmInfo}/>
        <Description />
        <Team datat={teamMembers} />
        <Reservation dataR={formInfo} />
        <Footer />


   
        </>

    )
}