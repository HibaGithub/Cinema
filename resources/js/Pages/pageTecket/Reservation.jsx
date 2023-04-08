import React from 'react'

export default function Reservation(){
    return (
        
        <div class="containerR">
            <div class="title">Resirvation</div>
            <form action="#">
                <div class="form-group">
                    <span> First Name</span>
                    <input type="text" placeholder="Enter  first name" required/>
                </div>
                <div class="form-group">
                    <span>Last Name</span>
                    <input type="text" placeholder="Enter last name" required/>
                </div>
                <div class="form-group">
                    <span>Email</span>
                    <input type="email" placeholder="Enter email" required/>
                </div>
                <div class="form-group">
                    <span>Phone Number</span>
                    <input type="number" placeholder="Enter phone number" required />
                </div>
                <div class="form-group">
                    <span>Film Name</span>
                    <input type="text" placeholder="Enter film name" required />
                </div>
                <div class="form-group">
                    <span> Film Category </span>
                    <input type="text" placeholder="Enter film category " required/>
                </div>
                <div class="form-group">
                    <span> Day for watch movie </span>
                    <input type="text" placeholder="manday " required />
                </div>
                <div class="form-group">
                    <span> Hour for watch movie </span>
                    <input type="text" placeholder="14H 00min " required />
                </div>
                  <div class="form-group">
                    <span> City </span>
                    <input type="text" placeholder="Enter your city " required />
                </div>
                <div class="form-group">
                    <span> Cinima Name </span>
                    {/* <input type="text" placeholder="Enter film category " required /> */}
                    <select>
                        <option>
                            Cinema Rialto</option>
                        <option>
                            La maison du cinema</option>
                        <option>
                            Megarama
                        </option>
                        <option>
                           
                          
                            Cinema Rif
                        </option>

                    </select>
                </div>
                <div class="button">
                    <input type="button" value="Valide"/>
                </div>
            </form>
        </div>

      
    )
}