import React, {useState, useContext} from 'react'
import GlobalContext from '../state/GlobalContext'

const Form = () => {
  const [newName, setNewName] = useState("")
  const {dispatch} = useContext(GlobalContext)

  const increase = () => dispatch({type: "INCREASE"})
  const decrease = () => dispatch({type: "DECREASE"})
  const changeName = (e) => setNewName(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: 'CHANGE_NAME', payload: newName})
    setNewName("")
  }


  return (
    <div className='card'>
      <form onSubmit={handleSubmit}>
        <h2>Change Name</h2>
        <input type="text" onChange={changeName} value={newName}/>
        <button>Change</button>
      </form>
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  )
}

export default Form