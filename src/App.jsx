import {} from 'react'
import "./App.css"
import Greetings from './components/Greetings'

let name = "michael"
let age = 17
const numbers = [1,2,3,4,5]
const people = [
  { name: "John", age: 25, index: 1 },
  { name: "Doe", age: 30, index: 2 },
  { name: "Jane", age: 35, index: 3 },
];

const users = [
  { name: "John", age: 25, id: 2 },
  { name: "Doe", age: 30, id: 3 },
  { name: "Jane", age: 35, id: 4 },
];

let loggedIn = false;
const reply = loggedIn ? "User is logged in": "User is not logged in"
console.log(reply)

const handleClick = (name) => {
        alert(`hey ${name}!`);
}

const App = () => {
  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "green" }}>
        hello {name} i am {age} years old{" "}
      </h1>

      {numbers.map((number, index) => (
        <ul key={index}>
          <li>{number}</li>
        </ul>
      ))}
      {people.map((person, index) => (
        <h1 key={index}>
          hello {person.name} and i am {person.age} years old and my index is{" "}
          {person.index}
        </h1>
      ))}

      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
          <li>{user.age}</li>
        </ul>
      ))}

      {loggedIn ? <h1>User logged in</h1> : <h1>User not logged in</h1>}
      {loggedIn && <h1>User is logged in</h1>}
      <Greetings name="bolaji" age="17" handleClick={handleClick} />
      <Greetings name="bolaji" age="17" handleClick={handleClick} />
      <Greetings name="bolaji" age="17" handleClick={handleClick} />
    </div>
  );

}

export default App
