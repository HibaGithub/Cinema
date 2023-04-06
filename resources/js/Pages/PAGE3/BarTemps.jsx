import React from 'react';
 import { faDollar } from '@fortawesome/free-solid-svg-icons';
export default function BarTemps(){
    return (
    <div className='tarif-contianer'>
            <h2> <i class="fa-solid fa-dollar-sign"></i>
            </h2>
            <section class="tarif">
                <div class="contant">
                    <table>
                        <tr>
                            <td>Avant 16 H </td>
                            <td class='hifen'>----------------------------------</td>
                            <td> 55DH</td>
                        </tr>
                        <tr>
                            <td>Atdrès 18 H </td>
                            <td class='hifen'>----------------------------------</td>
                            <td> 60DH</td>
                        </tr>
                        <tr>
                            <td>Samedi & Dimanche </td>
                            <td class='hifen'>----------------------------------</td>
                            <td> 50DH</td>
                        </tr>
                        <tr>
                            <td>Matin </td>
                            <td class='hifen'>----------------------------------</td>
                            <td> 45DH</td>
                        </tr>
                    </table>
                </div>
            </section>
    </div>
        
          
    )
}