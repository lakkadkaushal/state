
import './App.css';
import { useState, setcal } from 'react';

function App() {

  let [val, setval] = useState('');
  let [val1, setval1] = useState('');
  let [ans, setans] = useState('');

  

  const sum = () => {

    setans(parseInt(val) + parseInt(val1));

  }
  const sub = () => {

    setans(parseInt(val) - parseInt(val1));

  }
  const mul = () => {

    setans(parseInt(val) * parseInt(val1));

  }
  const div = () => {

    setans(parseInt(val) / parseInt(val1));

  }


  return (
    <>


      
      value one:=
      <input type="text" onChange={(e) => { setval(e.target.value) }}></input><br></br>
      value two:=
      <input type="text" onChange={(e) => { setval1(e.target.value) }}></input><br></br>




      <input type="button" value="SUM" onClick={sum} ></input>
      <input type="button" value="SUB" onClick={sub} ></input>
      <input type="button" value="MUL" onClick={mul} ></input>
      <input type="button" value="DIV" onClick={div} ></input><br></br>

      <input type='text' value={ans}></input>

      {/* <input type='button' value='1' onClick='getdata(1)'></input> */}
    </>
  );
}

export default App;
