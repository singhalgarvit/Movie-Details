import { useEffect, useState } from 'react';
import './movielist.css'
import { Link } from 'react-router-dom';

function Movielist(){
    const [movieList,setMovieList]=useState([])

    let data=async()=>{
        let movie= await fetch('http://localhost:5000/movie')
        .then((res)=>res.json())
        .then((list)=>setMovieList(list))
        .catch((err)=>console.log(err))
    }
    console.log(movieList)
    
    useEffect(()=>{
        data()
    },[])

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

    return (
      <div className="box">
        <Link to="/admin">Admin</Link><br />

        {movieList.map((elem, i) => (
           
          <div class="container">
            <Link to={`/movies/${elem.name}`}> <h1>{elem.name}</h1> </Link>
            <p id="rating">⭐{elem.rating}/10</p>
            <p id="dateduration">
              <span>{hours(elem.duration)}h {minutes(elem.duration)}m</span>
              <span>{dateString(elem.date)}</span>
            </p>
            <p id="about">
              {elem.about}
            </p>
          </div>
         
        ))}
      </div>
    );
}

export default Movielist;