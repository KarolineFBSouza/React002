import { useState } from 'react'
import './App.css'

const App = () => {

  let time = new Date().toLocaleTimeString();

const [ctime, steCtime] = useState(time);

const UpdateTime = () => {
  time = new Date().toLocaleTimeString();
  steCtime(time);
};

setInterval(UpdateTime,1000)
  return (
    <>
      <h1> {ctime} </h1>
      <button onClick={UpdateTime}>get time</button>
    </>
  );
};

export default App;
