import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [toDoList, setToDoList] = useState([])

  const saveToDO = (e) => {
    let toname = e.target.toname.value
    if (!toDoList.includes(toname.trim())) {
      let finalToDoList = [...toDoList, toname]
      setToDoList(finalToDoList)
    }
    else {
      alert("Already exist...")
    }

    e.preventDefault()
  }

let list = toDoList.map((value, index)=>(
  <ToDoListItem value={value} key={index} indexno = {index}
  toDoList={toDoList} setToDoList={setToDoList} />
))


  return (
    <>

      <h1>To do list</h1>

      <form onSubmit={saveToDO}>
        <input type="text"
          name='toname'

        />

        <button>Save</button>
      </form>

      <div className='outerdiv'>
        <ul>
          {list}
        </ul>

      </div>

      
    </>
  )
}

export default App

function ToDoListItem({value,indexno, toDoList, setToDoList}){
  const deleteToDo = () => {
  let updatedToDo = toDoList.filter((v, i)=> i!=indexno)
  setToDoList(updatedToDo)

}

const [status, setStatus] = useState(false)

const checkStatus = ()=>{
  setStatus(!status)
}

  return(
      <li className={(status)?'todostatus':''} onClick={checkStatus}>
            {value} <span onClick={deleteToDo}> X </span>
      </li>
  )
}