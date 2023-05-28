import React  from "react";

export default function  Gallry({datag, dataf}){
    
    function toHoursAndMinutes(totalSeconds) {
        const totalMinutes = Math.floor(totalSeconds / 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
      
        return `${hours}h ${minutes}m`;
    }
    
    
    return (
        
          <div className='gallry-container'>
            {dataf.map((filminfo)=>
<>
        <div class="titleGallry">
            <h1>{filminfo.titre}</h1>
        </div>
        <div class="detailGallry">
            <div class="categorie">
                <i class="fa-solid fa-film"></i>
                            <p>Sci-fi/{filminfo.categorie}</p>
            </div>
            <div class="duration">
                <i class="fa-regular fa-clock"></i>
                            <p>{toHoursAndMinutes(filminfo.duration)}</p>
            </div>
            <div class="age">
                <i class="fa-solid fa-user"></i>
                            <p>{filminfo.age}</p>
            </div>
        </div></>
)}
          
            
            <section class='sectionGallry'>
                {console.log(datag)}
                    { datag.map((f, i)=>
                    i === 0?
                            <video controls autoplay>
                                <source src="https://imdb-video.media-imdb.com/vi3315844377/1434659607842-pgv4ql-1666195860663.mp4?Expires=1684334959&Signature=S3ZhgaV2TDzYi8iB8shDtGX84lF2zt-UBFuolx82rrkArFNlwPQlzpyovWtIMdsqgdmJGccCp374YQyjjnrfPmZQMPuiX67QZSEK5dIR0JlSfM3mV3dOadnE1ezCtbyWjf15i5ezoL-WJN22yidFyusTIX1a5YbIC-hWu-dhBt8L9xOreuJocUmX5jaGJXwW6y-qFdcM0vZzwpERY-Ix3znfSD419mRq0tYmk9hui4TPd1bpTQxr2wXbyP06m-lCJPqXVRmB7Hm6YCGMnbDfwJlcNlbKFY8smmgFaEENhAlIc4NE3Y-~A1~0QPGL~I-iwmblGwvUciiFyTTeAbCxRw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" type="video/mp4"/></video>
                        :
                        <img src={`BlackAdam/${f.image}`} alt="image" />

                        
                          
                       
                   )}
                   
            </section>
            </div>
    )
}