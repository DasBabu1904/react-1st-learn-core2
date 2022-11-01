import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <ExternelUser></ExternelUser>
    </div>
  );
}



function ExternelUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])


  return (
    <div>
      <h1>External User</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className="Details_Style">
      <h3>Name:{props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <Counter></Counter>
//     </div>
//   );
// }



// function Counter() {
//   const [count, setCount] = useState(0)



//   const Incriment = () => setCount(count + 1);
//   const Decrement = () => setCount(count - 1);


//   // const Incriment = () => {
//   //   const newCount = count + 1;
//   //   setCount(newCount);
//   // }
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={Incriment}>Incriment</button>
//       <button onClick={Decrement}>Decrement</button>
//     </div>
//   )
// }

// function Product(props) {
//   return (
//     <div className="product">
//       <h3>Name:</h3>
//       <p>Price: </p>
//     </div>
//   )
// }

export default App;
