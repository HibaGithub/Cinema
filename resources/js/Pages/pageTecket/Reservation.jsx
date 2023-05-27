import React from 'react'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { useForm } from '@inertiajs/react'


export default function Reservation({dataR}){
    const { data, setData, post, processing, errors } = useForm({
        First_name : '',
        Last_name : '',
        email : '',
        Phone_Number : '',
        Film_Name : '',
        Film_Category : '',
        // Day : '',
        // Hour : '',
        Salle : '',
        Heure: '',
        // payment:''
    })

    function submit(e) {
        e.preventDefault()
        post('/envoyer')
    }
    return (
        
        <div class="containerR">
          
            <div class="title">Resirvation</div>
            
                <form action="#" onSubmit={submit}>
                    <div class="form-group">
                        <span> First Name</span>
                        <input type="text" name='First_name' placeholder="Enter  first name" value={data.First_name} onChange={e => setData('First_name', e.target.value)} />
                    </div>
                    <div class="form-group">
                        <span>Last Name</span>
                        <input type="text" name='Last_name' placeholder="Enter last name" value={data.Last_name} onChange={e => setData('Last_name', e.target.value)} />
                    </div>
                    <div class="form-group">
                        <span>Email</span>
                        <input type="email" name='email' placeholder="Enter email" value={data.email} onChange={e => setData('email', e.target.value)} />
                    </div>
                    <div class="form-group">
                        <span>Phone Number</span>
                        <input type="text" name='Phone_Number' placeholder="Enter phone number" value={data.Phone_Number} onChange={e => setData('Phone_Number', e.target.value)} />
                    </div>
                    <div class="form-group">
                        <span>Film Name</span>
                    <input type="text" name='Film_Name' placeholder="Enter film name" value={data.titre} onChange={e => setData('Film_Name', e.target.value)} d />
                    </div>
                    <div class="form-group">
                        <span> Film Category </span>
                    <input type="text" name='Film_Category' placeholder="Enter film category " value={data.categorie} onChange={e => setData('Film_Category', e.target.value)} />
                    </div>
                    <div class="form-group">
                        <span> Day for watch movie </span>
                        <input type="text" name='Day' placeholder="manday " value={data.Day} onChange={e => setData('Day', e.target.value)} />
                    </div>
                    <div class="form-group">
                    <span>time of film</span>
                    <input type="text" name='Hour' placeholder="14H 00min " value={data.Hour} onChange={e => setData('Hour', e.target.value)} />
                    </div>
                    {/* <div class="form-group">
                        <span> Salle de film  </span>
                        <input type="text" name='City' placeholder="Enter your city " value={data.Salle} onChange={e => setData('Salle', e.target.value)} />
                    </div>
                    // <div class="form-group">
                    //     <span> Heure de film </span>
                       
                    //     <input name='Heure' value={data.Heure} onChange={e => setData('Heure', e.target.value)} />

                    // </div> */}
                    <div class="form-group">
                        <span> City  </span>
                    <input type="text" name='City' placeholder="entre votre city " value={data.City} onChange={e => setData('City', e.target.value)} />
                    </div>
                    
                <div class="form-group">
                    <span> Cinema Name  </span>
                    <select name="cinimaname" value={data.cinimaname} onChange={e => setData('cinimaname', e.target.value)} >
                        <option>selected cinema name</option>
                        <option>Megarama</option>
                        <option>Cinimax</option>
                        <option>cinima saada</option>
                        <option>gfi cinema </option>
                    </select>
                </div>

                    <div class="button">
                        <button class="send">Send</button><br />
                        {errors.First_name && errors.Last_name && errors.email && errors.Phone_Number && errors.Film_Name
                            && errors.Film_Category && errors.Day && errors.Hour && errors.City &&
                            errors.cinimaname && (
                                <div className="warning-messsage ">
                                    <i class="fa-sharp fa-solid fa-circle-exclamation mr-2  "></i>
                                    verify all the fields are validet.
                                </div>)}
                    </div>

                </form>
          
            
        </div>

      
    )
}