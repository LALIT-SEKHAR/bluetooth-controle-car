import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    console.log('Started');
  })

  const GetAllBlutoothDevise = () => {
    if (navigator.bluetooth) {
      console.log(
        navigator.bluetooth.requestDevice({acceptAllDevices: true})
        .then( data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        })
      );
    }
    else{
      console.log('User Brouser Don\'t have Bluetooth Support.');
    }
  }

  return (
    <div className="App">
      <h1>Bluetooth Car</h1>
      <button onClick={GetAllBlutoothDevise}>Start</button>
    </div>
  );
}

export default App;
