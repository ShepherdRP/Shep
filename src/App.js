import react,{useState} from 'react'
import './App.css';
import Card from './Card';
import faker from 'faker';
function App() {
  const [name,setName]= useState('Roshan Poudel')
  const [job,setJob]= useState('IT')
  const [showCard,setShowcard]=useState('true')
  // const [value,setValue]=useState('HIde')
  const buttons=(
    <div>
  <button className="button button3">Red</button> 
<button className="button button5">Black</button> 
    </div>
  )
  const changeName =(name)=>{setName(name)}
  const changeInputhandeler =(event)=>{ setName(event.target.value)}
  const changeInputjob =(event)=>{
    setJob(event.target.value)
  }
  const changeValue=()=>{
    setShowcard(!showCard)
  }
  // const toggleValue=(event)=>{
  //   setValue(event.target.value)
  // }

  return (
    <div className="App">
      <button className='button but' onClick={changeValue}>onChangevalue</button>    
{showCard?<Card 
avatar='https://cdn.fakercloud.com/avatars/chaensel_128.jpg'
  name={name}
  job={job}
  onChangename={()=>changeName('Tanka Prasad')}
  onChangeinput={changeInputhandeler}
  onChangejob={changeInputjob}
  

>{buttons}</Card>:null}
          
</div>
  );
}

export default App;
