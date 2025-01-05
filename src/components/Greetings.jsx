import {} from 'react'

const Greetings = ({name,age, handleClick}) => {
    console.log(name)
      return (
    <div>
      <h1 onClick={() => handleClick(name)}>How u doing {name}, {age} </h1>
    </div>
  )
}

export default Greetings
