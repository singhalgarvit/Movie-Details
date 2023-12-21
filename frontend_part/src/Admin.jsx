import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './admin.css'

const useStyles=makeStyles({
  inp:{
    fontSize:60,
    margin:10,
    width:500,
  }
})

function Admin(){
  const classes=useStyles();

    const[name,setName]=useState("")
    const[rating,setRating]=useState("")
    const[duration,setDuration]=useState("")
    const[date,setDate]=useState("")
    const[about,setAbout]=useState("")
    const[info,setInfo]=useState()

   async function Submit(e){
        e.preventDefault()

        let movie=await fetch('http://localhost:5000/admin',{
            method:'POST',
            body:JSON.stringify({name,rating,duration,date,about}),
            headers:{'content-Type':'application/json'}
          })
          .then((resp)=>resp.json())
          .then((json)=>json.data);

          alert("Submitted Successfully")
           
          
        setName("")
        setRating("")
        setDuration("")
        setDate("")
        setAbout("")
    }



    return (
        <div className="formContainer">
        <Link to="/"> Home </Link>
        <br />
          <form onSubmit={Submit}>
            <TextField className={classes.inp} variant="outlined" value={name} type="text" name="name" id="name" label="Type Movie Name" onInput={(e)=>setName(e.target.value)} required/> <br />
            <TextField className={classes.inp} variant="outlined" value={rating} type="number" name="rating" id="rating" label="Rating Out of 10" min="0" max="10"  onInput={(e)=>setRating(e.target.value)} required/> <br />
            <TextField className={classes.inp} variant="outlined" value={duration} type="number" name="duration" id="duration" label="Duration in minutes" onInput={(e)=>setDuration(e.target.value)} required/> <br />
            <TextField className={classes.inp} variant="outlined" value={date} type="date" name="date" id="date" onInput={(e)=>setDate(e.target.value)} required/> <br />
            <TextField className={classes.inp} variant="outlined" value={about} type="text" name="about" id="about" label="About movie" onInput={(e)=>setAbout(e.target.value)} required/> <br />
            <input type="submit" id="submitBtn"/>
           </form>
        </div>
    )
}

export default Admin;