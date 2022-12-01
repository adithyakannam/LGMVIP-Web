import React from 'react'
import "./App.css"

const App = () => {
  return (
    <div className='total'>
     <div className='container'>
      <h1 className='hi'>Todo-List</h1>
       <form className='form'>
         <input type="text"/>
         <button>ADD</button>
      </form>
      <ul className='allTodos'>
        <li className='singleTodo'>
          <span className="todo">learn React </span>
          <button>edit</button>
          <button>delete</button>
        </li>
      </ul>
     </div> 
    </div>
  )
}

export default App