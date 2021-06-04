import react from 'react'
import'./App.css';
const Card = (props) => { 
    console.log(props)
 return ( 
<div className="card"> 
      <img src={props.avatar} alt="Avatar" style={{width:"100%"}}/> 
      <div className="container"> 
        <h4><b>{props.name}</b></h4>  
        <input type="text" onChange={props.onChangeinput} value={props.name}/>
        <button clasName="button" onClick={props.onChangename}>Change Name</button>
        <p>{props.job}</p> 
        <input type="text" onChange={props.onChangejob} value={props.job}/> 
        <div>{props.children}</div> 
      </div> 
    </div> 
)}
    export default Card