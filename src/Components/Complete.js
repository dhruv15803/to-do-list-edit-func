import React from 'react'
import { Link } from 'react-router-dom'

const Complete = ({complete,clearCompleted}) => {
  return (
    <>
    <div className="complete-outer-container">
        <div className="complete-inner-container">
            <div className="complete-title-container">
                <h1>Completed tasks</h1>
                {complete.length===0 && <p>No completed tasks. <Link to='/'>Click here</Link></p>}
            </div>
            <div className="complete-list-container">
                {complete.map((item,i)=>{
                    return <div className="complete-list-item">
                    <p>{item}</p>
                </div>
                })}
            </div>
            {complete.length!==0 && <div className="clear-completed">
                <button className="form-btn" onClick={clearCompleted}>Clear</button>
            </div>}
        </div>
    </div>
    </>
  )
}

export default Complete