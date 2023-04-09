import react from "react "
export default function Team({datat}){
    return(
        <div class="wrapper">

            <div class="members">
                {datat.map((team)=>(
                    <div class="team-member">
                        <img src={`BlackAdam/team/${team.profil}`} alt="image" />
                        <h4>{team.reelnama}</h4>
                        <p>in {team.fakename}</p>
                    </div>
                ))}
               
                
            </div>
        </div>

    )
}