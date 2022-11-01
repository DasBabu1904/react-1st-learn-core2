import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}



function Counter() {
  const [count, setCount] = useState(0)



  const Incriment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);


  // const Incriment = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={Incriment}>Incriment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

// function Product(props) {
//   return (
//     <div className="product">
//       <h3>Name:</h3>
//       <p>Price: </p>
//     </div>
//   )
// }

export default App;
