import React, {useContext} from 'react'
import GlobalContext from '../state/GlobalContext'

const Charlie = () => {
  const {state} = useContext(GlobalContext)
  
  return (
    <div>
      <h3>Charlie</h3>
      <div className="card">
        <h3>Name: {state.name}</h3>
        <h3>Count: {state.count}</h3>
      </div>
    </div>
  )
}

export default Charlie