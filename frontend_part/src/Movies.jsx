import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './movies.css'

function Movies(){
    const { name } = useParams();
    const[dataarr,setDataarr]=useState({});

    const details=fetch(`http://localhost:5000/movies/${name}`)
    .then((res)=>res.json())
    .then((data)=>setDataarr(data[0]))
    .catch((err)=>console.error(err))

    function dateString(dateVal){
        var dateObject = new Date(dateVal);

        return dateObject.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
        
    }

    function hours(duration){
        return Math.trunc(duration/60);
    }

    function minutes(duration){
        return duration%60;
    }

    // console.log(details)
    return(
        <div class="movieContainer">
        <div class="shortContainer">
          <h1>{dataarr.name}</h1>
          <p id="p01">⭐{dataarr.rating}/10</p>
          <p id="p02">
            <span>{hours(dataarr.duration)}h {minutes(dataarr.duration)}m</span><span>{dateString(dataarr.date)}</span>
            </p>
          <p id="p03">
            {dataarr.about}
          </p>
        </div>
      </div>
    )
}
export default Movies