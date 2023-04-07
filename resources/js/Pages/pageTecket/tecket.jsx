import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Gallry from './gallry';
import Description from './description';
import Team from './team-section';
export default function Tecket(){
    return(<>
        <Header />
        <Gallry/>
        <Description />
<Team/>
        <Footer />
        </>

    )
}